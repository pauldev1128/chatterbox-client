var Friends = {
  friendsList: [],

  toggleStatus: function () {
    let status;
    $(".username").on("click", function () {
      console.log(".username")
      if (Friends.friendsList.includes(".username")) {
        status = false;
        var index = Friends.friendsList.indexOf(".username")
        Friends.friendsList.slice(index, 1);
      }
      status = true;
      Friends.friendsList.push(".username");
    })
    return status;
  }

}




