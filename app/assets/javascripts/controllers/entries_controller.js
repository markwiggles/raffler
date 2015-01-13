EmberRaffler.EntriesController = Ember.ArrayController.extend({

	actions: {
		addEntry: function() {

			//Create the entry record
			var entry = this.store.createRecord('entry', {
				name: this.get('newEntryName'),
				winner: false
			});
			// Save the changes
			entry.save();
			this.set('newEntryName', "");
		},

		drawWinner: function() {

			var pool, entry;

			//loop through pool and only keep any entries with winner = false
			pool = this.rejectProperty('winner');
			//set each of the items with highlight = false
			this.setEach('highlight', false);

			if (pool.length > 0) {
				var index = Math.floor(Math.random() * pool.length);
				entry = pool[index];
				entry.set('winner', true);
				entry.set('highlight', true);
				// Save the changes
				entry.save();
			}
		}
	},

	allWinners: function() {

			console.log('Winner: ' + this.everyProperty('winner'));

			return this.everyProperty('winner');

		}.property('@each.winner')
});