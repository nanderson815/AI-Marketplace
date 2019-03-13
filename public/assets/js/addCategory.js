// var flag = true;

// Materalize Dropdown
$(".dropdown-trigger").dropdown();

// Dropdown Click Event To Return Items In Selected Category Only
$("#dropdown1 li").on("click", selectCategory);

// Button Click Event To Return Items In Selected Category Only
$(document).on("click", ".popular", selectCategory);

$(window).load(catButtons());

function catButtons() {
    $.ajax({
        method: "GET",
        url: 'api/recent'
    }).then(function (data) {
        console.log("DATA = ", data);
        var list = $(".categories");
        for (i = 0; i < 5; i++) {
            var item = "<li class='btn btn-small popular' data-category='" + data[i].category + "'><a href='#'>" + data[i].category + "</a></li>";
            list.append(item);
        };
    });
};

function selectCategory() {
    // Set Variable Equal to Category
    var category = $(this).data('category');
    // Send Category Name to Query Database
    $.ajax({
        method: "GET",
        url: "addCategories/" + category
    }).then(function (catResponse) {
        console.log(catResponse);
        window.location.href = `/addCategories/${category}`;
    });
};







