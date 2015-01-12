// For more information see: http://emberjs.com/guides/routing/

EmberRaffler.Router.map(function() {

	this.route('entries', {
		path: '/'
	});
});

EmberRaffler.EntriesRoute = Ember.Route.extend({

	//more concise
	model: function() {
		return this.store.find('entry');
	},

	setupController: function(controller, model) {

		controller.set('content', model);
	}

});