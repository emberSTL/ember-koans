import { moduleFor, test } from 'ember-qunit';

moduleFor('route:static-model', 'Unit | Route | static model', {});

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});

test('the model returns a value', function(assert) {
  assert.expect(2);
  const route = this.subject();

  const model = route.model();

  assert.ok(model);
  //assert.deepEqual(model, ['This route returns some', 'strings with text in', 'an array.']);
});
