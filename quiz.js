const quiz = [

{
question:"What are Siri's favorite colors?",
answers:["Blue & Pink","Green & Black","Red & Yellow","Purple & Orange"],
correct:1
},

{
question:"When is Siri's birthday?",
answers:[
"August 26",
"July 26",
"August 16",
"September 26"
],
correct:0
},

{
question:"How did we become friends?",
answers:[
"School",
"College",
"Online",
"Office"
],
correct:2
},

{
question:"What does a true friendship need most?",
answers:[
"Money",
"Distance",
"Trust",
"Popularity"
],
correct:2
},

{
question:"What does Siri love spending her free time on?",
answers:[
"Sports & News",
"K-Dramas, Anime & BTS",
"Cooking Shows",
"Gardening"
],
correct:1
},

{
question:"What should never change?",
answers:[
"Our Friendship 💚",
"My Phone",
"My Laptop",
"My Shoes"
],
correct:0
}

];

let current = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){

const q = quiz[current];

question.innerText = q.question;

answers.innerHTML = "";

q.answers.forEach((answer,index)=>{

const btn = document.createElement("button");

btn.className = "answer-btn";

btn.innerText = answer;

btn.onclick = ()=>{

document.querySelectorAll(".answer-btn").forEach(b=>{

b.disabled = true;

});

if(index===q.correct){

btn.style.background="#4CAF50";

score++;

}else{

btn.style.background="#d32f2f";

}

};

answers.appendChild(btn);

});

}

nextBtn.onclick=()=>{

current++;

if(current<quiz.length){

loadQuestion();

}else{

document.querySelector(".quiz-box").style.display="none";

document.getElementById("result").classList.remove("hidden");

document.getElementById("scoreText").innerHTML=

"You scored <b>"+score+" / "+quiz.length+"</b><br><br>You're an amazing best friend! 💚";

}

};

loadQuestion();
// ------------------------------
// Floating teddy bears & hearts (matches main site)
// ------------------------------

const particleLayer = document.getElementById("particles") || document.body;
const floatIcons = ["💚", "🧸", "✨"];

function createFloatingIcon() {
    const el = document.createElement("div");
    el.innerHTML = floatIcons[Math.floor(Math.random() * floatIcons.length)];
    el.style.position = "absolute";
    el.style.left = Math.random() * 100 + "vw";
    el.style.bottom = "-10vh";
    el.style.fontSize = (20 + Math.random() * 24) + "px";
    el.style.animation = `floatUp ${8 + Math.random() * 6}s linear forwards`;
    particleLayer.appendChild(el);
    setTimeout(() => el.remove(), 14000);
}

setInterval(createFloatingIcon, 1200);
createFloatingIcon();
