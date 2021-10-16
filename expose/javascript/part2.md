**Question 1**: Line 12 prints `3`. This is because the `i` variable defined in the `for` loop on line 6 was hoisted to the top of the function scope (because it was defined with `var`). Each iteration of the for loop increments `i` by 1, so when the for loop ended, `i` must have been 3 in order for the condition `i < prices.length` to be false.

**Question 2**: Line 13 prints `150`. This is because the `discountedPrice` variable (defined with `var`) is hoisted to the top of the function scope, and is reset to each item's discounted price as the for loop continues through its iterations. Thus, at the end of the for loop, `discountedPrice` must be the discounted price of the last item in the list, which is `300 * 0.5 = 150`.

**Question 3**: Line 14 prints `150`. This is because the `finalPrice` variable (defined with `var`) is hoisted to the top of the function scope, and is reset to each item's rounded discounted price as the for loop continues through its iterations. Thus, at the end of the for loop, `finalPrice` must be the rounded discounted price of the last item in the list, which is `300 * 0.5` rounded to the nearest 1/100th, which is `150`.

**Question 4**: This function will return `[50, 100, 150]` because the `discounted` array (defined with `var`) was defined at the top of the function, and then during each iteration of the for loop, each discounted price was pushed to the `discounted` array.

**Question 5**: 
The code will error out on line 12 because `i` is defined with `let`, which means it is in the scope of the for loop block. Since line 12 is accessing the variable after the for loop ends, it is undefined.

**Question 6**:
The code will error out on line 13 because `discountedPrice` is defined with `let` inside the for loop, which means it is in the scope of the for loop block. Since line 13 is accessing the variable after the for loop ends, it is undefined.

**Question 7**:
Line 14 will print `150` because `finalPrice` is defined at the top of the function, so its scope is the entire function. It is overridden in each iteration of the for loop with the rounded discounted price of each item, so when the for loop ends, the `finalPrice` variable will have the rounded discounted price 

**Question 8**:
The function wil return `[50, 100, 150]` because the `discounted` variable is defined at the top of the function and during each iteration of the for loop, the rounded discounted price of each item is pushed to the end of the array. Thus, when the function returns, it will have all 3 rounded discounted prices of the items.

**Question 9**:
The code will error out on line 11 because `i` is defined with `let`, which means it is in the scope of the for loop block. Since line 11 is accessing the variable after the for loop ends, it is undefined.

**Question 10**:
Line 12 will print `3` because the constant `length` was defined at the top of the function to be the length of the `prices` array, which is 3.

**Question 11**:
This function will return `[50, 100, 150]` because the constant `discounted` is defined at the top of the function, so the pointer to the array is constant and in the scope of the function. In the for loop, the array is pushed with each item's discounted price, which is allowed because the pointer to the array does not change. Thus, the array will have the discounted price of each item in the array.

**Question 12**:

A) `student.name`

B) `student['Grad Year']`

C) `student.greeting()`

D) `student['Favorite Teacher'].name`

E) `student.courseLoad[0]`

**Question 13**:

A) `'32'` because the `2` was type casted to a string (`'2'`) in order to be concatenated to `'3'`.

B) `1` because the `'3'` was type casted to an integer (`3`) in order for `2` to be subtracted from it.

C) `3` because the `null` was type casted to an integer (`0`) in order to be added to `3`.

D) `3null` because the `null` was type casted to a string (`'null'`) in order to be concatenated to `'3'`.

E) `4` because the `true` was type casted to an integer (`1`) in order to be added to `3`.

F) `0` because in order for the addition operation to work, `false` must be type casted to an integer (`0`) and `null` must be type casted to an integer (`0`), so their sum is `0`.

G) `'3undefined'` because the `undefined` was type casted to a string (`'undefined'`) in order to be concatenated to `'3'`.

H) `NaN` because in order for the subtraction operation to work, `'3'` must be type casted to an integer (`3`) and `undefined` must be type casted to an integer (`NaN`), so their subtraction is `NaN`.

**Question 14**:

A) `true` because the `'2'` was type casted to an integer (`2`), so the comparison is `2 > 1`, which is `true`.

B) `false` because string comparison checks the unicode value of each string, character by character. Thus, since `'2'` has a higher unicode value than `'1'`, `'2'` is more than `'12'` and the comparison is `false`.

C) `true` because `'2'` is type casted to an integer (`2`), so the comparison is `2 == 2`, which is `true`.

D) `false` because `===` does not perform type casting, and since `2` and `'2'` are different types, the comparison returns `false`.

E) `false` because `true` is type casted to an integer (`1`), so the comparison is `1 == 2`, which is `false`.

F) `true` because first, the `Boolean(2)` expression returns `true` (because an integer not 0 is `true` as a boolean), so the comparison is `true === true`, which is `true`.

**Question 15**: The `==` operator type casts the operands to the same type in order to perform the comparison (i.e. `'2'` to `2` in order to compare against an integer), while the `===` operator does not type cast and instead returns `false` immediately if the types differ.

**Question 17**: The result will be `[2, 4, 6]`. First, `modifyArray` creates a new array `newArr`, then loops around each item in the parameter `array`. For each item `array[i]`, the callback is run with `array[i]` as the parameter. Since the `callback` is the `doSomething` function, the callback will return `array[i] * 2` since `array[i]` is passed in as the `num` parameter. Thus, the value pushed to the array will be `array[i] * 2`, which results in the `newArr` containing double the value of each item in the original array.

