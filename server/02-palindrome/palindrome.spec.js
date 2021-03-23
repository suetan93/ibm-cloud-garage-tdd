const { it, expect } = require("@jest/globals");
const { palindrome } = require("./palindrome.js");

describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });

  it('Returns true for racecar', () => {
    expect(palindrome('racecar')).toBe(true)
  })

  it('Returns false for orange', () => {
    expect(palindrome('orange')).toBe(false)
  })

});