//QUnit.test("hello test", function (assert) {
//    assert.ok(1 == "1", "Passed!");
//});


//QUnit.test("hello test2", function (assert) {
//    assert.equal(1, 1);


//}); 


//QUnit.test("createBoard - testing size", function (assert) {

//    var board = createBoard(5, 5);
//    assert.equal(board.length, 25);

//});

//QUnit.test("createPiece - testing size", function (assert) {

//    var board = createBoard(5, 5);
//    assert.equal(board.length, 25);

//});

//QUnit.test("placePieceBoard - insert I @ 0,0", function (assert) {

//    var board = createBoard(5, 5);
//    var pI = createPiece(I);
//    var error = placePieceBoard(board, pI, 0, 0);

//    assert.equal(error, 1);
//    assert.equal(board[0], I);
//    assert.equal(board[5], I);
//    assert.equal(board[10], I);
//    assert.equal(board[15], I);
//    assert.equal(board[20], I);

//});

////QUnit.test("placePieceBoard - insert rotate I @ 0,0", function (assert) {

////    var board = createBoard(5, 5);
////    var pI = createPiece(I);
////    pI = rotateAndNormalize(pI);
////    var error = placePieceBoard(board, pI, 0, 0);

////    assert.equal(error, 1);
////    assert.equal(board[0], I);
////    assert.equal(board[1], I);
////    assert.equal(board[2], I);
////    assert.equal(board[3], I);
////    assert.equal(board[4], I);

////});

////QUnit.test("placePieceBoard - insert I @ 0,0 and hole @ 0,0", function (assert) {

////    var board = createBoard(5, 5);
////    board[0] = '.';
////    var pI = createPiece(I);
////    var error = placePieceBoard(board, pI, 0, 0);

////    assert.equal(error, -1);
////    assert.equal(board[0], '.');
////    assert.equal(board[5], -);
////    assert.equal(board[10], -);
////    assert.equal(board[15], -);
////    assert.equal(board[20], -);

////});