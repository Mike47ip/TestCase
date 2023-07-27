// Updated stringLength.test.js
const stringLength = require('./stringLength');

test('returns character count of the string', () => {
  const inputString = 'Hello, world!';
  const result = stringLength(inputString);
  expect(result).toBe(inputString.length);
});

test('throws an error for an empty string', () => {
  expect(() => {
    stringLength('');
  }).toThrow('String length must be between 1 and 10 characters.');
});

test('throws an error for a string longer than 10 characters', () => {
  expect(() => {
    stringLength('This string is longer than 10 characters.');
  }).toThrow('String length must be between 1 and 10 characters.');
});
