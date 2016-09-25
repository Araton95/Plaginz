var $$ = $$ || {};

$$.App = new JS.Class({
	/**
	 * @lends $$.App
	 */

	/**
	 * Основной класс приложения.
	 *
	 * @class $$.App
	 * @this $$.App
	 * @constructs
	 */
	initialize: function () {
		this._defineTemplates();
		this._cacheNodes();
		this._createComponents();
		this._bindEvents();
		this._ready();
	},

	_cacheNodes: function () {
		this.nodes = {};

		this.nodes.addresses = $('.map-addresses .list-group-item');

	},

	/**
	 * Объявляет шаблоны.
	 *
	 *  @private
	 */
	_defineTemplates: function () {
	},

	/**
	 * Создает необходимые компоненты.
	 *
	 * @private
	 */
	_createComponents: function () {
		this.createGoogleMap();
		this.createSocialShare();
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
		/* Google Analytics event tracking using data attribute */
		var analyticsTrackEvent = function () {
			$('[data-track-event]').on('click', function (e) {
				e.preventDefault();
				var trackEventData = $(this).data('track-event') || '';

				if (trackEventData.length) {
					var eventArray = trackEventData.split(',');
					// Make sure there are at least 2 values
					if (eventArray.length >= 2) {
						// Split up the track event data into GA variables
						var trackCategory = eventArray[0], // Required (String)
							trackAction = eventArray[1], // Required (String)
							trackLabel = eventArray[2], // Optional (String)
							trackValue = eventArray[3]; // Optional (Number)
						// Send event data to GA
						ga('send', 'event', trackCategory, trackAction, trackLabel, trackValue);
						console.log(trackCategory, trackAction, trackLabel, trackValue);
					}
				}
			});
		};

		analyticsTrackEvent();
	},

	/**
	 * Оборачивает шаблон/шаблоны в функцию, принимающую на вход объект с данными для шаблона.
	 *
	 * @private
	 */


	createGoogleMap: function () {

		if (!this.nodes.addresses.length) {
			return;
		}

		/**
		 * Пример инициализации карты
		 * @type {$$.GoogleMap}
		 */


		var GoogleMap = new $$.GoogleMap($('.canvas-map'), {
			coords: $.parseJSON(this.nodes.addresses.first().data('coords').json)
		});

		GoogleMap.setIcon('./site/assets/images/point.png', [32, 37]);

		this.nodes.addresses.each(function (index) {
			var item = $(this);
			var coords = $.parseJSON(item.data('coords').json);

			GoogleMap.setMarker(coords);

			item.on('click', function (e) {
				e.preventDefault();
				var item = $(this);

				if (item.hasClass('active')) {
					return;
				}

				item.siblings().removeClass('active').end().addClass('active');

				GoogleMap.panTo(coords);
			})
		});

		GoogleMap.on('mapClick', function (event) {
			console.log(event.latLng.lat());
			console.log(event.latLng.lng());
		});
	},

	createSocialShare: function () {
		if (!$('.social-likes').length) {
			return;
		}

		var social = new $$.SocialShare($('.social-likes'), {
			url:  'test.html',
			data: {
				title:       'Заголовок',
				description: 'Описание проекта',
				media:       'http://frontend.dev/assets/images/logo.png'
			}
		});
	}
});

$(function () {
	$$.app = new $$.App();
});
