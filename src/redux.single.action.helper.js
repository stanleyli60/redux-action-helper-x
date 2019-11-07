export const createSingleAction = prefix => {
  let singleAction = {};
  singleAction.namespace = prefix;
  singleAction.request = `${prefix}_SINGLE_ACTION`;

  singleAction.singleAction = payload => ({
    type: singleAction.request,
    payload
  });

  return singleAction;
};
