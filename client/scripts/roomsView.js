var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  rooms: [],
  initialize: function () {
    $(document).ready(function () {
      console.log("ready!");
    });
  },
  renderRoom: function (roomname) {
    if (roomname !== undefined) {
      if (roomname.includes("<")) {
        roomname = "nice try";
      }

      if (!RoomsView.rooms.includes(roomname)) {
        $(RoomsView.$select).append(`<option value = "roomname">${roomname}</option>`);
        RoomsView.rooms.push(roomname);
      }
    };
  }
}