$(function(){
    $('#square').click( function(){
        $('.textfield').val("AAA");
        alert("hello world 1")
    });

    $('.textfield').val("123ASSS");

    console.log($("#input").siblings())

    console.log($(".textfield").parents("li"))
})

// $(document).ready(function(){
//     $('#square').click( function(){
//         alert("hello world")
//     });
// })
