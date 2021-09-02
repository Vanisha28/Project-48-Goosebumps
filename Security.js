class Security {

constructor(){
 
this.access1 = createInput("Code1")
       
this.button1 = createButton('Check');
       
this.access2 = createInput("Code2")
       
this.button2 = createButton('Check');
       
this.access3 = createInput("Code3")
        
this.button3 = createButton('Check');

this.access4 = createInput("Code4");

this.button4 = createButton('Check');

this.access5 = createInput("Code5");

this.button5 = createButton('Check');

this.access6 = createInput("Code6");

this.button6 = createButton('Check');

this.score = 0;

}
hide() {
security.button1.hide();
this.access1.hide();
this.button2.hide();
this.access2.hide();
this.button3.hide();
this.access3.hide();  
this.button3.hide();
this.access4.hide();
this.button4.hide();
this.access5.hide();
this.button5.hide();
this.access6.hide();
this.button6.hide();
}

display(){

this.access1.position(30,90);
this.access1.style('background', 'white');  
this.button1.position(30,120);
this.button1.style('background', 'lightgrey');    
this.access2.position(450,90);
this.access2.style('background', 'white');  
this.button2.position(450,120);
this.button2.style('background', 'lightgrey');
this.access3.position(30,290);
this.access3.style('background', 'white');  
this.button3.position(30,320);
this.button3.style('background', 'lightgrey'); 
this.access4.position(450,290);
this.access4.style('background', 'white');  
this.button4.position(450,320);
this.button4.style('background', 'lightgrey'); 
this.access5.position(30,490);
this.access5.style('background', 'white');  
this.button5.position(30,520);
this.button5.style('background', 'lightgrey'); 
this.access6.position(450,490);
this.access6.style('background', 'white');  
this.button6.position(450,520);
this.button6.style('background', 'lightgrey'); 

this.button1.mousePressed(() => {
if(security.authenticate(accessCode1,this.access1.value())){
this.button1.hide();
this.access1.hide();
this.score++;
console.log(this.score)

}
});

this.button2.mousePressed(() => {
if(security.authenticate(accessCode2,this.access2.value())){
this.button2.hide();
this.access2.hide();
this.score++;

console.log(this.score)

}
});

this.button3.mousePressed(() => {
if(security.authenticate(accessCode3,this.access3.value())){
this.button3.hide();
this.access3.hide();
this.score++;
console.log(this.score)

}
});

this.button4.mousePressed(() => {
if(security.authenticate(accessCode4,this.access4.value())){
this.button4.hide();
this.access4.hide();
this.score++;
console.log(this.score)

}
});

this.button5.mousePressed(() => {
if(security.authenticate(accessCode5,this.access5.value())){
this.button5.hide();
this.access5.hide();
this.score++;
console.log(this.score)

}
});


this.button6.mousePressed(() => {
if(security.authenticate(accessCode6,this.access6.value())){
this.button6.hide();
this.access6.hide();
this.score++;
console.log(this.score)



textSize(20);
fill("white");
text("Score: " +this.score, 450, 50);
if(this.score === 6) {
clear()
                
fill("black")
textSize(40);
text("TREASURE UNLOCKED",250, 200);

gameState = level1win;
}
else{
gameState = level1end;
}
}
    
});
    
    
}


authenticate(actualCode,enteredCode){
textSize(50);
fill("black");
// text(code,300,300)
if(actualCode === enteredCode.toUpperCase()) 
return true
else
return false
}


}
