# Daily Planner

[My Notes](notes.md)

My start up is a daily planner that let's you cross things off your to-do list easily and share it with friends.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] Proper use of Markdown
- [X] A concise and compelling elevator pitch
- [X] Description of key features
- [X] Description of how you will use each technology
- [X] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever wanted to organize your day and feel great satisfaction in accomplishing tasks? Well look no further than my new website! It's designed to give the user maximum reward when completing things off their to-do list and to prioritize tasks. With more color options than google calendar and better celebrations than google keep, this new website will be your right hand man in no time!

### Design

![Design image](sketch.png)

![Design layout](layout.png)



### Key features

- Organized to-do lists
- Share with friends
- Celebrate productivity!

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - HTML page for log in and for the actual calendar. Calendar will look different if it's the user's personal calendar or if they are viewing a friend's.
- **CSS** - Layout will be clean and users will have many color options for their various tasks.
- **React** - Will use for logging in and showing what other users have changed.
- **Service** - Will use for logging in and updating changes.
- **DB/Login** - Will store data for users and allow for registration and signing in.
- **WebSocket** - When someone makes changes or comments, it will be shown to others

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Server deployed and accessible with custom domain name** - [My server link](https://lizhenshaw.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **HTML pages** - I did complete this part of the deliverable.
- [X] **Proper HTML element usage** - I did complete this part of the deliverable.
- [X] **Links** - I did complete this part of the deliverable.
- [X] **Text** - I did complete this part of the deliverable.
- [X] **3rd party API placeholder** - I did complete this part of the deliverable.
- [X] **Images** - I did complete this part of the deliverable.
- [X] **Login placeholder** - I did complete this part of the deliverable.
- [X] **DB data placeholder** - I did complete this part of the deliverable.
- [X] **WebSocket placeholder** - I did complete this part of the deliverable.


I completed uploading all of these additions to both github and my website.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.


Midterm 1 Review
In the following code, what does the link element do?
    <link> element

    Defines a relationship between the HTML file and an external resource.

Most often used to link external CSS.


In the following code,  what does a div tag do?

    <div> tag

    A generic container for grouping and styling elements.
    It creates a block-level section but has no semantic meaning by itself.

In the following code, what is the difference between the #title and .grid selector?

    #title vs .grid selector

    #title selects one specific element with id="title".

    .grid selects all elements with class="grid".

    #title { color: blue; }  /* One element */
    .grid { display: grid; } /* Many elements */

In the following code, what is the difference between padding and margin?

    Padding: space inside the element, between content and border.

    Margin: space outside the element, between border and neighbors.
    → Think “padding = inner cushion, margin = outer space.”

Given this HTML and this CSS how will the images be displayed using flex?

display: flex; arranges children in a row by default.

    .container {
    display: flex;
    }


    → Images inside will line up horizontally, wrapping if specified (flex-wrap: wrap;).

What does the following padding CSS do?

    div { padding: 10px 20px; }
    → Top/bottom = 10px, left/right = 20px.
    The order follows: top, right, bottom, left (clockwise).

What does the following code using arrow syntax function declaration do?

    const add = (a, b) => a + b;
    → Shorter syntax for defining functions. Implicit return when no {} used.

What does the following code using map with an array output?

    [1, 2, 3].map(x => x * 2) // → [2, 4, 6]
    → Returns a new array with results of the callback applied to each element.

What does the following code output using getElementByID and addEventListener?

    document.getElementById("btn").addEventListener("click", () => {
    console.log("Clicked!");
    });
    → Finds the element with that ID, then runs code when clicked.

What does the following line of Javascript do using a # selector?

    document.querySelector("#title");
    → The # means “select element with this id.”

Which of the following are true? (mark all that are true about the DOM)

    The DOM represents the structure of a web page as a tree.

    You can access and modify elements with JS.

    Changes in the DOM reflect on the page immediately.

By default, the HTML span element has a default CSS display property value of: 

    <span> default display
    Inline element by default (display: inline).

How would you use CSS to change all the div elements to have a background color of red?

    div { background-color: red; }

How would you display an image with a hyperlink in HTML?

    <a href="https://byu.edu">
    <img src="logo.png" alt="BYU logo">
    </a>

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

    Content → Padding → Border → Margin

Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?

    <p><span class="trouble">trouble</span> double</p>

What will the following code output when executed using a for loop and console.log?

    for (let i = 0; i < 3; i++) {
    console.log(i);
    }
    → Outputs:

    Copy code
    0
    1
    2

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

    document.getElementById("byu").style.color = "green";

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

Paragraph → <p>

Ordered list → <ol>

Unordered list → <ul>

H1 → <h1>

H2 → <h2>

H3 → <h3>

How do you declare the document type to be html?

<!DOCTYPE html>

What is valid javascript syntax for if, else, for, while, switch statements?

if (x > 0) { ... } else { ... }
for (let i = 0; i < 5; i++) { ... }
while (x < 5) { ... }
switch (color) {
  case "red": ...
}

What is the correct syntax for creating a javascript object?

let person = { name: "Liz", age: 21 };

Is it possible to add new properties to javascript objects?

    Yes, person.job = "student";

If you want to include JavaScript on an HTML page, which tag do you use?

    <script src="app.js"></script>

    <script>console.log("hi");</script>


Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

    <p id="animal">fish</p>
    <p id="bird">animal</p>

    document.getElementById("bird").innerText = "crow";

Which of the following correctly describes JSON?

    JavaScript Object Notation

    Text-based format for structured data

    Uses { "key": "value" } syntax

    Easy to parse with JSON.parse() and JSON.stringify()

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

    Command	Meaning
    chmod	    change file permissions
    pwd	        print working directory
    cd	        change directory
    ls	        list files
    vim, nano	text editors
    mkdir	    make directory
    mv	        move/rename
    rm	        remove
    man	        manual page
    ssh	        secure remote shell
    ps	        list running processes
    wget	    download file
    sudo	    run as superuser

Which of the following console command creates a remote shell session?

ssh

Which of the following is true when the -la parameter is specified for the ls console command?

    Lists all files (including hidden) with long format (permissions, owners, size, etc.).

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?

    banana.fruit.bozo.click

    TLD: click

    Root domain: bozo.click

    Subdomain: banana.fruit

Is a web certificate is necessary to use HTTPS.

    Yes, a web certificate (SSL/TLS) is necessary.

Can a DNS A record can point to an IP address or another A record.

    Can point to an IP address but not another A record (must use CNAME for that).

Port 443, 80, 22 is reserved for which protocol?

    443 → HTTPS

    80 → HTTP

    22 → SSH

What will the following code using Promises output when executed?

    Promise.resolve("done").then(console.log);
    → Outputs done.
