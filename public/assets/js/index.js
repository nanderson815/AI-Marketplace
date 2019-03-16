// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#description");
var $submitBtn = $("#submit");
var $productList = $("#example-list");

var productUserName = "test";
var productId;

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
  updateOneProduct: function (productObject) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: "api/products",
      data: JSON.stringify(productObject)
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



$(document).on("click", '.edit-product', function () {
  var prodId = $(this).attr("data-id");

  API.getOneProduct(prodId).then(function (data) {
    var password = data.password;
    var EnteredPass = prompt("Please enter the listing password");

    if (EnteredPass === password) {
      $('.edit-product', `[data-id="${prodId}"]`).text("Save Product");
      $('.edit-product', `[data-id="${prodId}"]`).attr('class', 'btn-large z-depth-0 add-btn-product save-product');
      $('.save-product', `[data-id="${prodId}"]`).attr('id', `save-${prodId}`);

      $('.delete-product', `[data-id="${prodId}"]`).text("Go Back");
      $('.delete-product', `[data-id="${prodId}"]`).attr('class', 'btn-large z-depth-0 add-btn-product go-back second-button');
      $('.go-back', `[data-id="${prodId}"]`).attr('id', `go-back-${prodId}`);

      $(`#image-url-edit-${prodId}`)[0].style.display = "block";

      $(`#description-display-${prodId}`)[0].style.display = "none";
      $(`#description-display-content-${prodId}`)[0].style.display = "none";
      $(`#chip-display-${prodId}`)[0].style.display = "none";

      $(`#description-edit-${prodId}`)[0].style.display = "block";

      API.getOneProduct(prodId).then(function (data) {
        $(`#prod-name-${data.id}`).val(data.name)
        $(`#prod-description-${data.id}`).val(data.description)
        $(`#prod-password-${data.id}`).val(data.password)
        $(`#prod-email-${data.id}`).val(data.email)
        $(`#prod-telephone-${data.id}`).val(data.phone)
        $(`#prod-price-${data.id}`).val(data.price)
        $(`#image-url-${data.id}`).val(data.image);
        Materialize.updateTextFields()

        productId = data.id
        productUserName = data.userName
      });
    } else {
      alert("Incorrect. Please enter the password you used when creating this listing.");
    }
  });
});

var handleDeleteBtnClick = function () {
  var getProductbyId = $(this).attr("data-id");
  API.getOneProduct(getProductbyId).then(function (data) {
    var password = data.password;
    var EnteredPass = prompt("Please enter the listing password");

    if (EnteredPass === password) {
      API.deleteExample(getProductbyId).then(function () {
        window.location.replace('/');
      });
    } else {
      alert("Incorrect. Please enter the password you used when creating this listing.");
    }
  });
};

$(document).on("click", '.delete-product', handleDeleteBtnClick);

$(document).on('click', '.go-back', function () {
  var prodId = $(this).attr("data-id");
  $('.save-product', `[data-id="${prodId}"]`).text("Edit Product");
  $('.save-product', `[data-id="${prodId}"]`).attr('class', 'btn-large z-depth-0 add-btn-product edit-product');
  $('.edit-product', `[data-id="${prodId}"]`).attr('id', `edit-${prodId}`);

  $('.go-back', `[data-id="${prodId}"]`).text("Delete Product");
  $('.go-back', `[data-id="${prodId}"]`).attr('class', 'btn-large z-depth-0 add-btn-product delete-product second-button');
  $('.delete-product', `[data-id="${prodId}"]`).attr('id', `delete-${prodId}`);

  $(`#image-url-edit-${prodId}`)[0].style.display = "none"

  $(`#chip-display-${prodId}`)[0].style.display = "block";
  $(`#description-display-${prodId}`)[0].style.display = "block";
  $(`#description-display-content-${prodId}`)[0].style.display = "block";
  $(`#description-edit-${prodId}`)[0].style.display = "none";
})

$(document).on('click', '.save-product', function () {
  var prodId = $(this).attr("data-id");

  var updateProductObj = {
    id: productId,
    name: $(`#prod-name-${prodId}`).val().trim(),
    description: $(`#prod-description-${prodId}`).val().trim(),
    password: $(`#prod-password-${prodId}`).val().trim(),
    email: $(`#prod-email-${prodId}`).val().trim(),
    phone: $(`#prod-telephone-${prodId}`).val().trim(),
    price: $(`#prod-price-${prodId}`).val().trim(),
    image: $(`#image-url-${prodId}`).val().trim(),
    userName: productUserName
  };

  API.updateOneProduct(updateProductObj).then(function () {
    location.reload();
  });
});

$(document).ready(function() {
  var chips = classes.split(",");
  var id = `chip-${chipId}`

  chips.forEach(chip => {
    var ele = $('<div>');
    ele.attr('class', 'chip');
    ele.text(chip);

    $(`#${id}`).append(ele)        
  });
});