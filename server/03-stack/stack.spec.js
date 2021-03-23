const { it, expect } = require("@jest/globals");
const { Stack } = require("./stack.js");

describe('the stack canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

let testStack = new Stack();

describe('a stack', () => {
  it('starts empty', () => {
    expect(testStack).toEqual([]);
  });

  it('starts with stack size of 0', () => {
    expect(testStack).toEqual([]);
  });

  it('is not empty when pushed', () => {
    testStack.push('orange')
    expect(testStack.length).not.toBe(0)
  });

  it('stack size is 1 when pushed', () => {
    expect(testStack.length).toBe(1)
  });

  it('stack is empty when pushed and popped', () => {
    testStack.pop();
    expect(testStack.length).toBe(0)
  });
  
  it.todo('stack size is 0 when pushed and popped');
  it.todo('throws overflow error when pushing to a stack at full capacity');
  it.todo('throw underflow error when popping an empty stack');
  it.todo('pops the same one item when pushed');
  it.todo('pops two items with the most recent first');
  it.todo('accepts only a positive capacity');
});