QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", "Passed!");
});

QUnit.test("add test 5+3==8", function (assert) {
    assert.equal(addNumbers(5,3), 8);
});

QUnit.test("add test 5+3==8", function (assert) {
    assert.equal(addNumbers(1000, 234), 1234);
});