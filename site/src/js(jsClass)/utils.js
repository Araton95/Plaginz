var $$ = $$ || {};

$$.trim = function (str, charlist) {
	charlist = !charlist ? ' \\s\xA0' : charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
	var re = new RegExp('^[' + charlist + ']+|[' + charlist + ']+$', 'g');
	return str.replace(re, '');
};

$$.parseUrlParams = function (url) {
	var url = url || location.href;
	var searchParam = {};
	var regExpParams = /\?{1}.+/;

	if (regExpParams.test(url)) {
		url = url.replace(regExpParams, '');

		var urlParams = location.search.replace('?', '');
		urlParams = urlParams.split('&');

		_.each(urlParams, function (item, index, list) {
			var param = item.split('=');
			searchParam[param[0]] = param[1];
		});
	}
	return searchParam;
};

$$.clamp = function (value, min, max) {
	return Math.min(max, Math.max(min, value));
};

$$.makeVideoPlayerHtml = function (videoType, videoId, width, height) {
	if (videoType == 'youtube') {
		return '<iframe class="youtube-player" type="text/html"'
			+ ' width="' + width + '" height="' + height + '" src="'
			+ 'http://www.youtube.com/embed/' + videoId
			+ '?autoplay=1" frameborder="0" wmode="opaque"></iframe>';
	} else if (videoType == 'vimeo') {
		return '<iframe wmode="opaque" width="' + width + '" height="' + height + '" src="'
			+ 'http://player.vimeo.com/video/' + videoId
			+ '?autoplay=true" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
	}

	return '';
};

$$.Transitions = {
	linear: function (t) {
		return t;
	},

	quadIn: function (t) {
		return t * t;
	},

	quadInOut: function (t) {
		t *= 2;

		if (t < 1) {
			return 0.5 * t * t;
		}

		return -0.5 * ((t - 1) * (t - 3) - 1);
	},

	quadOut: function (t) {
		return -t * (t - 2);
	},

	sineIn: function (t) {
		return 1 - Math.cos(t * Math.PI * 0.5);
	},

	sineInOut: function (t) {
		return 0.5 - 0.5 * Math.cos(t * Math.PI);
	},

	sineOut: function (t) {
		return Math.sin(t * Math.PI * 0.5);
	}
};

$$.getRandomInt = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

$$.toUrlParameters = function (data) {
	var parameters = [];

	_(data).forEach(function (value, key) {
		parameters[parameters.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
	});

	return parameters.join('&').replace(/%20/g, '+');
};

$$.formatFileSize = function (bytes) {
	var result;

	if (typeof bytes !== 'number') {
		return '';
	}

	if (bytes >= 1000000) {
		result = (bytes / 1000000).toFixed(2) + ' Мб';
		return result;
	}

	result = (bytes / 1000).toFixed(2) + ' Кб';
	return result;
};

$$.baseToString = function (value) {
	/* jshint ignore:start */
	if (typeof value == 'string') {
		return value;
	}
	return value == null ? '' : (value + '');
	/* jshint ignore:end */
};
