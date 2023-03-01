const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// for dynamic question
const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} is multiply by ${num2}?`

// for logic of answer
const correctAns = num1 * num2;

//for input 
const inputEl = document.getElementById("input");

//for score
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
};

scoreEl.innerText = `Score: ${score}`



//for form
const formEl = document.getElementById("form");
formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns ===correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
})

function updateLocalStorage (){
    localStorage.setItem("score",JSON.stringify(score));

}