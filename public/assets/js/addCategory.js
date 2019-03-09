// Materalize Dropdown
$('.dropdown-trigger').dropdown();

// // Select items from database based on category button select
// $("#dropdown1 li").on("click",function(){
//     console.log($(this).html());
// })


$("#dropdown1 li").on("click",function(){
    console.log($(this).text());
    var category = $(this).text();

    var catObj = {
        category: category
    }

    $.ajax({
        method: "GET",
        url: '/api/categories',
        data: catObj
    }).then(function(catResponse){
        console.log(catResponse);
    })
})