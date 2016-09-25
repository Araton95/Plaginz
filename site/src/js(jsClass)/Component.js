var $$ = $$ || {};

$$.Component = new JS.Class($$.Emitter, {
	/**
	 * @lends $$.Component
	 */

	/**
	 * Шаблон компонента.
	 *
	 * @class $$.Component
	 * @requires $$.Emmiter
	 * @this $$.Component
	 * @constructs
	 * @param {...Object} var_args
	 */
	initialize: function (w) {
		this.callSuper();

		if (arguments.length === 2) {
			this.root = arguments[0];
			this.options = _.merge(arguments[1] || {}, this.klass.defaultOptions, _.defaults);
		} else if (arguments.length === 1) {
			if (arguments[0] instanceof jQuery) {
				this.root = arguments[0];
			} else if (arguments[0] instanceof Object) {
				this.options = _.merge(arguments[0] || {}, this.klass.defaultOptions, _.defaults);
			}
		}

		this._defineTemplates();
		this.__convertTemplates();
		this._cacheNodes();
		this._createComponents();
		this._bindEvents();
		this._ready();
	},

	/**
	 * Объявляет шаблоны.
	 *
	 *  @private
	 */
	_defineTemplates: function () {
	},

	/**
	 * Кэширует элементы.
	 *
	 * @private
	 */
	_cacheNodes: function () {
	},

	/**
	 * Создает необходимые компоненты.
	 *
	 * @private
	 */
	_createComponents: function () {
	},

	/**
	 * Вешает обработчики событий на компоненты/элементы.
	 *
	 * @private
	 */
	_bindEvents: function () {
	},

	/**
	 * Вызывается на этапе готовности компонентов/элементов к работе с ними.
	 *
	 * В основном метод используется для применения опций, добавления шаблона в DOM.
	 *
	 * @private
	 */
	_ready: function () {
	},

	/**
	 * Оборачивает шаблон/шаблоны в функцию, принимающую на вход объект с данными для шаблона.
	 *
	 * @private
	 */
	__convertTemplates: function () {
		if (_.isUndefined(this.template) && _.isUndefined(this.templates)) {
			return;
		}

		if (_.isString(this.template)) {
			this.template = _.template(this.template);
		} else if (_.isObject(this.templates)) {
			_(this.templates).forEach(_.bind(function (template, templateName) {
				this.templates[templateName] = _.template(template);
			}, this));
		}
	}
});
