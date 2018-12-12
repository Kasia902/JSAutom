function calc (a, b, math_operand) {
switch (math_operand){
    case '+' :
    return a + b
    break;
    case '-':
    return a - b
    break;
    case  '/':
    return a / b
    break;
    case  '*':
    return a * b
    break;
}
}

module.exports = calc;
//let result = calc (12, 4, '*');
//console.log (result);