// "use strict";

describe("earliestSpace test", function(){
    it("takes 3 strings, and returns whicherver string has a space character at the lowest index", function() {
        assert.equal("ba ba ba",earliestSpace("This is one","This is two", "ba ba ba"));
    })
          
})


describe("pow", function () {
    describe("x raise to power n", function() {
        for(let i=1; i<5; i++){
            let expected  = i * i;
            // let actual = function() {
            //         assert.equal(pow(i,3), expected);
            // }
            it(`${i} to power 3 is ${expected}`,function () {
                assert.equal(pow(i,3), expected);
            })
        }
    });
})
let arr = [1,2,3,4,5];

describe("Arthematic", function() {
    describe("Sum of array numbers", function () {
        it(`Sum of [${arr}]`, function () {
            assert.equal(sum(arr), 15);
        });
    });

    describe("Sum of array numbers", function () {
        it(`Sum of [${arr}]`, function () {
            assert.equal(sum(arr), 10);
        });
    });

    describe("Product of array numbers", function(){
        it(`Product of [${arr}]`, function() {
            assert.equal(multiply(arr), 120);
        });
    });
    describe("Product of array numbers", function(){
        it(`Product of [${arr}]`, function() {
            assert.equal(multiply(arr), 100);
        });
    });
});

describe("Check vowel", function() {
    describe("E letter check", function() {
        let c = 'E';
        it(`${c} is a vowel?`, function(){
            assert.equal(isVowel(c), true);
        })
    });
    describe("B letter check", function() {
        let c = 'B';
        it(`${c} is a vowel?`, function(){
            assert.equal(isVowel(c), true);
        })
    });
});

describe("Max of Two number", function(){
    describe("Max(3,5)", function() {
        it(`Max of 3 and 5 is 5?`, function(){
            assert.equal(max(3,5), 5);
        });
    });

    describe("Max(13,15)", function() {
        it(`Max of 13 and 15 is 13?`, function(){
            assert.equal(max(13,15), 13);
        })
    })
});
