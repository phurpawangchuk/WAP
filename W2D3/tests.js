// "use strict";
describe("stringFIlter test", function(){
    it("Takes string and filter", function() {
        assert.equal("This is",filterStrObj("This is one","one"));
    })
})

describe("BubbleSort", function(){
    it("Bubble Sort", function() {
        assert.deepEqual([1,2,3,4,5], bubbleSort([5,3,4,2,1]));
    })
})

describe("WAP Professor", function(){
    it("Michael teaching us now WAP", function() {
        assert.equal("Michael teaching us now WAP", teacherObj.teach("WAP"));
    })
})


