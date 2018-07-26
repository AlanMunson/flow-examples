// @flow
// Immutable Redux state
type State = {
  +foo: string,
  +bar: number,
  +baz: {}
};

// Typing actions
type StandardAction = { type: string };
type ActionWithPayload = { type: string, payload: string };
type Action = StandardAction | ActionWithPayload;

// Redux thunk types
type GetState = () => State;
type PromiseAction = Promise<Action>;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;

// Typing Redux reducers
const reducer = (state: State = { foo: "", bar: 0, baz: {} }, action: Action): State => {
  switch (action.type) {
    case "A_STRING_ACTION":
      return { ...state, foo: ((action: any): ActionWithPayload).payload || "" };
    default:
      return state;
  }
};
