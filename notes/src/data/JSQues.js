const JSQuestions = [
  {
    question: "What are the different data types present in JavaScript?",
    answer: `1. Primitive types - String, Number, Boolean, Null, Undefined, Symbol, BigInt
2. Non-Primitive types- Object, Array, Function
* Null-> Represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.`,
    difficulty: "easy",
  },
  {
    question: "Explain Hoisting in javascript.",
    answer: `• In JavaScript, hoisting means that variable declarations (with var) and function declarations are moved to the top of their containing scope during the compilation phase.
• Only the declarations are hoisted, not initializations or assignments
• let and const declarations are hoisted to the top of their block scope, but they are not initialized until the line where they are declared is reached during execution. This is called the "temporal dead zone".`,
    difficulty: "medium",
    image: '![Hoisting Example](/hoisting.png)'
  },
  {
    question: "Difference between “ == “ and “ === “ operators",
    answer: `Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types`,
    difficulty: "easy",
  },
  {
    question: "Difference between var and let keyword in javascript.",
    answer: `var:
• Function-scoped or globally-scoped.
• Hoisted and initialized with undefined if not explicitly initialized.
• Allows redeclaration within the same scope.

let: 
• Block-scoped.
• Hoisted but remains uninitialized in the "temporal dead zone" until declaration.
• Does not allow redeclaration within the same block scope.`,
    difficulty: "easy",
  },
  {
    question: "Explain Implicit Type Coercion in javascript.",
    answer: `Implicit type coercion in JavaScript refers to the automatic conversion of data types during operations without explicit instruction from the developer.
• String coercion
    var x = 3;                                      ** var x = 3;
    var y = "3";                                       var y = '3'
    x + y     // Returns "33"                     x - y       // Returns 0 since the variable y (string type) is converted to a number type`,
    difficulty: "medium",
  },
  {
    question: "Is javascript a statically typed or a dynamically typed language?",
    answer: `JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time.`,
    difficulty: "easy",
  },
  {
    question: "What is NaN property in JavaScript?",
    answer: `• NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.
• typeof of NaN will return a Number.

• To check if a value is NaN, we use the isNaN() function,
isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true`,
    difficulty: "medium",
  },
  {
    question: "Explain passed by value and passed by reference.",
    answer: `• Passed by Value: Copies value, changes inside function do not affect outside.
• Passed by Reference: Shares memory reference, changes inside function affect outside.
• In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.`,
    difficulty: "medium",
  },
  {
    question: "What is an Immediately Invoked Function in JavaScript?",
    answer: `• An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.
• Syntax of IIFE :
(function(){ 
  // Do something;
})();`,
    difficulty: "medium",
  },
  {
    question: "What is the distinction between client-side and server-side JavaScript?",
    answer: `Client-side JavaScript:
• Execution Environment: Runs on the user's web browser (client-side).
• Purpose: Enhances user interface and interactivity of web pages.
• Examples: DOM manipulation, form validation, animations, handling user events.
• Libraries/Frameworks: jQuery, React, Vue.js.
• Security Concerns: Limited access to sensitive server-side resources for security reasons.

Server-side JavaScript:
• Execution Environment: Runs on the server (backend).
• Purpose: Handles business logic, database operations, and server-side processing.
• Examples: API development, database interactions, authentication, server-side rendering.
• Libraries/Frameworks: Node.js, Express.js, NestJS.
• Security Concerns: Access to sensitive server resources, requires secure coding practices to prevent attacks.;`,
    difficulty: "hard",
  },
  {
    question: "What do you mean by BOM?",
    answer: `Browser Object Model is known as BOM. It allows users to interact with the browser. A browser's initial object is a window. As a result, you may call all of the window's functions directly or by referencing the window. The document, history, screen, navigator, location, and other attributes are available in the window object`,
    difficulty: "medium",
  },
  {
    question: "What is DOM?",
    answer: `• DOM stands for Document Object Model.  DOM is a programming interface for HTML and XML documents.
• When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM. Using this DOM, we can manipulate or change various elements inside the HTML document.`,
    difficulty: "medium",
  },
  {
    question: "What is memoization?",
    answer: `• Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned.
    `,
    difficulty: "hard",
    image: '![memoriztion](/memorization.png)'
  },
  {
    question: "What are the types of errors in javascript?",
    answer: `There are two types of errors in javascript. Syntax error and Logical error`,
    difficulty: "easy",
  },
  {
    question: "What are callbacks?",
    answer: `• Callbacks are functions passed into another function as an argument to be executed later.
    • They allow asynchronous operations, like reading files or making API calls, to execute in sequence.`,
    difficulty: "hard",
    image: '![callback](/callback.png)'
  },
];

export default JSQuestions;
