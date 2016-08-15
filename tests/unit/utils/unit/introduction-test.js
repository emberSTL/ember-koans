import { module, test } from 'qunit';

module('Unit | Utility | unit/introduction');

test('assert.ok strives for the truth', function(assert) {
  assert.ok(false, "Hey, 'assert.ok' tests for truthy values");
  assert.ok(null, "Can you change null with a bang?");
});

const generator = function() { return { a: 1 }; };

test('assert.ok bends a bit in definition of the truth', function(assert) {
  assert.ok({}, "How are objects treated?");
  assert.ok([], "Mustn't forget about arrays");
  assert.ok(generator() == {a: 1}, "How are objects compared?");
  assert.ok(generator() == generator(), "Why can't the function result evalate to be the same?");
  assert.ok(1 == "1", "How are numbers compared?");
  assert.notOk(0 == "", "Are these really the same?");
  assert.ok("A" + "B" === 'ABC', "Are strings treated as objects or as primatives?");
});

test('assert.equal is a steward of the truth', function(assert) {
  assert.equal(1, "1", "How are numbers compared using equal?");
  assert.equal([1], [0], "Mustn't forget about arrays");
  assert.notEqual(0, "", "Are these really the same?");
  assert.equal({}, {}, "Does this remind you of something that we have seen before?");
  assert.equal("A" + "B", 'ABC', "Are strings treated as objects or as primatives?");
});

test('assert.deepEqual is the definition of the truth', function(assert) {
  assert.deepEqual({}, {}, "How are objects treated?");
  assert.deepEqual([1], [0], "Mustn't forget about arrays");
  assert.deepEqual(generator(), {a: 0}, "How are objects compared?");
  assert.deepEqual(generator(), generator(), "Finally this works, but is there a case where this can be dangerous?");
  assert.deepEqual("A" + "B", 'ABC', "Are strings treated as objects or as primatives?");
});
