// Updated stringLength.js
function stringLength(string) {
  const length = string.length;
  if (length < 1 || length > 10) {
    throw new Error('String length must be between 1 and 10 characters.');
  }
  return length;
}

module.exports = stringLength;
