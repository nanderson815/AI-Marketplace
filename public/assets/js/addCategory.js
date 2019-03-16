function clearFilter(){
    $.ajax({
        method: "GET",
        url: "/"
    }).then(function(data){
        window.location.href = `/`;
    });
};

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
    let category = $(this).data('category');
    $.ajax({
        method: "GET",
        url: "addCategories/" + category
    }).then(function (catResponse) {
        window.location.href = `/addCategories/${category}`;
    });
};

function checkForCategory(path) {
    console.log(path);
    switch(path) {
        case '/addCategories/Sports':
          $('.popular').attr('data-category', 'Sports');
          break;
        
          case '/addCategories/Cars':
          $('.popular').attr('data-category', 'Cars');
          break;

          case '/addCategories/Leisure':
          $('.popular').attr('data-category', 'Leisure');
          break;

          case '/addCategories/Fashion':
          $('.popular').attr('data-category', 'Fashion');
          break;

          case '/addCategories/Education':
          $('.popular').attr('data-category', 'Education');
          break;

          case '/addCategories/Lifestyle':
          $('.popular').attr('data-category', 'Lifestyle');
          break;

          case '/addCategories/Home%20Goods':
          $('.popular').attr('data-category', 'Home Goods');
          break;

          case '/addCategories/Technology':
          $('.popular').attr('data-category', 'Technology');
          break;

        default:
          console.log('Url unrecognized');
      }
}


checkForCategory(window.location.pathname);

$(".dropdown-trigger").dropdown();
$("#dropdown1 li").on("click", selectCategory);

$(document).on("click", ".popular", selectCategory);
$(document).on("click", "#clearBtn", clearFilter);

catButtons();