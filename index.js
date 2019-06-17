module.exports = {
  isEqual,
  isStrictlyEqual,
  isNotEqual,
  greaterThan
};

// Comparisons

//  ( == ) Equal: operator converts the operands if they are not the same type
//  then applies comparisons.

function isEqual(a, b) {
  return b == a;
}

// ( === ) Strict Equal : operator compares the operands, and will return true if the operands
// are equal and are the same data type.

function isStrictlyEqual(a, b) {
  x = Number(a);
  return x === b;
}

// ( !== ) Strict not Equal : operator returns true if the
// operands are not equal and not the same data type.

function isNotEqual(a, b) {
  x = toString(a);
  return x !== b;
}

//  ( > ) Greater Than : returns true if the left operand is greater than
//  the right.

function greaterThan(a) {
  var x = a.filter(n => n > 5);
  return x;
}
