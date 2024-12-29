
const questions = {
    HTML: [
        { question: "What does HTML stand for?", options: ["Hypertext Machine language.", "Hypertext and links markup language.", "Hypertext Markup Language.", "Hightext machine language."], answer: 1 },
        { question: "How is document type initialized in HTML5.?", options: ["</DOCTYPE HTML>", "<doctype html>", "<doctype html!>", "<!doctype html>"], answer: 3 },
        { question: "Which of the following is used to read an HTML page and render it?", options: ["Web server", "Web network", "Web browser", "Web Matrix"], answer: 2 },
        { question: "Which of the following is not a difference between HTML and XHTML?", options: [" Charset in both html and xhtml is “text/html”", "Tags and attributes are case-insensitive in HTML but not in XHTML", "Special characters must be escaped using character entities in XHTML unlike HTML", "Charset in html is “text/html” where as in xhtml it is “application/xml+xhtml”"], answer: 0 },
        { question: "Which of the following tag is used for inserting the largest heading in HTML?", options: ["head", "<h1>", "<h6>", "both"], answer: 1 },
        { question: "What is DOM in HTML?", options: ["Language dependent application programming", "Hierarchy of objects in ASP.NET", "Application programming interface", "Convention for representing and interacting with objects in html documents"], answer: 3 },
        { question: "In which part of the HTML metadata is contained?", options: ["head tag", "html tag", "body tag", "title tag"], answer: 0 },
        { question: "Which element is used to get highlighted text in HTML5?", options: ["<u>", "<mark>", "<highlight>", "<b>"], answer: 1 },
        { question: "Which of the following is not a HTML5 tag", options: ["<track>", "<video>", "<source>", "<slider>"], answer: 2 },
        { question: "How do we write comments in HTML?", options: ["</.....>", "<!.....>", "</...../>", "<.....!>"], answer: 1 },
        { question: "Which of the following elements in HTML5 defines video or movie content?", options: ["<video>", "<movie>", "<audio>", "<media>"], answer: 0 },
        { question: "Which of the following is not the element associated with the HTML table layout?", options: [" alignment", "color", "size", "spanning"], answer: 1 },
        { question: "Which element is used for or styling HTML5 layout?", options: ["CSS", "Javascript", "JQuery", "PHP"], answer: 0 },
        { question: "Which HTML tag is used for making character appearance bold?", options: ["<u>content</u>", "<b>content</b>", "<br>content</br>", "<i>content</i>"], answer: 1 },
        { question: "HTML is a subset of ___________", options: ["XHTML", "SGMT", "SGML", "SGME"], answer: 2 },
    ],
    CSS: [
        { question: "What is CSS?", options: ["CSS is a style sheet language", "CSS is designed to separate the presentation and content, including layout, colors, and fonts", "CSS is the language used to style the HTML documents", "All of the mentioned"], answer: 3 },
        { question: "Which of the following tag is used to embed css in html page?", options: ["<css>", "<!DOCTYPE html>", "<script>", "<style>"], answer: 3 },
        { question: "Which of the following CSS selectors are used to specify a group of elements?", options: ["tag", "id", "class", "both class and tag"], answer: 2 },
        { question: "Which of the following has introduced text, list, box, margin, border, color, and background properties?", options: ["HTML", "PHP", "CSS", "Ajax"], answer: 2 },
        { question: "Which of the following CSS framework is used to create a responsive design?", options: ["django", "rails", "larawell", "bootstrap"], answer: 3 },
        { question: "Which of the following CSS selector is used to specify a rule to bind a particular unique element?", options: ["tag", "id", "class", "both class and tag"], answer: 1 },
        { question: "Which of the following type of HTML tag is used to define an internal style sheet?", options: ["<script>", "<link>", "<class>", "<style>"], answer: 3 },
        { question: "Which of the following CSS property is used to make the text bold?", options: ["text-decoration: bold", "font-weight: bold", "font-style: bold", "text-align: bold"], answer: 1 },
        { question: "Which of the following CSS style property is used to specify an italic text?", options: ["style", "font", "font-style", "@font-face"], answer: 2 },
        { question: " Which of the following are the CSS Extension Prefixes for Webkit?", options: ["-chrome", "-web", "-o-", "-webkit"], answer: 3 },
        { question: "Which of the following is the correct syntax to link an external style sheet in the HTML file?", options: ["<link rel=”stylesheet” href=”style.css” />", "<link rel=”stylesheet” src=”style.css” />", "<style rel=”stylesheet” src=”style.css” />", "<style rel=”stylesheet” link=”style.css” />"], answer: 0 },
        { question: " Which of the following is the first CSS specification to become an official W3C Recommendation?", options: ["CSS level 2", "(X)HTML CSS", "CSS level 1", "CSS level 2.1"], answer: 2 },
        { question: "Which of the following function defines a linear gradient as a CSS image?", options: ["gradient()", ") linear-gradient()", "grayscale()", "image()"], answer: 1 },
        { question: "Which of the following CSS property can be used to set the image as a border instead of the border style?", options: ["background-image-source", "background-image", "border-image-source", "border-image"], answer: 2 },
        { question: " Which of the following CSS property defines the different properties of all four sides of an element’s border in a single declaration?", options: ["border-collapse", "border-width", "padding", "border"], answer: 1 },
        { question: " Which of the following CSS property sets the shadow for a box element?", options: ["set-shadow", "box-shadow", "shadow", "canvas-shadow"], answer: 1 },

    ],
    JAVASCRIPT: [
        { question: "Which type of javascript language is?", options: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"], answer: 1 },
        { question: "Which one of the following also known as Conditional expression?", options: ["Alternative to if-else", "Switch statement", "if then else statement", "immediate if"], answer: 3 },
        { question: "When interpreter encounters an empty statements,what will it do?", options: ["Shows a warning", "prompts to complete the statement", "throws an error", "ignores the statements"], answer: 3 },
        { question: "The function and var are known as?", options: ["keywords", "Datatypes", "Declaration statements", "Prototypes"], answer: 2 },
        { question: "Which of the following variables taking precedence over the others if the names are same?", options: ["global variable", "local element", "Both of the above", "none of these"], answer: 1 },
        { question: "Which one of the following is the correct way for calling javascript code?", options: ["Preprocessor", "Triggering event", "RMI", "function/method"], answer: 3 },
        { question: "which is not a pop up box in JS", options: ["Confirm", "Prompt", "Alert", "Error"], answer: 3 },
        { question: "Which of the following is the property that is triggered in response to JS errors?", options: ["onclick", "onerror", "onmessage", "onexception"], answer: 2 },
        { question: "Which among the following is a server side javascript object?", options: ["File upload", "Function", "File", "Type of"], answer: 2 },
        { question: "Which is not considered as a javascript operator?", options: [">>>", "*=", "<>", "Typeof"], answer: 2 },
        { question: "Which company developed Javascript?", options: ["Microsoft", "Apple", "Titanium", "Netscape"], answer: 3 },
        { question: "How can a variable be declared in javascript?", options: ["var strname", "str var", "val str", "str"], answer: 0 },
        { question: "Which among the following is a language of javascript?", options: ["text/JavaScript", "text/ECMAScript", "text/VBScript", "JavaScript VBScript"], answer: 0 },
        { question: "Which tag is used to embed a video in an HTML page?", options: ["<media>", "<embed>", "<video>", "<movie>"], answer: 2 },
        { question: "Which attribute holds javascript version?", options: ["language", "script", "version", "none"], answer: 2 },

    ],
    JAVA: [
        { question: "Which of these components are used in a Java program for compilation, debugging, and execution?", options: ["JDK", "JVM", "JRE", "JIT"], answer: 0 },
        { question: "Which of these literals can be contained in a float data type variable?", options: ["-3.4e+050", "+1.7e+308", "-3.4e+038", "-1.7e+308"], answer: 1 },
        { question: "What is BigDecimal.ONE?", options: ["it is a custom-defined statement", "it is a wrong statement", " it is a static variable that has a value of 1 on a scale of 0", "it is a static variable that has a value of 1 on a scale of 10"], answer: 2 },
        { question: "When an expression consists of int, double, long, float, then the entire expression will get promoted into a data type that is?", options: ["float", "double", "int", "long"], answer: 1 },
        { question: "Which of the following operators can operate on a boolean variable?", options: ["&&", "==", "?:", "All of the above"], answer: 3 },
        { question: "Who invented Java Programming?", options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"], answer: 0 },
        { question: "Which statement is true about Java?", options: ["Java is a sequence-dependent programming language", "Java is a platform-dependent programming language", " Java is a code dependent programming language", " Java is a platform-independent programming language"], answer: 3 },
        { question: "Which one of the following is not a Java feature?", options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic and Extensible"], answer: 1 },
        { question: "Which of these cannot be used for a variable name in Java?", options: [" identifier & keyword", "identifier", "keyword", "none"], answer: 2 },
        { question: "What is the extension of java code files?", options: [".js", ".txt", ".class", ".java"], answer: 3 },
        { question: "Which environment variable is used to set the java path?", options: ["MAVEN_Path", "JavaPATH", "JAVA", "JAVA_HOME"], answer: 3 },
        { question: "Which of the following is not an OOPS concept in Java?", options: ["Polymorphism", "Inheritance", "Compilation", "Encapsulation"], answer: 2 },
        { question: "What is not the use of “this” keyword in Java?", options: ["Referring to the instance variable when a local variable has the same name", "Passing itself to the method of the same class", "Passing itself to another method", "Calling another constructor in constructor chaining"], answer: 1 },
        { question: "Which of the following is a type of polymorphism in Java Programming?", options: ["Multiple polymorphism", "Compile time polymorphism", "Multilevel polymorphism", "Execution time polymorphism"], answer: 1 },
        { question: "What is Truncation in Java?", options: [" Floating-point value assigned to a Floating type", "Floating-point value assigned to an integer type", "Integer value assigned to floating type", "Integer value assigned to floating type"], answer: 1 }
    ],
    PYTHON: [
        { question: "Who developed Python Programming Language?", options: ["Wick van Rossum", "Rasmus Lerdorf", "Guido van Rossum", "Niene Stom"], answer: 2 },
        { question: "Which type of Programming does Python support?", options: ["object-oriented programming", "structured programming", "functional programming", "all of the mentioned"], answer: 3 },
        { question: "Is Python case sensitive when dealing with identifiers?", options: ["Yes", "No", "Machine dependent", "None of the mentioned"], answer: 0 },
        { question: "Which symbol is used for single-line comments in JavaScript?", options: ["//", "/*", "<!--", "#"], answer: 0 },
        { question: "Which of the following is the correct extension of python file?", options: [".python", ".pl", ".py", ".p"], answer: 2 },
        { question: "Is Python code compiled or interpreted?", options: ["Python code is both compiled and interpreted", "Python code is neither compiled nor interpreted", "Python code is only compiled", "Python code is only interpreted"], answer: 0 },
        { question: "All keywords in Python are in _________", options: ["Capitalized", "lower case", "UPPER CASE", " None of the mentioned"], answer: 3 },
        { question: "Which of the following is used to define a block of code in Python language?", options: ["Indentation", "Key", "Brackets", "All of the above"], answer: 0 },
        { question: "Which keyword is used for function in Python language?", options: ["Function", "def", "Fun", "Define"], answer: 1 },
        { question: "Which of the following character is used to give single-line comments in Python?", options: ["//", "#", "!", "/*"], answer: 1 },
        { question: "Python supports the creation of anonymous functions at runtime, using a construct called ?", options: ["pi", "anonymous", "lambda", "none of the mentioned"], answer: 2 },
        { question: "Which of the following is not the keyword of python language?", options: ["pass", "eval", "assert", "non local"], answer: 1 },
        { question: "What does pip stand for python?", options: ["Pip Installs Python", "Pip Installs Packages", "Preferred Installer Program", "All of the above"], answer: 2 },
        { question: "Which of the following is true for variable names in Python?", options: ["unlimited length", "underscore and ampersand are the only two special characters allowed", "all private members must have leading and trailing underscores", "none of the mentioned"], answer: 1 },
        { question: "Which of the following is the use of id() function in python?", options: ["Every object doesn’t have a unique id", " Id returns the identity of the object", "All of the mentioned", "None of the mentioned"], answer: 1 }
    ]
};

//language selection to start the quiz
const language = localStorage.getItem('selectedLanguage') || 'HTML';
const next1 = document.getElementById("next")
const click1 = document.getElementById("click")

const quizQuestions = questions[language];
if (!quizQuestions) {
    alert('Invalid quiz category selected. Defaulting to HTML.');
    quizQuestions = questions.HTML;
}

const totalQuestions = quizQuestions.length;
let currentQuestionIndex = 0;
let score = 0;
let timer;

document.getElementById('quizTitle').textContent = `${language}`;

//quiz questions for particular language 
function nextQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        document.getElementById('question').innerHTML = `<strong>${currentQuestion.question}</strong>`;

        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => {
                checkAnswer(index, button);
            }
            optionsContainer.appendChild(button);
        });

        document.getElementById('progress').textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
        startTimer();
    } else {
        finishsound.play()
        finishQuiz();
    }
}
//button functionality for next quesion
function next() {
    currentQuestionIndex++;
    nextQuestion();
    next1.play();
}

