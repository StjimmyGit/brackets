module.exports = function check(str, bracketsConfig) {
  // str = str.replace(/[\|]/g, '');
  let stk = [];

  if (str == "||" || str == '()' || str == '[]') {
    return true;
  }

  for (let i = 0; i < str.length; i++) {
    let x = str[i];

    if (x == '(' || x == '[' || x == '{') {
      stk.push(x);
      continue;
    }

    if (stk.length == 0)
      return false;

    let check;
    switch (x) {
      case ')':
        check = stk.pop();
        if (check == '{' || check == '[')
          return false;
        break;

      case '}':
        check = stk.pop();
        if (check == '(' || check == '[')
          return false;
        break;

      case ']':
        check = stk.pop();
        if (check == '(' || check == '{')
          return false;
        break;
    }
  }

  // Check Empty stk
  return (stk.length == 0);
}
