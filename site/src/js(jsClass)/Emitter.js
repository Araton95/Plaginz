var $$ = $$ || {};

$$.Emitter = new JS.Class({
	initialize: function () {
		this._itemContainer = new $$.Emitter.ItemContainer();
	},

	/**
	 * @param {String} eventId
	 * @return {Boolean}
	 * @private
	 */
	_isEventIdJustANamespace: function (eventId) {
		eventId = String(eventId);

		return !!eventId.match(/^\.[a-z\d]+$/i);
	},

	/**
	 * @param {String} eventId
	 * @return {Array} [eventName, namespace]
	 * @throws {Error}
	 * @private
	 */
	_parseAndValidateEventId: function (eventId) {
		eventId = String(eventId);

		// Either a single event name.

		var match = eventId.match(/^[a-z\d]+$/i);

		if (match) {
			return [match[0], null];
		}

		// Or an event name + a namespace name.

		match = eventId.match(/^([a-z\d]+)\.([a-z\d]+)$/i);

		if (!match) {
			throw Error(
				'Full event names should not be empty, should consist of letters and numbers'
				+ ' and may contain only single dot in the middle.'
			);
		}

		return [match[1], match[2]];
	},

	/**
	 * @param {String} eventId
	 */
	trigger: function (eventId /*, eventData1, eventData2, ... */) {
		eventId = String(eventId);

		var parts = this._parseAndValidateEventId(eventId);
		var items = this._itemContainer.getItems(parts[0], parts[1]);
		var args = Array.prototype.slice.call(arguments, 1);

		_.each(items, function (item) {
			item.callback.apply(null, args);
		});
	},

	/**
	 * @param {String} eventId
	 * @param {Function} callback
	 */
	on: function (eventId, callback) {
		if (!callback) {
			throw Error('An event callback should be provided.');
		}

		if (!_.isFunction(callback)) {
			throw Error('An event callback should be a function.');
		}

		var parts = this._parseAndValidateEventId(eventId);

		this._itemContainer.add(parts[0], parts[1], callback);
	},

	off: function (eventId) {
		if (!arguments.length) {
			this._itemContainer.clear();
			return;
		}

		eventId = String(eventId);

		if (this._isEventIdJustANamespace(eventId)) {
			// Just a namespace.
			this._itemContainer.remove(null, eventId.substr(1));
		} else {
			// Event name and possible namespace.
			var parts = this._parseAndValidateEventId(eventId);
			this._itemContainer.remove(parts[0], parts[1]);
		}
	}
});

$$.Emitter.ItemContainer = new JS.Class({
	initialize: function () {
		/* Items:
		 *
		 * {
		 *   eventName1: {
		 *     namespace1: [ { callback, *... }, ... ],
		 *     namespace2: [ ... ]
		 *     ...
		 *   },
		 *
		 *   eventName2: { ... }
		 *   ...
		 * }
		 */
		this._items = {};
	},

	/**
	 * @param {String} eventName
	 * @param {String}|null namespace
	 * @param {Function} callback
	 */
	add: function (eventName, namespace, callback) {
		eventName = String(eventName);
		namespace = !namespace ? '*' : String(namespace);

		if (!this._items.hasOwnProperty(eventName)) {
			this._items[eventName] = {};
		}

		if (!this._items[eventName].hasOwnProperty(namespace)) {
			this._items[eventName][namespace] = [];
		}

		this._items[eventName][namespace].push({
			callback: callback
		});
	},

	/**
	 * @param {String} eventName
	 * @param {String}|null namespace
	 * @return {Array}
	 */
	getItems: function (eventName, namespace) {
		eventName = String(eventName);

		if (!this._items.hasOwnProperty(eventName)) {
			return [];
		}

		if (!namespace) {
			// Return items for all namespaces of the event.

			var arraysOfItems = _.values(this._items[eventName]);

			return _.union.apply(null, arraysOfItems);
		}

		namespace = String(namespace);

		if (!this._items[eventName].hasOwnProperty(namespace)) {
			return [];
		}

		return this._items[eventName][namespace];
	},

	/**
	 * Removes by event name, by namespace or by both.
	 *
	 * @param {String}|null eventName
	 * @param {String}|null namespace
	 */
	remove: function (eventName, namespace) {
		if (!eventName && !namespace) {
			throw Error('Only one of the arguments can be omitted.');
		}

		if (!namespace) {
			this.removeByEventName(eventName);
		} else if (!eventName) {
			this.removeByNamespace(namespace);
		} else {
			// Both eventName and namespace are not null.

			eventName = String(eventName);
			namespace = String(namespace);

			if (!this._items.hasOwnProperty(eventName) || !this._items[eventName].hasOwnProperty(namespace)) {
				return;
			}

			delete this._items[eventName][namespace];
		}
	},

	/**
	 * @param {String} eventName
	 */
	removeByEventName: function (eventName) {
		eventName = String(eventName);

		if (!this._items.hasOwnProperty(eventName)) {
			return;
		}

		delete this._items[eventName];
	},

	/**
	 * @param {String} namespace
	 */
	removeByNamespace: function (namespace) {
		namespace = String(namespace);

		_.each(this._items, function (itemsByNamespace) {
			if (!itemsByNamespace.hasOwnProperty(namespace)) {
				return;
			}

			delete itemsByNamespace[namespace];
		});
	},

	clear: function () {
		this._items = {};
	}
});
