// For more information see: http://emberjs.com/guides/routing/

EmberRaffler.Router.map(function() {

	this.route('entries', {
		path: '/'
	});
});

EmberRaffler.EntriesRoute = Ember.Route.extend({

	model: function() {
		return this.store.find('entry');
	}
});