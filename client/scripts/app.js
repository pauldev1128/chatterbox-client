var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Rooms.add()
    Friends.toggleStatus();
    Messages.add();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
console.log(data)
      // examine the response from the server request:
    for (var i = 0; i < data.results.length; i++) {
      MessagesView.renderMessage(data.results[i]);
      RoomsView.renderRoom(data.results[i].roomname);

      callback();
    }

    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
