import { createSingleAction } from '../index';

test('create single action', () => {
  const actionExample = createSingleAction('EXAMPLE');
  expect(actionExample.request).toEqual('EXAMPLE_SINGLE_ACTION');
  expect(actionExample.singleAction()).toBeInstanceOf(Object);
});
