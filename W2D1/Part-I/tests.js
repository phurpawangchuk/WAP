"use strict";

describe("Operation on given array of numbers", function () {

    describe("Sum of numbers", function () {
        it("Sum", function () {
            assert.equal(15, sum([1, 2, 3, 4, 5]));
        })
    });

    describe("Product of numbers", function () {
        it("Product", function () {
            assert.equal(120, multiply([1, 2, 3, 4, 5]));
        })
    });
})

describe("To reverse the given string", function () {
    it("Reverse string", function () {
        assert.equal("olleH", reverse("Hello"));
    })
})

describe("Filter arrays of words > specific length", function () {
    it("Words", function () {
        assert.deepEqual(["messages", "luckly"], filterLongWords(["This", "who", "these", "messages", "luckly"], 5));
    })
})

