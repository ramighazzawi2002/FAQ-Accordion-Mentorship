# Frontend Mentor FAQ Accordion

This project is a simple FAQ accordion page. It was coded for a challenge by Frontend Mentor.

## Table of Contents

- General Info
- Technologies
- Setup
- Code Examples
- Features
- Status
- Contact

## General Info

This project is a FAQ accordion page. The page displays a list of frequently asked questions. When a question is clicked, the answer to the question is displayed below it.

## Technologies

Project is created with:
- HTML5
- CSS3
- JavaScript

## Setup

To run this project, simply clone the repository and open the `index.html` file in a web browser.

## Code Examples

Here's a snippet from the JavaScript file that handles the accordion functionality:

```javascript
let plus = document.getElementsByClassName("plus");
let minus = document.getElementsByClassName("minus");
let question = document.querySelectorAll(".question a");
let hidden = document.getElementsByClassName("hidden");

for(let i = 0; i<plus.length; i++){
    plus[i].onclick = () =>{
        hidden[i].style.display = "block";
        minus[i].style.display = "block";
        plus[i].style.display = "none";
    }
    minus[i].onclick = () =>{
        hidden[i].style.display = "none";
        minus[i].style.display= "none";
        plus[i].style.display = "block";
    }
    question[i].onclick = () =>{
        if(plus[i].style.display == "block"){
            hidden[i].style.display = "block";
            minus[i].style.display = "block"
            plus[i].style.display = "none"
        }
        else{
            hidden[i].style.display = "none";
            minus[i].style.display= "none";
            plus[i].style.display = "block";
        }
    }
}
```

## Features
- Responsive design
- FAQ accordion functionality

## Status
Project is: _complete_

## Contact
Coded by Rami Ghazzawi.
