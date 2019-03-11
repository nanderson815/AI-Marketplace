var $submitBtn = $("#submit");
var $imgBtn = $("#addImage");


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
  getWatson: function (url) {
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
      "phone": $("#phone").val().trim(),
      "price": $("#price").val().trim()
    };

    API.saveProduct(product).then(function () {
      // location.reload();
    });

    // Clear values
    $("#productForm")[0].reset();

  } else {
    alert("Please complete the form!");
  }
};

var handleImageCats = function (event) {
  var Imgurl = $("#image").val().trim();

  if(Imgurl){
    event.preventDefault();
    API.getWatson(Imgurl).then(function (data) {
      console.log(data);
    });
  }

};

$submitBtn.on("click", handleProductSubmit);
$imgBtn.on("click", handleImageCats);

