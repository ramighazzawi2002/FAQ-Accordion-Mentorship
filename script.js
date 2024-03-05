let plus = document.getElementsByClassName("plus");
let minus = document.getElementsByClassName("minus");
let question = document.querySelectorAll(".question a");
let hidden = document.getElementsByClassName("hidden");

for(let i = 0; i<=plus.length; i++){
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