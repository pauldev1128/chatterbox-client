var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    $(document).ready(function () {
      console.log("ready!");
    });

  },

  renderMessage: function (message) {
    if (message.username !== undefined && message.text !== undefined && message.roomname !== undefined) {
      for (var key in message) {
        if (message[key].includes("<")) {
          message[key] = "nice try"
        }
      }
      var rendered = _.template(

        '<div class="message">' +
        '<a href ="#" class="username">' +
        '<%= username %>' +
        '</a>' +
        '<div class="roomname">' +
        '<%= roomname %>' +
        '</div>' +
        '<div class="text">' +
        '<%= text %>' +
        '</div>' +
        '</div>'

      );
      $(MessagesView.$chats).append(rendered(message));
    }
  }
}
