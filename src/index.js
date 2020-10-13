module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let i = 0;
  while (i < str.length) {
    let j = 0;
    while (j < bracketsConfig.length) {
      if (str[i] === bracketsConfig[j][0]) {
        if (str[i] !== bracketsConfig[j][1]) {
          stack.push(str[i]);
          break;
        }
        else if (str[i] === bracketsConfig[j][1] && str[i] !== stack[stack.length - 1]) {
          stack.push(str[i]);
          break;
        }
        else if (str[i] === bracketsConfig[j][1] && str[i] === stack[stack.length - 1]) {
          stack.pop();
          break;
        }
      }
      else if (str[i] === bracketsConfig[j][1] && stack[stack.length - 1] === bracketsConfig[j][0]) { 
        stack.pop();
        break;
      }
      j++;
    }
    if (j == bracketsConfig.length) return false;
    i++;
  }
  if (stack.length === 0) return true;
  else return false;
}
