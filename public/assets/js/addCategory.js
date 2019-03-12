// Materalize Dropdown
$('.dropdown-trigger').dropdown();

// $(document).ready(function(){
//     $('.dropdown-trigger').dropdown();
// })

$("#dropdown1 li").on("click",function(){
    
    var category = $(this).text().toLowerCase();

    $.ajax({
        method:"GET",
        url: "categories/" + category
    }).then(function(catResponse){
        console.log(catResponse);
        window.location.href = `/addCategories/${category}`;
    });

});

// $(document).on('click', '#dropdown2', function(){
//     $.ajax({
//         method:"GET",
//         url:'categories'
//     }).then(function(data){
//         console.log("Categories = ", data);
//     });
//     $("#dropdown2").dropdown();
// });



