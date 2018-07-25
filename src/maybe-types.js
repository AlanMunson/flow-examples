// @flow
const myParamIsOptional = (val: ? string): void => {
  console.log(`val = '${val || 'undefined'}'`);
};
myParamIsOptional("Hello!"); // OK
myParamIsOptional(); // OK
myParamIsOptional(undefined); // OK
myParamIsOptional(null); // OK
myParamIsOptional(); // OK
myParamIsOptional(42); // Error