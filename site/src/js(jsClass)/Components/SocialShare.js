var $$ = $$ || {};

$$.SocialShare = new JS.Class({
	/**
	 * @param var_args
	 */
	initialize: function (var_args) {
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

		this.set(this.options.url);
	},

	/**
	 * @param url
	 * @param data
	 */
	set: function (url, data) {

		var url = url || '';
		url = location.protocol + '//' + location.host + url;

		var data = _.merge(data || {}, this.root.data(), _.defaults);

		var title = data.title;
		var description = data.description;
		var media = data.media;

		var shareButtons = '<ul class="b-share-to-social-networks"'
			+ 'data-title="' + title + '"'
			+ 'data-description="' + description + '"'
			+ 'data-media="' + media + '"'
			+ 'data-url="' + url + '">' +
			'<li class="facebook g-icon-facebook" title="Поделиться ссылкой на Facebook"></li>' +
			'<li class="vkontakte g-icon-vk" title="Поделиться ссылкой во Вконтакте"></li>' +
			'<li class="twitter g-icon-twitter" title="Поделиться ссылкой в Twitter"></li>' +
			'<div class="clearfix"></div>' +
			'</ul>';

		this.root.empty();
		this.root.append(shareButtons);

		this.root.find('.b-share-to-social-networks').socialLikes();
	}
});
