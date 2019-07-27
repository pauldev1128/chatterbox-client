var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $( document ).ready(function() {
        console.log( "ready!" );
    });

  },

  renderMessage: function(message) {
  for (var key in message) {
    if (message[key].includes("<") || message[key].includes("src=") ) {
      message[key] = "nice try"
    }     
  }
  var rendered = _.template(
      
    '<div class="message">' +
      '<div class="username">' +
        '<%= username %>' + 
      '</div>'+
      '<div class="roomname">' +
        '<%= roomname %>' + 
      '</div>'+
      '<div class="text">' + 
        '<%= text %>' + 
      '</div>'+
    '</div>'
      
  );
  $(MessagesView.$chats).append(rendered(message));
  }
}
