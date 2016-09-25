var $$ = $$ || {};

class Application {
	constructor () {
		this._initGoogleMap();
	}

	_initGoogleMap() {
		$('.b-map').each(function () {
			$$.googleMap = new GoogleMap($(this));
		});
	}
}

$(function () {
	$$.application = new Application();
});
