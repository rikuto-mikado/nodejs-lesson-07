# Node.js Lesson 07

## What I Learned

### Types of Errors

#### 1. Syntax Error
Occurs when code violates JavaScript grammar rules. The code cannot be parsed and will not run at all.

**Examples:**
```javascript
// Missing closing parenthesis
console.log("Hello";

// Missing closing bracket
const arr = [1, 2, 3;

// Invalid use of keyword
const const = 5;

// Missing quotes
const name = Hello;
```

#### 2. Runtime Error
Occurs during code execution when an operation cannot be completed. The code is syntactically correct but fails at runtime.

**Examples:**
```javascript
// Calling undefined function
myFunction(); // ReferenceError: myFunction is not defined

// Accessing property of undefined
const obj = undefined;
console.log(obj.name); // TypeError: Cannot read property 'name' of undefined

// Type mismatch
const num = 5;
num.toUpperCase(); // TypeError: num.toUpperCase is not a function

// File not found
const fs = require('fs');
fs.readFileSync('nonexistent.txt'); // Error: ENOENT: no such file or directory
```

#### 3. Logical Error
Occurs when code runs without throwing errors but produces incorrect results. The program executes successfully but doesn't behave as intended.

**Examples:**
```javascript
// Wrong operator
const total = 10;
const discount = 5;
const result = total + discount; // Should be total - discount

// Incorrect condition
const age = 20;
if (age > 18) {
  console.log("Minor"); // Should be >= 18 for adult, not minor
}

// Off-by-one error
for (let i = 0; i <= 10; i++) { // Should be i < 10 if you want exactly 10 iterations
  console.log(i);
}

// Wrong variable used
const price = 100;
const quantity = 3;
const total = price * price; // Should be price * quantity
```
