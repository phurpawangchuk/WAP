 window.onload = function () {
        
    // let email = /^([a-zA-Z_-\.-])+@(([a-zA-Z_-])+\.)+[a-zA-Z]{2,}$/;
    //  console.log("test_aa@gmail.edu".match(email));
    function shortest(s1, s2, s3){

        let s1Length = s1.length;
        let s2Length = s2.length;
        let s3Length = s3.length;
        
        if(s1Length <= s2Length && s1Length<= s3Length)
           return s1;
        if(s2Length <= s1Length && s2Length<= s3Length)
           return s2;
        if(s3Length <= s1Length && s3Length<= s2Length)
           return s3;
        }
        console.log(shortest("there","xx","hiu"));

    timer = null;
    const demoBtn = document.getElementById('demo');
    const  msg = document.getElementById('msg');

    let arr = [1,2,3,4,5];
    
    console.log(arr.map((x) => x*2));
    console.log(arr.filter((x) => x%2==0));
    let sum = arr.reduce((x,y) => x+y);
    console.log(sum);

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
 