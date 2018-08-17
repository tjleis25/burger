   
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added a new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".devourBtn").on("click", function(event) {
      var burgerID = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + burgerID, {
        type: "PUT",
        data: burgerID
      }).then(
        function() {
          console.log("devoured burger", burgerID);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  