//button functionality for previous quesion
function previous() {
    currentQuestionIndex--;
    nextQuestion();
    next1.play();
}

//answer validation and updating score
function checkAnswer(selectedIndex, button) {
    const correctIndex = quizQuestions[currentQuestionIndex].answer;
    if (selectedIndex === correctIndex) {
        click1.play();
        score++;
        button.classList.add('correct');
    } else {
        click1.play();
        button.classList.add('incorrect');
    }
    setTimeout(() => {
        currentQuestionIndex++;
        nextQuestion();
    }, 1000);
}

//individual question timer using timebar
function startTimer() {
    let timeLeft = 30;
    document.getElementById('time').textContent = timeLeft;
    document.getElementById('timerBar').style.width = "100%"; // Reset the bar to full
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;
        document.getElementById('timerBar').style.width = `${(timeLeft / 30) * 100}%`; // Update the timer bar

        if (timeLeft <= 0) {
            clearInterval(timer);
            currentQuestionIndex++;
            click1.play()
            nextQuestion();
        }
    }, 1000);
}
const finishbtn = document.getElementById("submit")
const finishsound = new Audio("../Audio_folder/finish-audio.mp3")
finishbtn.addEventListener("click", () => {
    finishsound.play()
    finishQuiz()

})
//finish quiz button functionality
function finishQuiz() {
    clearInterval(timer);
    const container = document.body;
    container.innerHTML = `
<div class="result-container">
    <h1>Quiz Completed!</h1>
    <p>Your Score: <strong>${score} / ${totalQuestions}</strong></p>
    <p>${getMotivationalMessage(score, totalQuestions)}</p>
    <button onclick="startNewQuiz()" id="restartQuiz">Choose Another Quiz</button>
</div>
`;
    const restartbtn = document.querySelector("#restartQuiz")
    const restartsound = new Audio("click.wav")
    restartbtn.addEventListener("click", () => {
        restartsound.play()
        startNewQuiz()
    })

    const style = document.createElement("style");
    style.textContent = `.result-container {
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    max-width: 500px;
    margin: 50px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.result-container h1 { 
    color: #4CAF50;
    font-size: 2.5rem;
}
.result-container p {
    color: #333;
    font-size: 1.2rem;
    margin: 10px 0;
}
.result-container button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}
.result-container button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}
`;
    document.head.appendChild(style);

}

//appreciation after completion
function getMotivationalMessage(score, totalQuestions) {

    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) {
        return "Outstanding! You got a perfect score!";
    } else if (percentage >= 80) {
        return "Great job! You're doing awesome!";
    } else if (percentage >= 50) {
        return "Good effort! Keep improving!";
    } else {
        return "Don't worry! Try again, you'll get better!";
    }
}

//selecting other language to start the quiz;
function startNewQuiz() {
    window.location.href = '../Quiz_Selection_folder/quiz.html';
}

nextQuestion();




