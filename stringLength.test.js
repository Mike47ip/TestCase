const stringLength = require('./stringLength');

test('returns character count of the string', () => {
  const inputString = 'Hello, world!';
  const result = stringLength(inputString);
  expect(result).toBe(inputString.length);
});
