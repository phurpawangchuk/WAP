 window.onload = function () {
        
    let email = /^([a-zA-Z_-\.-])+@(([a-zA-Z_-])+\.)+[a-zA-Z]{2,}$/;
     console.log("test_aa@gmail.edu".match(email));

    timer = null;
    const demoBtn = document.getElementById('demo');
    const  msg = document.getElementById('msg');

    // demoBtn.onclick = 
    // function delayMsg1() {
    //     if(timer ==null){      
    //         timer = setInterval(rudy, 2000);
    //     }else{
    //         clearInterval(timer);
    //         timer=null;
    //     }
    // }

    // function rudy(){
    //     msg.innerHTML += 'Hello';
    // }
    
    demoBtn.onclick = function delayMsg() {
            setTimeout(multiply(4,5), 2000, 6, 7, 10);
            msg.innerHTML = 'Waiting for 2000';
        }

    function multiply(x, y){
        alert(x);
        // msg.innerHTML='I am done '+ (x*y*z);
    }

    // let demoBtn = document.getElementById('demo');
    // demoBtn.onclick = function(){
    //     alert("aaaa");
    // };

// demoBtn.addEventListener('click', function() {
//     alert("444");
// })


// demoBtn.addEventListener('click', () => {
//     alert("123");
// })

}
 