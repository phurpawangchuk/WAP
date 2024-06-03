window.onload = function () {

    setInterval(alertMessage, 600000);

    function alertMessage() {
        alert("10 minutes have passed");
    }

    //====Timer
    //1. setTimeout 2.setInterval
    function setTimeoutDemo() {
        setTimeout(multipleMe, 3000);
        //setTimeout(multipleMe, 1000, 5, 6);
        alert("I am done " + multipleMe(5, 6));
    }
    function multipleMe(x, y) {
        return x * y;
    }
    // setTimeoutDemo();

    //////
    {
        let timer = null;
        function setIntervalDemo() {
            if (timer === null) {
                timer = setInterval(testMe, 1000)
            } else {
                clearInterval(timer);
                timer = null;
            }
        }
        function testMe() {
            console.log("Hello " + timer);
        }
        // setIntervalDemo();
    }

    //Usage Example of 'this' using bin(), call() and apply()
    const Person = {
        fname: 'Alice',
        lname: 'Bob',
        getFullName: function () {
            return this.fname + this.lname;
        }
    };

    const person = function (weight, age) {
        console.log(this.getFullName() + ' weight:' + weight, "age:" + age);
    }

    //With bind to work, need to bind/create a new function like below
    //and then call - This technique is currying (Official name of bind)
    const personDetail = person.bind(Person);
    personDetail(70, 45);

    //Immediately calls, only different in paranter passing
    person.call(Person, 80, 40);
    person.apply(Person, [90, 55]);

    var you = {
        fname: 'Phura ',
        lname: 'Wang'
    }

    console.log(Person.getFullName.apply(you));
    console.log(Person.getFullName.call(you));

    //==============================================
    //Currying - offical name of bind, create new function from the param
    //Ex:

    function multiplyByTwo(x, y) {
        return x * y;
    }

    const product1 = multiplyByTwo.bind(null, 2);
    console.log("Product: " + product1(5));

    //==========Rest operator ====================================
    function findMax(x, ...more) {
        let max = x;
        for (let i = 1; i < more.length; i++) {
            if (max < more[i]) {
                max = more[i];
            }
        }
        return max;
    }

    let max = findMax(1, 5, 34, 6, 9);
    console.log("Max = ", max);

    //======== spread operator ======================================
    //For object concatination and merging
    let obj1 = {
        fname: "Alice",
        age: 45
    };
    let obj2 = {
        lname: "Bob",
        mname: "Midname",
        age: 40
    };

    let objMerged = { ...obj1, ...obj2 };
    console.log(objMerged);

    //Object destructure 
    const { fname, mname, lname } = objMerged;
    console.log(fname + " " + mname + " " + lname);
    //========W2D3 - Module pattern======================================
    //this introduces 3 globals count,incr and reset --which is not good
    var count = 0;
    function incr(n) {
        count += n;
    }
    function reset() {
        count = 0;
    }

    incr(4);
    incr(2);
    console.log("Count ==", count);
    reset();
    incr(3);
    console.log("Count ==", count);

    //making tha abocve as IIFE style
    (function () {
        var count = 0;
        function incr(n) {
            count += n;
        }
        function reset() {
            count = 0;
        }

        incr(4);
        incr(2);
        console.log("Count1 ==", count);
        reset();
        incr(3);
        console.log("Count1 ==", count);
    })();

    //Replacing above IIFE using ES6 - block scope inside {}
    {
        let count = 0;
        function incr(n) {
            count += n;
        }
        function reset() {
            count = 0;
        }

        incr(4);
        incr(2);
        console.log("Count2 ==", count);
        reset();
        incr(3);
        console.log("Count2 ==", count);
    }

    //========W2D3 - Revealing Module pattern======================================
    // Example 1- Revealing Module Pattern 
    const myModule = (function () {
        const privateFunction = function (msg) {
            console.log("pvt ===", msg)
        };
        const publicFunction = function (myText) {
            privateFunction(myText);
        };
        return {
            publicMethod: publicFunction
        };
    })();

    myModule.publicMethod("This is test");

    //E1. Revealing Module Pattern
    const Calculator = (function () {
        let state;
        const operateFunction = function (num) {
            state = num;
        };
        const addFunction = function (num) {
            operateFunction(num);
        };
        const subFunction = function (num) {
            operateFunction(num);
        };
        const mulFunction = function (num) {
            operateFunction(num);
        };
        const divFunction = function (num) {
            operateFunction(num);
        };

        return {
            addMethod: addFunction,
            subMethod: subFunction,
            mulMethod: mulFunction,
            divMethod: divFunction,
            getState: function () {
                return state;
            }
        }
    })();

    const cal = Calculator;
    cal.addMethod(5);
    console.log("Cala Add===", cal.getState());

    //Ex. 2 Revealing Module Pattern
    const myCounter = (function () {
        let pvtCounter = 0;

        function changeBy(val) {
            pvtCounter += val;
        }

        return {
            increment: function () {
                changeBy(1);
            },
            decrement: function () {
                changeBy(-1);
            },
            getCounter: function () {
                return pvtCounter;
            }
        }
    })();

    const counter1 = myCounter;
    counter1.increment();
    console.log(counter1.getCounter()); //1
    counter1.increment();
    counter1.increment();
    counter1.decrement();
    console.log(counter1.getCounter()); //2

    //Above Module Pattern using Module Factory as below
    //Note : there is no { ...()} like IIFE
    const makeCounter = function () {
        let pvtCounter = 0;
        function changeBy(val) {
            pvtCounter += val;
        }
        return {
            increment: function () {
                changeBy(1);
            },
            decrement: function () {
                changeBy(-1);
            },
            value: function () {
                return pvtCounter;
            }
        }
    };

    const myMakeCounter1 = makeCounter();
    myMakeCounter1.increment();
    console.log("myMakeCounter1= ", myMakeCounter1.value());


    //Model Paper
    var z = 10;
    function outer(a, b) {
        console.log(`1: ${x} ${this}`); //undefined window
        var z = 3;
        const k = function inner(a) {
            console.log(`2:${x} ${a} ${z}`); //undefined 50 3
            return { a: a }; //a: 50
        }
        const res = k(50); //res = 50
        if (res.a == 10) {
            res.a = 500;
        }
        var x = 1;
        console.log(`3: ${x} ${res.a} ${z}`); //1 50 3
        return res; //res =50
    }

    let result = outer(10, 20);
    console.log(`4: ${result.a} ${z}`); //50 10

    //=====================
    function makeFunc() {
        const name = "Mozillaaa"; //local to makeFunc
        // function displayName() {
        //     console.log(name);
        // }
        //return displayName();
        return function displayName() {
            console.log(name);
        };
    }
    const myFunc = makeFunc();
    myFunc();


    var x = 10;
    function main() {
        function b() {
            console.log("x is b() " + x); //undefined

            function a() {
                console.log(x); //undefine
                var x = 500;
                if (x > 0) {
                    console.log("x is if() " + x); //500
                    var x = 150;
                }
                console.log("x is b11() " + x); //500
            }
            var x = 300;
            a();
            console.log("x after a() " + x); //300

        }
        console.log("x is " + x); //undefined
        var x = 20;
        console.log(x); //20
        b();
        console.log(x); //20




        function f() {
            var a = 1, b = 20, c;
            console.log(a + " " + b + " " + c); //1 20 undefined

            function g() {
                var b = 300, c = 4000;
                console.log(a + " " + b + " " + c); //1 300 4000
                a = a + b + c;  //4301
                console.log(a + " " + b + " " + c); //4301 300 4000
            }

            console.log(a + " " + b + " " + c); //1 20 undefined
            g();

            console.log(a + " " + b + " " + c); //4301 20 undefined
        }
        f();

        //var x = undefined;

        console.log("x1 is:" + x);
        x = 20;
        console.log("x2 is:" + x);
        if (x > 0) {
            var x = 30;
            console.log("x3 is:" + x);
        }
        console.log("x4 is:" + x);
        var x = 40;

        var f = function (x) {
            console.log("x5 is:" + x);
        };

        f(50);
        console.log("x6 is:" + x);
    }
    main();
    console.log("x7 is:" + x);

    // let email = /^([a-zA-Z_-\.-])+@(([a-zA-Z_-])+\.)+[a-zA-Z]{2,}$/;
    //  console.log("test_aa@gmail.edu".match(email));
    function shortest(s1, s2, s3) {

        let s1Length = s1.length;
        let s2Length = s2.length;
        let s3Length = s3.length;

        if (s1Length <= s2Length && s1Length <= s3Length)
            return s1;
        if (s2Length <= s1Length && s2Length <= s3Length)
            return s2;
        if (s3Length <= s1Length && s3Length <= s2Length)
            return s3;
    }
    console.log(shortest("there", "xx", "hiu"));

    timer = null;
    const demoBtn = document.getElementById('demo');
    const msg = document.getElementById('msg');

    let arr = [1, 2, 3, 4, 5];

    console.log(arr.map((x) => x * 2));
    console.log(arr.filter((x) => x % 2 == 0));
    let sum = arr.reduce((x, y) => x + y);
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

    // demoBtn.onclick = function delayMsg() {
    //         setTimeout(multiply(4,5), 2000, 6, 7, 10);
    //         msg.innerHTML = 'Waiting for 2000';
    //     }

    // function multiply(x, y){
    //     alert(x);
    //     // msg.innerHTML='I am done '+ (x*y*z);
    // }

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
