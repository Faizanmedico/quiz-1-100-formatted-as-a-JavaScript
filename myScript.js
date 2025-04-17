const quiz = [
    {
      question: 'What is a correct syntax to output "Hello World" in Python?',
      options: ['echo("Hello World");', 'p("Hello World")', 'print("Hello World")', 'echo "Hello World"'],
      correct: 'print("Hello World")',
      image: "1.1.png"
    },
    {
      question: 'Which character is used for comments in Python?',
      options: ['//', '<!--', '#', '/*'],
      correct: '#',
      image: "1.2.png"
    },
    {
      question: 'What is the file extension for Python files?',
      options: ['.pt', '.python', '.py', '.pyt'],
      correct: '.py',
      image: "1.3.png"
    },
    {
      question: 'What is the result of 2 + 2 * 2 in Python?',
      options: ['8', '6', '4', '10'],
      correct: '6',
      image: "1.4.png"
    },
    {
      question: 'What data type is the result of: 3 / 2?',
      options: ['int', 'float', 'double', 'str'],
      correct: 'float',
      image: "1.5.png"
    },
    {
      question: 'Which of the following is a valid variable name?',
      options: ['10x', 'x = 10', 'x-1', 'None'],
      correct: 'x = 10',
      image: "1.6.png"
    },
    {
      question: 'Which keyword is used to define a function in Python?',
      options: ['function', 'define', 'func', 'def'],
      correct: 'def',
      image: "1.7.png"
    },
    {
      question: 'What is the output of list(range(1, 4))?',
      options: ['[0, 1, 2]', '[1, 2, 3]', '[1, 2, 3, 4]', '[2, 3, 4]'],
      correct: '[1, 2, 3]',
      image: "1.8.png"
    },
    {
      question: 'Which of the following is immutable?',
      options: ['list', 'dict', 'tuple', 'set'],
      correct: 'tuple',
      image: "1.9.png"
    },
    {
      question: 'What is the purpose of input() function?',
      options: ['Display output', 'Exit program', 'Accepts user input', 'Create variable'],
      correct: 'Accepts user input',
      image: "1.10.png"
    },
    {
      question: 'What is the type of input("Enter: ")?',
      options: ['int', '<class \'str\'>', 'float', 'bool'],
      correct: '<class \'str\'>',
      image: "1.11.png"
    },
    {
      question: 'Which is the correct syntax for a while loop?',
      options: ['while x > 0 {}', 'while(x > 0)', 'while x > 0:', 'loop while x > 0'],
      correct: 'while x > 0:',
      image: "1.12.png"
    },
    {
      question: 'Which is the correct syntax for an if statement?',
      options: ['if (x > 0)', 'if x > 0 {}', 'if x > 0 then', 'if x > 0:'],
      correct: 'if x > 0:',
      image: "1.13.png"
    },
    {
      question: 'What is the output of "a" * 3?',
      options: ['aaa', 'a3', 'Error', 'aaa3'],
      correct: 'aaa',
      image: "1.14.png"
    },
    {
      question: 'What is the output of 3 == 4?',
      options: ['True', 'None', 'Maybe', 'False'],
      correct: 'False',
      image: "1.15.png"
    },
    {
      question: 'What is the result of 2 ** 3?',
      options: ['5', '6', '8', '9'],
      correct: '8',
      image: "1.16.png"
    },
    {
      question: 'Which one defines a dictionary?',
      options: ['[ "key": "value" ]', '( "key": "value" )', '{ "key": "value" }', 'dict[ key=value ]'],
      correct: '{ "key": "value" }',
      image: "1.17.png"
    },
    {
      question: 'Which is the correct method to access dictionary values?',
      options: ['dict.value("key")', 'dict.get("key")', 'dict["get"]', 'dict.getvalue("key")'],
      correct: 'dict.get("key")',
      image: "1.18.png"
    },
    {
      question: 'What does list(range(3)) return?',
      options: ['[1, 2, 3]', '[0, 1, 2]', '[1, 2]', '[0, 1, 2, 3]'],
      correct: '[0, 1, 2]',
      image: "1.19.png"
    },
    {
      question: 'What is the output of len("123")?',
      options: ['2', '3', '4', '1'],
      correct: '3',
      image: "1.20.png"
    }
  ];
  






  const quizPart2 = [
    {
      question: 'Which of these is a Python boolean value?',
      options: ['yes', 'TRUE', 'True', 'truth'],
      correct: 'True',
      image: "2.1.png"
    },
    {
      question: 'Which loop is used to iterate a known number of times?',
      options: ['while', 'for', 'loop', 'if'],
      correct: 'for',
      image: "2.2.png"
    },
    {
      question: 'What keyword is used to create a class in Python?',
      options: ['define', 'create', 'class', 'struct'],
      correct: 'class',
      image: "2.3.png"
    },
    {
      question: 'Which one is a list in Python?',
      options: ['(1, 2, 3)', '{1, 2, 3}', '[1, 2, 3]', '"1,2,3"'],
      correct: '[1, 2, 3]',
      image: "2.4.png"
    },
    {
      question: 'Which one is used to define a block of code?',
      options: ['Brackets {}', 'Parentheses ()', 'Colon :', 'Quotes ""'],
      correct: 'Colon :',
      image: "2.5.png"
    },
    {
      question: 'What does `int("10")` return?',
      options: ['"10"', '10.0', '10', 'Error'],
      correct: '10',
      image: "2.6.png"
    },
    {
      question: 'Which of the following is a Python tuple?',
      options: ['{1, 2, 3}', '[1, 2, 3]', '(1, 2, 3)', '"1, 2, 3"'],
      correct: '(1, 2, 3)',
      image: "2.7.png"
    },
    {
      question: 'What is the correct way to open a file for reading?',
      options: ['open("file.txt", "read")', 'open("file.txt")', 'open("file.txt", "r")', 'read("file.txt")'],
      correct: 'open("file.txt", "r")',
      image: "2.8.png"
    },
    {
      question: 'How do you insert comments in Python code?',
      options: ['// comment', '-- comment', '# comment', '/* comment */'],
      correct: '# comment',
      image: "2.9.png"
    },
    {
      question: 'Which operator is used for exponentiation in Python?',
      options: ['^', '**', 'exp()', '^^'],
      correct: '**',
      image: "2.10.png"
    },
    {
      question: 'What is the output of len([1, 2, 3])?',
      options: ['2', '3', '4', 'Error'],
      correct: '3',
      image: "2.11.png"
    },
    {
      question: 'Which function can convert a string to a float?',
      options: ['int()', 'str()', 'float()', 'bool()'],
      correct: 'float()',
      image: "2.12.png"
    },
    {
      question: 'What is used to handle exceptions in Python?',
      options: ['catch', 'try/except', 'error', 'handler'],
      correct: 'try/except',
      image: "2.13.png"
    },
    {
      question: 'Which of the following creates an empty list?',
      options: ['[]', '{}', '()', 'list(0)'],
      correct: '[]',
      image: "2.14.png"
    },
    {
      question: 'What keyword ends a function in Python?',
      options: ['stop', 'end', 'return', 'exit'],
      correct: 'return',
      image: "2.15.png"
    },
    {
      question: 'What is the correct way to declare a variable in Python?',
      options: ['int x = 5;', 'x := 5', 'x = 5', 'let x = 5'],
      correct: 'x = 5',
      image: "2.16.png"
    },
    {
      question: 'Which of these is a valid string in Python?',
      options: ['"Hello"', "'Hello'", '"Hello\'s"', 'All of the above'],
      correct: 'All of the above',
      image: "2.17.png"
    },
    {
      question: 'How do you define a multi-line string in Python?',
      options: ['"""This is a string"""', 'string("text")', '//string', '==text=='],
      correct: '"""This is a string"""',
      image: "2.18.png"
    },
    {
      question: 'What is the output of bool(0)?',
      options: ['True', '0', 'False', 'None'],
      correct: 'False',
      image: "2.19.png"
    },
    {
      question: 'Which function is used to get the data type of a variable?',
      options: ['type()', 'datatype()', 'typeof()', 'checktype()'],
      correct: 'type()',
      image: "2.20.png"
    }
  ];

  



  const quizPart3 = [
    {
      question: 'What does the `strip()` method do?',
      options: ['Removes spaces from both ends', 'Splits a string', 'Converts to uppercase', 'Replaces characters'],
      correct: 'Removes spaces from both ends',
      image: "3.1.png"
    },
    {
      question: 'What will `print(type([]))` output?',
      options: ['<class \'dict\'>', '<class \'list\'>', '<class \'set\'>', '<class \'tuple\'>'],
      correct: '<class \'list\'>',
      image: "3.2.png"
    },
    {
      question: 'Which of these is a valid way to import a module?',
      options: ['include math', 'import math()', 'use math', 'import math'],
      correct: 'import math',
      image: "3.3.png"
    },
    {
      question: 'Which operator checks if two values are equal?',
      options: ['=', '==', '!=', '==='],
      correct: '==',
      image: "3.4.png"
    },
    {
      question: 'Which method adds an element to a list?',
      options: ['append()', 'add()', 'insert()', 'push()'],
      correct: 'append()',
      image: "3.5.png"
    },
    {
      question: 'What does `range(5)` return?',
      options: ['[1,2,3,4,5]', '[0,1,2,3,4]', '[0,1,2,3,4,5]', '[1,2,3,4]'],
      correct: '[0,1,2,3,4]',
      image: "3.6.png"
    },
    {
      question: 'What is a lambda function?',
      options: ['A variable', 'A string method', 'An anonymous function', 'A loop type'],
      correct: 'An anonymous function',
      image: "3.7.png"
    },
    {
      question: 'How do you start a comment in Python?',
      options: ['//', '#', '/*', '--'],
      correct: '#',
      image: "3.8.png"
    },
    {
      question: 'What is the output of `5 // 2`?',
      options: ['2.5', '3', '2', 'Error'],
      correct: '2',
      image: "3.9.png"
    },
    {
      question: 'How do you check the length of a string or list?',
      options: ['count()', 'length()', 'size()', 'len()'],
      correct: 'len()',
      image: "3.10.png"
    },
    {
      question: 'Which function converts a number to a string?',
      options: ['str()', 'int()', 'string()', 'chr()'],
      correct: 'str()',
      image: "3.11.png"
    },
    {
      question: 'What does the `split()` method do?',
      options: ['Splits list into chunks', 'Splits strings into list items', 'Splits integers', 'Splits dictionaries'],
      correct: 'Splits strings into list items',
      image: "3.12.png"
    },
    {
      question: 'Which of these is a Python keyword?',
      options: ['loop', 'define', 'except', 'method'],
      correct: 'except',
      image: "3.13.png"
    },
    {
      question: 'How do you write an inline if statement?',
      options: ['if x > 1: print(x)', 'print(x if x > 1)', 'print(x) if x > 1 else 0', 'x > 1 ? print(x) : 0'],
      correct: 'print(x) if x > 1 else 0',
      image: "3.14.png"
    },
    {
      question: 'Which symbol is used for "not equal" in Python?',
      options: ['!=', '<>', '!==', '~='],
      correct: '!=',
      image: "3.15.png"
    },
    {
      question: 'What does `continue` do in a loop?',
      options: ['Stops loop', 'Skips to the next iteration', 'Exits program', 'Restarts the loop'],
      correct: 'Skips to the next iteration',
      image: "3.16.png"
    },
    {
      question: 'Which of the following is a mutable data type?',
      options: ['tuple', 'str', 'int', 'list'],
      correct: 'list',
      image: "3.17.png"
    },
    {
      question: 'What will `print(bool(""))` return?',
      options: ['True', 'False', 'Error', 'None'],
      correct: 'False',
      image: "3.18.png"
    },
    {
      question: 'Which of these is used for function documentation?',
      options: ['#comment', '"""Docstring"""', '//', 'doc{}'],
      correct: '"""Docstring"""',
      image: "3.19.png"
    },
    {
      question: 'Which method removes and returns the last item of a list?',
      options: ['delete()', 'remove()', 'pop()', 'cut()'],
      correct: 'pop()',
      image: "3.20.png"
    }
  ];
  



  const quizPart4 = [
    {
      question: 'What does the `max()` function return?',
      options: ['Minimum value', 'Maximum value', 'Average value', 'Middle value'],
      correct: 'Maximum value',
      image: "4.1.png"
    },
    {
      question: 'What will `3 * "Hi"` return?',
      options: ['"HiHiHi"', 'Error', '"Hi3"', '"Hi*3"'],
      correct: '"HiHiHi"',
      image: "4.2.png"
    },
    {
      question: 'Which statement creates a dictionary?',
      options: ['[1, 2, 3]', '{1, 2, 3}', '{"a":1, "b":2}', '(1, 2, 3)'],
      correct: '{"a":1, "b":2}',
      image: "4.3.png"
    },
    {
      question: 'Which keyword is used to define a function?',
      options: ['func', 'define', 'def', 'function'],
      correct: 'def',
      image: "4.4.png"
    },
    {
      question: 'What will `list("abc")` return?',
      options: ['["abc"]', '["a", "b", "c"]', '[a, b, c]', 'Error'],
      correct: '["a", "b", "c"]',
      image: "4.5.png"
    },
    {
      question: 'Which of these is not a valid Python data type?',
      options: ['list', 'dict', 'array', 'set'],
      correct: 'array',
      image: "4.6.png"
    },
    {
      question: 'What does `round(4.6)` return?',
      options: ['4', '4.5', '5', 'Error'],
      correct: '5',
      image: "4.7.png"
    },
    {
      question: 'How do you create a set in Python?',
      options: ['[]', '()', '{}', 'set()'],
      correct: 'set()',
      image: "4.8.png"
    },
    {
      question: 'What does `type({})` return?',
      options: ['<class \'set\'>', '<class \'dict\'>', '<class \'list\'>', '<class \'tuple\'>'],
      correct: '<class \'dict\'>',
      image: "4.9.png"
    },
    {
      question: 'Which of these will raise a `ZeroDivisionError`?',
      options: ['5 / 0', '5 % 2', '0 / 5', '5 // 2'],
      correct: '5 / 0',
      image: "4.10.png"
    },
    {
      question: 'Which keyword is used to exit a loop?',
      options: ['stop', 'exit', 'quit', 'break'],
      correct: 'break',
      image: "4.11.png"
    },
    {
      question: 'What will `"5" + "5"` return?',
      options: ['10', '55', '"55"', '"10"'],
      correct: '"55"',
      image: "4.12.png"
    },
    {
      question: 'What will `"5" * 2` return?',
      options: ['10', '"55"', '"5" * 2', '"55"'],
      correct: '"55"',
      image: "4.13.png"
    },
    {
      question: 'Which of the following will raise a `TypeError`?',
      options: ['"2" + 2', '"2" + "2"', '2 + 2', 'int("2") + 2'],
      correct: '"2" + 2',
      image: "4.14.png"
    },
    {
      question: 'How do you check if "apple" is in a list?',
      options: ['"apple" has list', '"apple" in list', 'in(list, "apple")', 'contains("apple", list)'],
      correct: '"apple" in list',
      image: "4.15.png"
    },
    {
      question: 'What does `dict.keys()` return?',
      options: ['List of values', 'List of keys', 'Key-value pairs', 'Length of dict'],
      correct: 'List of keys',
      image: "4.16.png"
    },
    {
      question: 'What will `"Hello".lower()` return?',
      options: ['"HELLO"', '"hello"', '"Hello"', '"Hello.lower()"'],
      correct: '"hello"',
      image: "4.17.png"
    },
    {
      question: 'What is `None` in Python?',
      options: ['A string', 'A null value', 'A list', 'An error'],
      correct: 'A null value',
      image: "4.18.png"
    },
    {
      question: 'Which of these keywords is used to start a class?',
      options: ['object', 'define', 'class', 'constructor'],
      correct: 'class',
      image: "4.19.png"
    },
    {
      question: 'Which function returns the absolute value?',
      options: ['abs()', 'absolute()', 'fabs()', 'val()'],
      correct: 'abs()',
      image: "4.20.png"
    }
  ];

  




  const quizPart5 = [
    {
      question: 'Which built-in function returns the sum of all items in an iterable?',
      options: ['add()', 'sum()', 'total()', 'combine()'],
      correct: 'sum()',
      image: "5.1.png"
    },
    {
      question: 'What is the output of `bool(0)`?',
      options: ['True', 'False', '0', 'None'],
      correct: 'False',
      image: "5.2.png"
    },
    {
      question: 'What does `enumerate()` do?',
      options: ['Creates a list', 'Returns index and value', 'Counts items', 'Sorts items'],
      correct: 'Returns index and value',
      image: "5.3.png"
    },
    {
      question: 'Which of the following is a correct file extension for Python files?',
      options: ['.pyth', '.pt', '.py', '.pyt'],
      correct: '.py',
      image: "5.4.png"
    },
    {
      question: 'How do you read a file in Python?',
      options: ['file.open()', 'open("file.txt", "r")', 'read.file()', 'file.read("file.txt")'],
      correct: 'open("file.txt", "r")',
      image: "5.5.png"
    },
    {
      question: 'What does `with open(...) as f:` do?',
      options: ['Creates a function', 'Declares a loop', 'Opens a file with automatic close', 'Reads from a database'],
      correct: 'Opens a file with automatic close',
      image: "5.6.png"
    },
    {
      question: 'Which method returns the index of an item in a list?',
      options: ['index()', 'find()', 'locate()', 'position()'],
      correct: 'index()',
      image: "5.7.png"
    },
    {
      question: 'What does `set()` do?',
      options: ['Sorts items', 'Removes duplicates', 'Creates dictionary', 'Converts string to list'],
      correct: 'Removes duplicates',
      image: "5.8.png"
    },
    {
      question: 'Which of the following is a Python boolean value?',
      options: ['Yes', 'TRUE', 'True', 'true'],
      correct: 'True',
      image: "5.9.png"
    },
    {
      question: 'What will `type((1,))` return?',
      options: ['tuple', 'list', 'int', 'dict'],
      correct: 'tuple',
      image: "5.10.png"
    },
    {
      question: 'How do you handle exceptions in Python?',
      options: ['try...except', 'if...else', 'error...catch', 'handle...catch'],
      correct: 'try...except',
      image: "5.11.png"
    },
    {
      question: 'What does `pass` do in Python?',
      options: ['Passes value to a function', 'Skips code block with no action', 'Terminates loop', 'Raises error'],
      correct: 'Skips code block with no action',
      image: "5.12.png"
    },
    {
      question: 'Which function returns the Unicode code of a character?',
      options: ['ord()', 'chr()', 'code()', 'ascii()'],
      correct: 'ord()',
      image: "5.13.png"
    },
    {
      question: 'Which statement will convert a string to an integer?',
      options: ['str("123")', 'int("123")', 'float("123")', 'bool("123")'],
      correct: 'int("123")',
      image: "5.14.png"
    },
    {
      question: 'What is the output of `not True`?',
      options: ['False', 'True', 'None', '0'],
      correct: 'False',
      image: "5.15.png"
    },
    {
      question: 'Which Python keyword is used for inheritance?',
      options: ['extends', 'inherits', 'super', 'class'],
      correct: 'class',
      image: "5.16.png"
    },
    {
      question: 'Which method converts all characters to uppercase?',
      options: ['capitalize()', 'upper()', 'uppercase()', 'toUpperCase()'],
      correct: 'upper()',
      image: "5.17.png"
    },
    {
      question: 'How do you create an empty dictionary?',
      options: ['()', '[]', '{}', 'dict[]'],
      correct: '{}',
      image: "5.18.png"
    },
    {
      question: 'What is the result of `len({1,2,3})`?',
      options: ['3', '1', '0', 'Error'],
      correct: '3',
      image: "5.19.png"
    },
    {
      question: 'Which symbol is used for exponentiation?',
      options: ['^', '**', '//', '^^'],
      correct: '**',
      image: "5.20.png"
    }
  ];
  