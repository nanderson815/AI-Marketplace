$(".dropdown-trigger").dropdown();
$("#dropdown1 li").on("click", selectCategory);
$(document).on("click", ".popular", selectCategory);


function catButtons() {
    $.ajax({
        method: "GET",
        url: 'api/recent'
    }).then(function (data) {
        var list = $(".categories");
        var item;
        for (i = 0; i < 5; i++) {
            item = "<li class='btn btn-small popular' data-category='" + data[i].category + "'><a href='#'>" + data[i].name + "</a></li>";
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
        window.location.href = `/addCategories/${category}`;
    });
};


catButtons();