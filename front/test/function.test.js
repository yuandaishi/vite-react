import { sum } from "../config/function";
test("adds 1 + 2 to equal 3", () => {
  //adds 1 + 2 to equal 3是终端输出的描述语，不是必须的
  expect(sum(2, '5')).toBe(7);
});
test("sum(2, 2) 不等于 5", () => {
  expect(sum(2, 2)).not.toBe(5);
});
