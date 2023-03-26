# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

The main reason for my refactor is the removal of unnecessary conditions, the use of default parameters, and the creation of a separate function to generate the hashed value.

In addition, the code was simplified by using the nullish coalescing operator and the ternary operator instead of nested if-else statements.

These changes make the code more concise and readable. The code is easier to understand because it follows a more declarative style, with clearer variable names, and it uses the nullish coalescing operator to handle cases where the event or partition key is undefined. and also it is easier to maintain because it is less verbose and there is less duplicated logic.
