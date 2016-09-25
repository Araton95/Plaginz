var $$ = $$ || {};
var TILE_SIZE = 256;

$$.GoogleMap = new JS.Class($$.Component, {
	extend: {
		defaultOptions: {
			offset:     false,
			coords:     [-34.397, 150.644],
			mapOptions: {
				mapTypeId:          !_.isUndefined(window.google) ? google.maps.MapTypeId.ROADMAP : '', //MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN
				maxZoom:            45,
				zoom:               15,
				minZoom:            0,
				zoomControl:        true,
				overviewMapControl: true
			}
		}
	},

	/**
	 * @lends $$.GoogleMap
	 */

	/**
	 * Компонент $$.GoogleMap.
	 *
	 * @class $$.GoogleMap
	 * @requires $$.Component
	 * @this $$.GoogleMap
	 * @constructs
	 * @param {jQuery} root
	 * @param {Object} options
	 */
	initialize: function (root, options) {
		this.callSuper(root, options);

	},

	_cacheNodes: function () {
		this.nodes = {};
		this.gm = google.maps;
		this.map = null;
		this.icon = null;
		this.MercatorProjection = null;
		this.center = null;
	},

	/**
	 * Установка иконки для маркера, пока только картинка
	 * @param iconUrl
	 * @param size
	 */

	//TODO: Сделать возможно задавать иконки через шрифт
	setIcon: function (iconUrl, size) {
		this.icon = {
			url:    iconUrl,
			size:   new google.maps.Size(size[0], size[1]),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(size[0] / 2, size[1])
		};
	},

	_getIcon: function () {
		return this.icon;
	},

	/**
	 * Установка маркера
	 * может принимать массив из 2-х координат
	 * или гугловский объект координат
	 * @param coords
	 */
	setMarker: function (coords) {
		var self = this;
		var position = null;

		if (_.isArray(coords)) {
			position = new this.gm.LatLng(coords[0], coords[1]);
		} else {
			position = coords;
		}

		var icon = this._getIcon() == null ? '' : this._getIcon();

		var marker = new this.gm.Marker({
			position: position,
			map:      this.map,
			icon:     icon
		});

		this.trigger('markerCreated', {marker: marker});
	},

	/**
	 * Установка центра
	 * может принимать массив из 2-х координат
	 * или гугловский объект координат
	 * @param coords
	 */
	setCenter: function (coords) {
		var position = null;

		_.isArray(coords) ? position = new this.gm.LatLng(coords[0], coords[1]) : position = coords;

		this.map.setCenter(position);

		this.center = position;
	},

	/**
	 * Перемещение к указанным координатам
	 * может принимать массив из 2-х координат
	 * или гугловский объект координат
	 * @param coords
	 */
	panTo: function (coords) {
		var position = null;

		_.isArray(coords) ? position = new this.gm.LatLng(coords[0], coords[1]) : position = coords;

		this.map.panTo(position);
		this.center = position;
		if (this.MercatorProjection) {
			var offset = this.root.width() - this.options.offset;

			var point = new google.maps.Point(offset / 2, this.root.height() / 2);
			var latLng = this.MercatorProjection.PixelToLatLng(point);
			this.map.panTo(latLng);

			this.center = latLng;
		}
	},

	/**
	 * Создаёт карту
	 * @private
	 */
	_createMap: function () {
		var centerMap = new this.gm.LatLng(this.options.coords[0], this.options.coords[1]);
		this.map = new this.gm.Map(this.root.get(0), this.options.mapOptions);
		this.map.setCenter(centerMap);

		this.center = centerMap;

		google.maps.event.addListenerOnce(this.map, 'idle', _.bind(function () {
			this.trigger('mapIdle');
		}, this));

		google.maps.event.addListener(this.map, 'click', _.bind(function (event) {
			this.trigger('mapClick', event);
		}, this));

		google.maps.event.addListener(this.map, 'zoom_changed', _.bind(function (event) {
			this.trigger('zoomChanged', event);
		}, this));

		google.maps.event.addListener(this.map, 'dragstart', _.bind(function (event) {
			this.center = null;
		}, this));

	},

	/**
	 *
	 * @private
	 *
	 * events:
	 *            mapIdle - загрузка карты
	 *            markerCreated - маркер создан
	 *            mapClick - Клик по карте
	 *            zoomChanged - Изменение зума
	 */

	_bindEvents: function () {
		this.on('mapIdle', _.bind(function () {
			if (this.options.offset) {
				this.MercatorProjection = new $$.GoogleMap.MercatorProjection($, {
					map: this.map
				});

				var offset = this.root.width() - this.options.offset;

				var point = new google.maps.Point(offset / 2, this.root.height() / 2);
				var latLng = this.MercatorProjection.PixelToLatLng(point);

				this.map.setCenter(latLng);

				this.center = latLng;
			}
		}, this));

		this.on('markerCreated', _.bind(function (object) {
			google.maps.event.addListener(object.marker, 'click', _.bind(function () {
				this.panTo(object.marker.getPosition());
			}, this));
		}, this));

		this.on('zoomChanged', _.bind(function (event) {
			if (this.center) {
				this.map.panTo(this.center);
			}
		}, this));
	},

	_ready: function () {
		this.gm.event.addDomListener(window, 'load', this._createMap());
	}
});

$$.GoogleMap.MercatorProjection = new JS.Class($$.GoogleMap, {
	extend: {},

	initialize: function (root, options) {
		this.callSuper(root, options);
	},

	_cacheNodes: function () {
		this.map = this.options.map;
		// Extend OverlayView so we can access MapCanvasProjection.
		this.mapOverlay = new google.maps.OverlayView();
		this.mapOverlay.draw = function () {
		};

		this.pixelOrigin_ = new google.maps.Point(TILE_SIZE / 2,
			TILE_SIZE / 2);
	},

	/**
	 * Specified LatLng value is used to calculate pixel coordinates and
	 * update the control display. Container is also repositioned.
	 * @param {google.maps.LatLng} latLng Position to display
	 */
	LatLngToPixel: function (latLng) {
		var projection = this.mapOverlay.getProjection();
		var point = projection.fromLatLngToContainerPixel(latLng);
		return point
	},

	/**
	 * Specified LatLng value is used to calculate pixel coordinates and
	 * update the control display. Container is also repositioned.
	 * @param {google.maps.Point} Point Position to display
	 */
	PixelToLatLng: function (point) {
		var projection = this.mapOverlay.getProjection();
		var newPoint = projection.fromContainerPixelToLatLng(point);

		return newPoint;
	},

	_ready: function () {
		this.mapOverlay.setMap(this.options.map);
	}
});
