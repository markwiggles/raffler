EmberRaffler.EntriesController = Ember.ArrayController.extend({

	actions: {
		addEntry: function(name) {
			//Create the entry record
			var entry = this.store.createRecord('entry', {
				name: name,
				winner: false
			});
			// Save the changes
			entry.save();			
		},

		drawWinner: function() {

			var pool, entry;
			//Initialise a 'pool' array with any items having 'winner' as false
			pool = this.rejectProperty('winner');
			//Set each of the items with highlight = false
			this.setEach('highlight', false);
			//If there are some entries, then calculate a random index, and set booleans: 'winner' and 'highlight'
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
	/* Create a property which returns a boolean, 
	returning true if all 'winner' attributes are true,
	listening to each winner attribute */
	allWinners: function() {
			return this.everyProperty('winner');
		}.property('@each.winner')
});