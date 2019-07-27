var Messages = {
  $button: $('.submit'),

  add: function () {
    var room = document.getElementById('select').value;

    var userInput = document.getElementById("message").value;

    // var name = App.username;
    $(Messages.$button).on("click", function () {
      console.log(room);
      console.log(userInput)
      console.log(App.username)
      if (userInput !== undefined) {
        Parse.create({ username: App.username, text: userInput, roomname: room })
        // RoomsView.rooms.push(userInput);
      }
    })

  }
};

// <select id="ddlViewBy">
//   <option value="1">test1</option>
//   <option value="2" selected="selected">test2</option>
//   <option value="3">test3</option>
// </select>
// Running this code:

// var e = document.getElementById("ddlViewBy");
// var strUser = e.options[e.selectedIndex].value;
// Would make strUser be 2. If what you actually want is test2, then do this:

// var e = document.getElementById("ddlViewBy");
// var strUser = e.options[e.selectedIndex].text;
// Which would make strUser be test2


