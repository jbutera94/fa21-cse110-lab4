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
