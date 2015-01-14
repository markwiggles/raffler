EmberRaffler.NewEntryView = Ember.View.extend({

	templateName: 'new_entry',

	tagName: 'form',

	/* action when the submit button is clicked
	 - trigger (send) the addEntry function in the controller, passing 'newentryName' */
	submit: function() {

		var cntrl = this.get('controller');
		cntrl.send('addEntry', cntrl.get('newEntryName'));
		cntrl.set('newEntryName', "");
		return false;
	}
});

