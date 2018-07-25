// @flow
const foo: string = "bar";
const baz: String = new String("bap");
console.log(`typeof foo: '${typeof foo}', typeof baz: '${typeof baz}'`);
// Output: typeof foo: 'string', typeof baz: 'object'