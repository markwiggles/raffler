EmberRaffler.NewEntryView = Ember.View.extend({

	templateName: 'new_entry',

	tagName: 'form',

	// action when the submit button is clicked
	// - trigger (send) the addEntry fucntion in the controller
	submit: function() {
		this.get('controller').send('addEntry');
		return false;
	}
});