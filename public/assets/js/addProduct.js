var $submitBtn = $("#submit");
var $imgBtn = $("#addImage");
var imageClasses = [];


$(".chips").chips();
$(".chips-autocomplete").chips({
  autocompleteOptions: {
    data: {
      "Technology": null,
      "Sports": null,
      "Cars": null,
      "Leisure": null,
      "Fashion": null
    },
    limit: Infinity,
    minLength: 1
  }
});


function handleProductSubmit(event) {
  var SavedTags = event.data.toString();
  var form = $("#productForm")[0];
  if (form.checkValidity()) {
    event.preventDefault();

    var product = {
      "name": $("#name").val().trim(),
      "description": $("#description").val().trim(),
      "price": $("#price").val().trim(),
      "image": $("#image").val().trim(),
      "password": $("#psw").val().trim(),
      "email": $("#email").val().trim(),
      "userName": $("#username").val().trim(),
      "phone": $("#phone").val().trim(),
      "price": $("#price").val().trim(),
      "classes": SavedTags,
      "category": $("#category").val()
    };

    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/products",
      data: JSON.stringify(product)
    }).then(function () {
      window.location.replace("/");
    });

    // Clear values
    $("#productForm")[0].reset();

    // } else {
    //   alert("Please complete the form!");
  }
}


var createChips = function (classes) {
  var chips = $(".chips");
  for (tag in classes) {
    imageClasses.push(classes[tag].class);
    var chip = $("<div class='chip'>" + classes[tag].class + "<i class= 'close material-icons'>close</i></div>");
    chips.prepend(chip);
  }
};

var handleImageCats = function (event) {
  var Imgurl = $("#image").val().trim();

  if (Imgurl) {
    event.preventDefault();

    $.ajax({
      type: "GET",
      url: "api/watson",
      data: {
        URL: Imgurl
      }
    }).then(function (data) {
      var classes = data.images[0].classifiers[0].classes;

      $("#name").val(classes[0].class);
      createChips(classes);

    });
  }

};

$submitBtn.on("click", imageClasses, handleProductSubmit);
$imgBtn.on("click", handleImageCats);

