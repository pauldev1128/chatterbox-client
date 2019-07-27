var Rooms = {

  add: function () {
    $(RoomsView.$button).on("click", function () {
      var userInput = document.getElementById("message").value;
      if(userInput !== undefined){
        if(!RoomsView.rooms.includes(userInput)){
          $(RoomsView.$select).append(`<option class="select" value = "roomname">${userInput}</option>`);
          RoomsView.rooms.push(userInput);
        }
      }
    });
  }
};