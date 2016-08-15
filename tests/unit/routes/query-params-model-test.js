import { moduleFor, test } from 'ember-qunit';

moduleFor('route:query-params-model', 'Unit | Route | query params model', {});

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});

test('the model can accept query params to help the model', function(assert) {
  assert.expect(7);
  const route = this.subject();

  assert.ok(route.model(), 'The model function will not bomb when given no parameters');
  //assert.equal(route.model(null, {queryParams: {}}), "", 'Can we have the model function return a value without any real query params being passed in?');
  //assert.equal(route.model(null, {queryParams: {first: 1}}), "The query params 'first' was passed in.", 'Can we have the model function return a value based upon query params?');
  //assert.equal(route.model({}, {queryParams: {second: 1}}), "'queryParams.second' had a positive value.", 'Query params can wildly change behavior?');
  //assert.equal(route.model({}, {queryParams: {second: 0}}), "'queryParams.second' had a negative value.", 'This is getting a bit hairy?');
  //assert.equal(route.model(null, {queryParams: {firsts: 1}}), "", 'Looks like we do not care about every value.');
  //assert.equal(route.model(null, {queryParams: {first: 1, second: 0}}), "The query params 'first' was passed in. 'queryParams.second' had a negative value.", 'The query params can build upon each other');
});
