var $submitBtn = $("#submit");


var API = {
  saveProduct: function (product) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/products",
      data: JSON.stringify(product)
    });
  }
};

var handleProductSubmit = function (event) {
  event.preventDefault();

  var product = {
    name: $("#name").val().trim(),
    description: $("#description").val().trim(),
    image: $("#name").val().trim(),
    password: $("#psw").val().trim(),
    email: $("#email").val().trim(),
    username: $("#username").val().trim(),
    phone: $("#phone").val().trim()
  };

  console.log(product);

  // if (!(example.text && example.description)) {
  //   alert("You must enter an example text and description!");
  //   return;
  // }

  // API.saveProduct(product).then(function () {
  //   location.reload();
  // });

  // Clear values
  $exampleText.val("");
  $exampleDescription.val("");
};

var test = function (event) {
  event.preventDefault();
  console.log("test works");
};

$submitBtn.on("click", handleProductSubmit);
