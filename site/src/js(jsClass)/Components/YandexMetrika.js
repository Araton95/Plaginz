var $$ = $$ || {};

$$.YandexMetrika = new JS.Singleton({
	counter: null,

	reachGoal: function (goal) {
		if (this.counter) {
			this.counter.reachGoal(goal);
		}
	}
});
