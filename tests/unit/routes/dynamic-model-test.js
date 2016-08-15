import { moduleFor, test } from 'ember-qunit';

moduleFor('route:dynamic-model', 'Unit | Route | dynamic model', {});

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});

test('the model can handle dynamic paths', function(assert) {
  assert.expect(7);
  const route = this.subject();

  assert.ok(route.model(), 'The model function will not bomb when given no parameters');
  //assert.equal(route.model({dynamic_id: 1}), 'The model was given 1 as the dynamic id.', 'Can we have the model function return a value?');
  //assert.equal(route.model({dynamic_id: Math.PI}), 'The model was given '+Math.PI+' as the dynamic id.', 'Is this dynamic enough for you?');
  //assert.equal(route.model({dynamic_id: NaN}), 'The model was given NaN as the dynamic id.', 'Does the parameter even have to be a number?');
  //assert.equal(route.model({dynamic_id: "Help"}), 'The model was given Help as the dynamic id.', 'Is a string good enough?');
  //assert.equal(route.model({dynamic_id: []}), 'The model was given  as the dynamic id.', 'How about an array? Normally you would do something like this...');
  //assert.equal(route.model({dynamic_id: {}}), 'The model was given [object Object] as the dynamic id.', 'How about an object?');
});
