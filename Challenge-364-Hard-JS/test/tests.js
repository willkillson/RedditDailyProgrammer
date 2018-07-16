QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", "Passed!");
});

////QUnit.test("test 5x5 length", function (assert) {
////    assert.equal(addNumbers(5,3), 8);
////});

QUnit.test("hello test2", function (assert) {
    assert.equal(1, 1);


});


QUnit.test("createBoard - testing size", function (assert) {

    var board = createBoard(5, 5);
    assert.equal(board.length, 25);

});