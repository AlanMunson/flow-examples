// @flow
// Immutable Redux state
type State = {
  +foo: string,
  +bar: number,
  +baz: {}
};

// Typing actions
type StandardAction = { type: string };
type FooAction = { type: "FOO", payload: string };
type BarAction = { type: "BAR", payload: number };
type Action = StandardAction | FooAction | BarAction;

// Redux thunk types
type GetState = () => State;
type PromiseAction = Promise<Action>;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;

// Typing Redux reducers
const reducer = (
  state: State = { foo: "", bar: 0, baz: {} },
  action: Action
): State => {
  switch (action.type) {
    case "FOO":
      return { ...state, foo: ((action: any): FooAction).payload || "" };
    case "BAR":
      return { ...state, bar: ((action: any): BarAction).payload || 0 };
    default:
      return state;
  }
};
