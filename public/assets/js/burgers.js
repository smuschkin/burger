console.log("test");
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var devouredBurger = $(this).data("devouredburger");

    var devouredBurgerState = {
      devoured: devouredBurger
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurgerState
    }).then( 
      function () {
        console.log("Eaten burger");
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});
