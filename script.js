//  typing area
 
 const typingText = document.querySelector('.typing-text p');
 const input = document.querySelector(".wrapper .input-field");
//  statistics
 const time = document.querySelector(".time span b");
 const mistakes = document.querySelector(".mistake span");
 const wpm = document.querySelector(".wpm span");
 const cpm = document.querySelector(".cpm span");
//  button
 const btn = document.querySelector("button")
//  set value
let timer;
let maxTime= 60;
let timeLeft = maxTime;

let charIndex =0;
let mistake =0;
let isTyping = false;
   

function loadParagraph(){
    
const paragraph=[" Avoid daydreaming about the years to come.","You are the most important person in your whole life.","Always be true to who you are, and ignore what other people have to say about you.","Always be true to who you are, and ignore what other people have to say about you.","Only demonstrate your strength when it’s really required.","Subscribe to Drop X Out"];
// for getting random paragraphs we use this logic where this logic turns getting the indexes from the paragraph math is an object random() is a function which genrates the random number between 1-5 in decimal math.floor which rounds the number to achivie indexes
const randomIndex = Math.floor(Math.random()*paragraph.length);
// inside the HTML tag will be blanked this function is called later once the button clicked try again
typingText.innerHTML ='';
for (const char of paragraph[randomIndex]){
console.log(char)
typingText.innerHTML+= `<span>${char}</span>`;
}
typingText.querySelectorAll('span')[0].classList.add('active');
document.addEventListener("keydown" ,()=>input.focus());
typingText.addEventListener("click",()=>{
    input.focus()})
}
//handling user input//
function initTyping(){
    const char = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);
    if(charIndex<char.length && timeLeft>0){
        if(!isTyping){
         timer = setInterval(initTime,1000);  
         isTyping = true; //after reaching to this line it will get to know that user is typing so when the user types second letter it goes to the condition again later (!isTyping) becomes (!false)>> true and obviously user will be typing and it doesnt enter the block 

        }
    }
}

loadParagraph()