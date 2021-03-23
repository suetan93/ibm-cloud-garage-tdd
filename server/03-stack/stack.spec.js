const { it, expect, test } = require("@jest/globals");
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
    expect(testStack).toEqual([])
  });

  it('stack size is 0 when pushed and popped', () => {
    expect(testStack.length).toBe(0);
  });

  it.todo('throws overflow error when pushing to a stack at full capacity');
  it.todo('throw underflow error when popping an empty stack');
  
  it('pops the same one item when pushed', () => {
    testStack.push('orange')
    expect(testStack.pop()).toBe('orange');
  });

  it('pops two items with the most recent first', () => {
      testStack.push('orange')
      testStack.push('apple')
      let first = testStack.pop()
      let second = testStack.pop()
      expect(first).toBe('apple')
      expect(second).toBe('orange')
  });

  it.todo('accepts only a positive capacity');
});