// @flow
// Union types
let foo: string | number;
foo = "Hello"; // OK
foo = 42; // OK
foo = null; // Error
let color: "red" | "green" | "blue";
color = "red"; // OK
color = "yellow"; // Error
let bar: mixed;
bar = 42; // OK
bar = "Hello"; // OK
bar = {}; // OK
bar = null; // OK
