// Adds X-CSRF-Token to all REST requests.
// Allows for the use of Rails protect_from_forgery
// The CSRF Token is normally found in app/views/layouts/application.html.*
// inserted with the rails helper: "csrf_meta_tags"
DS.RESTAdapter.reopen({
	headers: {
		"X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
	}
});

// EmberRaffler.store = DS.Store.create({
//   adapter: DS.RESTAdapter.create({ bulkCommit: false,
//                                    plurals: {"entry": "entries"} }),
//   revision: 11
// });

//DS.RESTAdapter.configure({"plurals", entry: "entries"});


EmberRaffler.ApplicationStore = DS.Store.extend({});

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
EmberRaffler.ApplicationAdapter = DS.ActiveModelAdapter.extend({});

// EmberRaffler.ApplicationAdapter = DS.RESTAdapter.extend({

// 	revision: 12,
// 	plurals: {
// 		'entry': 'entries'
// 	}
// });


// EmberRaffler.Store = DS.Store.extend({

// 	revision: 12,
// 	adapter: DS.RESTAdapter.create({
// 		plurals: {
// 			'entry': 'entries'
// 		}
// 	})

// });

DS.rejectionHandler = function(reason) {
  Ember.Logger.assert([reason, reason.message, reason.stack]);

  throw reason;
};