var data = [
    {
      question: 'What does the acronym D.O.M. stand for?',
      choices: ['Dog Only Members', 'Document Object Model', 'Dancing On Mercury', 'Document On Memory'],
      answer: 'Document Object Model'
    },
    {
      question: 'What is the difference between `let`, `var`, and `const` in JavaScript?',
      choices: ['`let` is block-scoped, `var` is function-scoped, and `const` is used for constants.',
                '`var` is block-scoped, `let` is function-scoped, and `const` is used for constants.',
                '`var` is block-scoped, `const` is function-scoped, and `let` is used for constants.',
                '`const` is block-scoped, `let` is function-scoped, and `var` is used for constants.'],
      answer: '`let` is block-scoped, `var` is function-scoped, and `const` is used for constants.'
    },
    {
      question: 'What is the purpose of CSS box model?',
      choices: ['To define the layout and spacing of elements on a web page.',
                'To define the box-shadow and border properties of elements.',
                'To define the font and color properties of elements.',
                'To define the animation and transition effects of elements.'],
      answer: 'To define the layout and spacing of elements on a web page.'
    },
    {
      question: 'What is the difference between margin and padding in CSS?',
      choices: ['Margin is the space outside the border of an element, while padding is the space inside the border.',
                'Padding is the space outside the border of an element, while margin is the space inside the border.',
                'Margin is the space between the text and the border of an element, while padding is the space between elements.',
                'Padding is the space between the text and the border of an element, while margin is the space between elements.'],
      answer: 'Margin is the space outside the border of an element, while padding is the space inside the border.'
    },
    {
      question: 'What is the purpose of a version control system?',
      choices: ['To track changes and revisions to files in a project.',
                'To ensure the security and privacy of sensitive data.',
                'To test and debug software applications.',
                'To design and build user interfaces for websites.'],
      answer: 'To track changes and revisions to files in a project.'
    },
    {
      question: 'What is the difference between Git and GitHub?',
      choices: ['Git is a version control system, while GitHub is a web-based hosting service for Git repositories.',
                'GitHub is a version control system, while Git is a web-based hosting service for GitHub repositories.',
                'Git is a programming language, while GitHub is a software development framework.',
                'GitHub is a programming language, while Git is a software development framework.'],
      answer: 'Git is a version control system, while GitHub is a web-based hosting service for Git repositories.'
    },
    {
      question: 'What is the difference between HTTP and HTTPS?',
      choices: ['HTTP is a non-secure protocol that encrypts data sent between a client and a server, while HTTPS is a secure protocol.',
                'HTTP is a secure protocol that encrypts data sent between a client and a server, while HTTPS is a non-secure protocol.',
                'HTTP is used for static websites, while HTTPS is used for dynamic websites.',
                'HTTP is used for client-side scripting, while HTTPS is used for server-side scripting.'],
      answer: 'HTTP is a non-secure protocol that encrypts data sent between a client and a server, while HTTPS is a secure protocol.'
    },
    {
      question: 'What is the purpose of a media query in CSS?',
      choices: ['To apply different styles based on the characteristics of the device or browser being used.',
                'To define animations and transitions for elements on a web page.',
                'To optimize the performance and loading speed of a website.',
                'To validate and sanitize user input in a web form.'],
      answer: 'To apply different styles based on the characteristics of the device or browser being used.'
    },
    {
      question: 'What is the difference between a class and an ID in CSS?',
      choices: ['A class can be used to style multiple elements, while an ID is used to style a single unique element.',
                'A class is used for JavaScript functions, while an ID is used for CSS styles.',
                'A class is a selector for HTML tags, while an ID is a selector for CSS properties.',
                'A class is used for external CSS files, while an ID is used for inline styles.'],
      answer: 'A class can be used to style multiple elements, while an ID is used to style a single unique element.'
    },
    {
      question: 'What is the purpose of the "this" keyword in JavaScript?',
      choices: ['To refer to the current object or context in which a function is being called.',
                'To define a new object within a JavaScript program.',
                'To access the previous element in an array or list.',
                'To declare a variable with global scope.'],
      answer: 'To refer to the current object or context in which a function is being called.'
    },
    {
      question: 'What is a closure in JavaScript?',
      choices: ['A closure is a combination of a function and the lexical environment within which that function was declared.',
                'A closure is a type of loop that iterates through an array or list.',
                'A closure is a variable with block scope that cannot be modified.',
                'A closure is a method used to sort elements in an array.'],
      answer: 'A closure is a combination of a function and the lexical environment within which that function was declared.'
    },
    {
      question: 'What is the difference between a function declaration and a function expression in JavaScript?',
      choices: ['A function declaration is hoisted and can be called before it\'s declared, while a function expression is not hoisted.',
                'A function expression is hoisted and can be called before it\'s declared, while a function declaration is not hoisted.',
                'A function declaration is used for asynchronous programming, while a function expression is used for synchronous programming.',
                'A function expression is used for asynchronous programming, while a function declaration is used for synchronous programming.'],
      answer: 'A function declaration is hoisted and can be called before it\'s declared, while a function expression is not hoisted.'
    },
    {
      question: 'What is the purpose of the "use strict" directive in JavaScript?',
      choices: ['To enforce stricter syntax rules and prevent the use of certain error-prone features.',
                'To enable the use of experimental JavaScript features not supported by all browsers.',
                'To define a strict code review process for JavaScript projects.',
                'To indicate that a JavaScript file is written in a strict programming language.'],
      answer: 'To enforce stricter syntax rules and prevent the use of certain error-prone features.'
    },
    {
        question: 'What is the purpose of CSS?',
        choices: ['To add interactivity to web pages.', 'To structure and style web pages.', 'To perform server-side processing.', 'To handle database operations.'],
        answer: 'To structure and style web pages.'
    },
    {
      question: 'What is the purpose of the "fetch" API in JavaScript?',
      choices: ['To make HTTP requests and retrieve data from a server.',
                'To validate and sanitize user input in a web form.',
                'To define animations and transitions for elements on a web page.',
                'To optimize the performance and loading speed of a website.'],
      answer: 'To make HTTP requests and retrieve data from a server.'
    },
    {
      question: 'What is the difference between a GET request and a POST request?',
      choices: ['A GET request is used to retrieve data from a server, while a POST request is used to send data to a server.',
                'A GET request is used to send data to a server, while a POST request is used to retrieve data from a server.',
                'A GET request is used for secure connections, while a POST request is used for non-secure connections.',
                'A GET request is used for client-side scripting, while a POST request is used for server-side scripting.'],
      answer: 'A GET request is used to retrieve data from a server, while a POST request is used to send data to a server.'
    },
    {
      question: 'What is the purpose of SQL in web development?',
      choices: ['SQL is used to manage and manipulate databases, including storing, retrieving, and updating data.',
                'SQL is used to style and layout web pages, including the design and placement of elements.',
                'SQL is used to define animations and transitions for elements on a web page.',
                'SQL is used to optimize the performance and loading speed of a website.'],
      answer: 'SQL is used to manage and manipulate databases, including storing, retrieving, and updating data.'
    },
    {
      question: 'What is the difference between a class and an interface in object-oriented programming?',
      choices: ['A class is a blueprint for creating objects, while an interface is a contract that defines a set of methods a class must implement.',
                'A class is a contract that defines a set of methods an interface must implement, while an interface is a blueprint for creating objects.',
                'A class is used for inheritance, while an interface is used for encapsulation.',
                'A class is a programming language construct, while an interface is a software development framework.'],
      answer: 'A class is a blueprint for creating objects, while an interface is a contract that defines a set of methods a class must implement.'
    },
    {
      question: 'What is the purpose of unit testing in software development?',
      choices: ['To verify that individual components or functions of a program work as expected.',
                'To test the overall functionality and usability of a software application.',
                'To validate and sanitize user input in a web form.',
                'To optimize the performance and loading speed of a website.'],
      answer: 'To verify that individual components or functions of a program work as expected.'
    }
  ];
  