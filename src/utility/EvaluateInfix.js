export const evaluate = (expression) => {
    const tokens = expression.split('');
    const values = [];
    const ops = [];
  
    // Define operator precedence levels
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '%': 2, // Modulo operator has the same precedence as '*' and '/'
    };
  
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === ' ') {
        continue;
      }
  
      if (/^[0-9]+$/.test(tokens[i])) {
        let numStr = '';
        while (i < tokens.length && /^[0-9]+$/.test(tokens[i])) {
          numStr += tokens[i++];
        }
        values.push(parseInt(numStr, 10));
        i--; // Correct the offset
      } else if (tokens[i] === '(') {
        ops.push(tokens[i]);
      } else if (tokens[i] === ')') {
        while (ops[ops.length - 1] !== '(') {
          values.push(applyOp(ops.pop(), values.pop(), values.pop()));
        }
        ops.pop(); // Pop the '('
      } else if (['+', '-', '*', '/', '%'].includes(tokens[i])) {
        while (
          ops.length !== 0 &&
          precedence[tokens[i]] <= precedence[ops[ops.length - 1]]
        ) {
          values.push(applyOp(ops.pop(), values.pop(), values.pop()));
        }
        ops.push(tokens[i]);
      }
    }
  
    while (ops.length !== 0) {
      values.push(applyOp(ops.pop(), values.pop(), values.pop()));
    }
  
    return values.pop();
  };
  
  function applyOp(op, b, a) {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b === 0) {
          throw new Error("Cannot divide by zero");
        }
        return a / b;
      case '%':
        if (b === 0) {
          throw new Error("Cannot modulu by zero");
        }
        return a % b;
    }
  
    return 0;
  }
  

  
  