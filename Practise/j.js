window.onload = function () {
    var x = 5;
    var y = 7;
    function a() {
        function b() {
            console.log(`1: x=${x} y=${y}`); //1. x=10 y=undefined
            y = 10;
            return function c(y) {
                console.log(`2: x=${x} y=${y}`);
            }
        }
        console.log(`3: x=${x} y=${y}`) //3 x=undeifned y=7
        var z = b()
        var x = 10;
        z(20);
    }
    console.log(`4: x=${x} y=${y}`); //5 7
    a();
    console.log(`5: x=${x} y=${y}`);
}