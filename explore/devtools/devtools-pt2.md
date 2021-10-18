**Question 1**:
The bug was that `num1` and `num2` were strings, not integers. This is because the `document.getElementById("input-name").value` property is a string, so the `calculateSum` function returned the concentation of the two inputs, not the sum.

**Question 2**:
To fix this, I type casted each number input (`num1` and `num2`) to integers by wrapping the `Number()` function around them. Thus, when `calculateSum` is called, they are both integers, so it correctly returns the sum.
