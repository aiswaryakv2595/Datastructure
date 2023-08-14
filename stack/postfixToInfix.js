function isOperator(character) {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(character);
  }
  
  function postfixToInfix(expression) {
    const stack = [];
  
    for (let i = 0; i < expression.length; i++) {
      const character = expression[i];
  console.log(`character ${character}`)
      if (isOperator(character)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const infix = `(${operand1}${character}${operand2})`;
        stack.push(infix);
      } else {
        stack.push(character);
      }
    }
  
    return stack.pop();
  }
  
  // Example usage:
  const postfixExpression = 'ab+cd+*';
  const infixExpression = postfixToInfix(postfixExpression);
  console.log(infixExpression); // Output: ((3+4)*2)
  