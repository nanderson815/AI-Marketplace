// var flag = true;

// Materalize Dropdown
$(".dropdown-trigger").dropdown();

// Dropdown Click Event To Return Items In Selected Category Only
$("#dropdown1 li").on("click", selectCategory);

// Button Click Event To Return Items In Selected Category Only
$(document).on("click", ".popular", selectCategory);


function catButtons() {
    $.ajax({
        method: "GET",
        url: 'api/recent'
    }).then(function (data) {
        var list = $(".categories");
        var item;
        for (i = 0; i < 5; i++) {
            item = "<li class='btn btn-small popular col m4 s6' data-category='" + data[i].category + "'><a href='#'>" + data[i].name + "</a></li>";
            list.append(item);
        };
    });
};


function selectCategory() {
    // Set Variable Equal to Category
    let category = $(this).data('category');
    // Send Category Name to Query Database
    $.ajax({
        method: "GET",
        url: "addCategories/" + category
    }).then(function (catResponse) {
        console.log(catResponse);
        window.location.href = `/addCategories/${category}`;
    });
};

catButtons();
