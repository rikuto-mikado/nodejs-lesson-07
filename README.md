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

### Debug Console Usage

#### Basic Usage
1. **Set Breakpoint**: Click on the line number in VS Code to add a red dot
2. **Start Debugging**: Press `F5` or click "Run and Debug" → "Node.js"
3. **Debug Controls**:
   - `F5` - Continue (Mac: `Fn+F5`)
   - `F10` - Step Over (next line) (Mac: `Fn+F10`)
   - `F11` - Step Into (enter function) (Mac: `Fn+F11`)
   - `Shift+F11` - Step Out (exit function) (Mac: `Shift+Fn+F11`)
   - `Shift+F5` - Stop debugging (Mac: `Shift+Fn+F5`)

   **Note for Mac users**: If function keys control system features (brightness, volume, etc.), press `Fn` key together with the function key.

#### Debug Console Commands
```javascript
// Check variable value
variableName

// Evaluate expression
total + discount

// Call function
myFunction()

// Modify variable (during pause)
total = 100
```

#### Common Issues
- **Port already in use (EADDRINUSE)**: Stop previous process with `lsof -i :3000` then `kill -9 <PID>`
- **Breakpoint not hit**: Check if the code path is actually executed
- **Variables not available**: Make sure you're paused at the right scope

### Auto-Restart on File Changes

#### Method 1: Using nodemon (Recommended)

**Installation:**
```bash
npm install --save-dev nodemon
```

**Setup in package.json:**
```json
{
  "scripts": {
    "dev": "nodemon app.js",
    "start": "node app.js"
  }
}
```

**Usage:**
```bash
npm run dev
```

**Configuration (optional):**
Create `nodemon.json` in project root:
```json
{
  "watch": ["*.js", "src/**/*.js"],
  "ignore": ["node_modules", "test/**"],
  "ext": "js,json",
  "delay": "1000"
}
```

#### Method 2: Using VS Code launch.json

**Setup:**
1. Create `.vscode` folder in project root if it doesn't exist
2. Create `.vscode/launch.json` file with the following content:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch with Nodemon",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/app.js",
      "restart": true,
      "runtimeExecutable": "nodemon",
      "console": "integratedTerminal"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch without Nodemon",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/app.js",
      "console": "integratedTerminal"
    }
  ]
}
```

**Usage:**
1. Press `F5` or click "Run and Debug" in VS Code sidebar
2. Select "Launch with Nodemon" from the dropdown
3. Click the green play button or press `F5`

**Note:** This method requires nodemon to be installed (`npm install --save-dev nodemon`)
