EmberRaffler.NewEntryView = Ember.View.extend({

	templateName: 'new_entry',

	tagName: 'form',

	// action when the submit button is clicked
	// - trigger (send) the addEntry function in the controller, passing 'newentryName'
	submit: function() {

		this.get('controller').send('addEntry', this.get('newEntryName'));

		console.log('NAME: ' + this.get('controller').get('newEntryName'));
		this.set('newEntryName', "");
		return false;
	}
});