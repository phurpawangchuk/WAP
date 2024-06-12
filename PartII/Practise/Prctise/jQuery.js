$(function(){
    let lastNum = 0;
    let val = 0;
    let operator = null;
    let num = 0;


// console.log($(a));
// console.log($("a"));
// console.log($("<a>"));

    $('td').click(function (evt){
        let clickedText = $(evt.target).text();
       console.log(clickedText);

        if(!isNaN(clickedText)){
            num = parseInt(clickedText);
            if(operator === null){
                val = num;
            }else{
                lastNum = num;
            }
        }else{
            if(clickedText === '+'){
                val += lastNum;
            }else if(clickedText === '-'){
                val -= lastNum;
            }
            $("#result").val(val);
            operator = clickedText;
       
        }
       
        if(clickedText === '='){
            //val += num;
            $("#result").val(val);
            console.log(val);
        }
       
    });

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
