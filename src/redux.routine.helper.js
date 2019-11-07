export default function createRoutine(prefix) {
  const routine = {};
  routine.namespace = prefix;
  routine.request = `${prefix}_REQUEST`;
  routine.success = `${prefix}_SUCCESS`;
  routine.failure = `${prefix}_FAILURE`;

  routine.requestAction = (payload) => ({
    type: routine.request,
    payload,
  });

  routine.successAction = (data) => ({
    type: routine.success,
    data,
  });

  routine.failureAction = (error) => ({
    type: routine.failure,
    error,
  });

  return routine;
}
