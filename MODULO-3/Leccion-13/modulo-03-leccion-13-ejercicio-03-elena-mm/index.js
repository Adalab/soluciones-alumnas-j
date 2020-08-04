function paddingLeft(string, flength, paddingValue) {
  while (string.length < flength) {
    string = paddingValue + string;
  }
    return string;
  }
  module.exports = paddingLeft;