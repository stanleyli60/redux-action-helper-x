# redux-action-helper-x
![Travis (.org)](https://img.shields.io/travis/stanleyli60/redux-action-helper-x)
![Coveralls github](https://img.shields.io/coveralls/github/stanleyli60/redux-action-helper-x)
![David](https://img.shields.io/david/dev/stanleyli60/redux-action-helper-x)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/stanleyli60/redux-action-helper-x)
![npm](https://img.shields.io/npm/v/redux-action-helper-x)
![NPM](https://img.shields.io/npm/l/redux-action-helper-x)

This package includes helper functions to reduce the redux boilerplate for action types and actions.

## Install

`npm i redux-action-helper-x`

`yarn add redux-action-helper-x`

## Helper Functions

This library offers two helper function: **createRoutine** and **createSingleAction**.

#### createRoutine

This helper function is mainly for REQUEST/SUCCESS/FAILURE redux action calls. 
It will create three action types automatically and create three action functions including the payload.

Example:
```js
// todo.actions.js
import { createRoutine } from "redux-action-helper-x";

export const todoAddRoutine = createRoutine("todo/ADD");
```

```js
// todo.reducer.js
import { todoAddRoutine } from "./todo.actions.js";

export default (state = {}, action) => {
  switch (action.type) {
    case todoAddRoutine.request:  return {};
    case todoAddRoutine.success:  return {};
    case todoAddRoutine.failure:  return {};
    default:  return state;
  }
}
```

