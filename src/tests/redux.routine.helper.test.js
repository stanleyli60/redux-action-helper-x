import { createRoutine } from '../index';

test('create routine', () => {
  const routineExample = createRoutine('EXAMPLE');
  expect(routineExample.request).toEqual('EXAMPLE_REQUEST');
  expect(routineExample.success).toEqual('EXAMPLE_SUCCESS');
  expect(routineExample.failure).toEqual('EXAMPLE_FAILURE');
  expect(routineExample.requestAction()).toBeInstanceOf(Object);
  expect(routineExample.successAction()).toBeInstanceOf(Object);
  expect(routineExample.failureAction()).toBeInstanceOf(Object);
});
