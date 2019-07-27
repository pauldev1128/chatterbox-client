var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $( document ).ready(function() {
        console.log( "ready!" );
    });
  },

  renderRoom: function(roomname) {
  if (roomname.includes("<") || roomname.includes("src=")) {
    roomname = "nice try";
  }
    
}