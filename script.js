//  typing area
 
 const typingText = document.quesrySelector('.typing-text p');
 const input = document.querySelector(".wrapper .input-field");
//  statistics
 const time = document.querySelector(".time span b");
 const mistakes = document.querySelector(".mistake span");
 const wpm = document.quesrySelector(".wpm span");
 const cpm = document.querySelector(".cpm span");
//  button
 const btn = document.querySelector(".button")
//  set value
let timer;
let timeLeft = maxTime;
let maxTime= 60;
let charIndex =0;
let mistake =0;
let isTyping = false;
   

function loadParagraph(){
    
const paragraph=[" Avoid daydreaming about the years to come.","You are the most important person in your whole life.","Always be true to who you are, and ignore what other people have to say about you.","Always be true to who you are, and ignore what other people have to say about you.","Only demonstrate your strength when it’s really required.","Subscribe to Drop X Out"];

}

