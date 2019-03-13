// Materalize Dropdown
$('.dropdown-trigger').dropdown();

// $(document).ready(function(){
//     $('.dropdown-trigger').dropdown();
// })

$("#dropdown1 li").on("click",function(){
    var category = $(this).text().toLowerCase();

    // Send Category Name to Query Database
    $.ajax({
        method:"GET",
        url: "categories/" + category
    }).then(function(catResponse){
        console.log(catResponse);

        window.location.href = `/addCategories/${category}`;
    });

});

$(".popular").on("click",function(){
    var popCat = $(this).text().toLowerCase();

    // Send Category Name to Query Database
    $.ajax({
        method:"GET",
        url: "categories/" + popCat
    }).then(function(catResponse){
        console.log(catResponse);

        window.location.href = `/addCategories/${popCat}`;
    });
    
});

$(window).load(function(){
    $.ajax({
        method: "GET",
        url: 'api/recent'
    }).then(function(data){
        console.log(data);
        var list = $(".categories");

        for(i = 0; i < 5; i++){
            var item = "<li class='btn btn-small popular'><a href='#'>" + data[i].name + "</a></li>";
            list.append(item);
        }

        var flag = true;
        loadButtons(flag, data);

    });
});

// $(window).load(function(){
//     loadButtons(flag, data) {
//         if(flag === false){
//             $.ajax({
//                 method: "GET",
//                 url: 'api/recent'
//             }).then(function(data){
//                 console.log(data);
//                 var list = $(".categories");
        
//                 for(i = 0; i < 5; i++){
//                     var item = "<li class='btn btn-small popular'><a href='#'>" + data[i].name + "</a></li>";
//                     list.append(item);
//                 }
        
//                 var flag = true;
//             })
//         }
//     }
// })





