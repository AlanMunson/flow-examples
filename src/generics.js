// @flow
const identity = <T>(val: T): T => {
  return val;
};
const numIdentity = identity(1);
(numIdentity: number); // OK
(numIdentity: string); // Error
const stringIdentity = identity("Hi");
(stringIdentity: string); // OK
(stringIdentity: number); // Error
