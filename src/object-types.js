// @flow
type Colors = "red" | "green" | "blue";
type MyObj = {
  [number]: string, // Indexer prop
  foo: string, // Required prop
  bar?: boolean, // Optional prop
  baz: ?number, // Maybe prop (required + nullable)
  outputColor: Colors, // Required prop w/union type
  saySomething: string => void // Required function prop
};
