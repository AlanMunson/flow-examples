// @flow
// Type alias
type EmployeeId: string;
type UserId = number;
type User = {
  userId: UserId,
  name: string
};
// Type unions
type Colors = "red" | "green" | "blue";
type OutputType = 0 | 1 | 2;
// Type intersections
type Employee = User & {
  employeeId: EmployeeId
};