// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $productList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveProduct: function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/products",
      data: JSON.stringify(example)
    });
  },
  getExamples: function () {
    return $.ajax({
      url: "api/products",
      type: "GET"
    });
  },
  getOneProduct: function (id) {
    return $.ajax({
      url: "api/products/" + id,
      type: "GET"
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: "api/products/" + id,
      type: "DELETE"
    });
  }
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleProductSubmit = function (event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveProduct(example).then(function () {
    location.reload();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};




// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the page
var handleDeleteBtnClick = function () {
  var getProductbyId = $(this).parent().attr("data-id");
  API.getOneProduct(getProductbyId).then(function (data) {
    var password = data.password;
    var EnteredPass = prompt("Please enter the listing password");

    if (EnteredPass === password) {
      API.deleteExample(getProductbyId).then(function () {
        location.reload();
      });
    } else {
      alert("Incorrect. Please enter the password you used when creating this listing.");
    }
  });


};


// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleProductSubmit);
$productList.on("click", ".delete", handleDeleteBtnClick);
