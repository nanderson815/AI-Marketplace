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
  },
  getWatson: function(url){
    console.log(url);
    return $.ajax({
      type: "GET",
      url: "api/watson",
      data: {
        URL: url
      }
    });
  }
};

var handleProductSubmit = function (event) {

  var form = $("#productForm")[0];
  if (form.checkValidity()) {
    event.preventDefault();

    var product = {
      "name": $("#name").val().trim(),
      "description": $("#description").val().trim(),
      "image": $("#image").val().trim(),
      "password": $("#psw").val().trim(),
      "email": $("#email").val().trim(),
      "userName": $("#username").val().trim(),
      "phone": $("#phone").val().trim()
    };

    API.saveProduct(product).then(function () {
      location.reload();
    });

    // Clear values
    $("#productForm")[0].reset();

  } else {
    alert("Please complete the form!");
  }
};

$submitBtn.on("click", handleProductSubmit);

API.getWatson("https://watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/640px-IBM_VGA_90X8941_on_PS55.jpg");
