// @flow
const myOptionalParam = (val: string, extra ? : string): void => {
  console.log(`val = '${val}, extra = '${extra || 'undefined'}'`);
};
myOptionalParam("Hello", "there!"); // OK
myOptionalParam("Hello", undefined); // OK
myOptionalParam("Hello"); // OK
myOptionalParam("Hello", null); // Error