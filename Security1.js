class Security1 {

constructor(){
    
this.access11 = createInput("Code1")
        
this.button11 = createButton('Check');
        
this.access12 = createInput("Code2")
        
this.button12 = createButton('Check');
        
this.access13 = createInput("Code3")
        
this.button13 = createButton('Check');

this.access14 = createInput("Code4");

this.button14 = createButton('Check');

this.access15 = createInput("Code5");

this.button15 = createButton('Check');

this.score1 = 0;

}
hide() {
security1.button11.hide();
this.access11.hide();
this.button12.hide();
this.access12.hide();
this.button13.hide();
this.access13.hide();  
this.button14.hide();
this.access14.hide();
this.button15.hide();
this.access15.hide();
}

display(){

this.access11.position(60,100);
this.access11.style('background', 'white');  
this.button11.position(60,130);
this.button11.style('background', 'lightgrey');    
this.access12.position(60,230);
this.access12.style('background', 'white');  
this.button12.position(60,260);
this.button12.style('background', 'lightgrey');
this.access13.position(60,330);
this.access13.style('background', 'white');  
this.button13.position(60,360);
this.button13.style('background', 'lightgrey'); 
this.access14.position(60,430);
this.access14.style('background', 'white');  
this.button14.position(60,460);
this.button14.style('background', 'lightgrey'); 
this.access15.position(60,530);
this.access15.style('background', 'white');  
this.button15.position(60,560);
this.button15.style('background', 'lightgrey'); 


this.button11.mousePressed(() => {
if(security1.authenticate(accessCode11,this.access11.value())){
this.button11.hide();
this.access11.hide();
this.score1++;
console.log(this.score1)

}
});

this.button12.mousePressed(() => {
if(security1.authenticate(accessCode12,this.access12.value())){
this.button12.hide();
this.access12.hide();
this.score1++;

console.log(this.score1)

}
});

this.button13.mousePressed(() => {
if(security1.authenticate(accessCode13,this.access13.value())){
this.button13.hide();
this.access13.hide();
this.score1++;
console.log(this.score1)

}
});

this.button14.mousePressed(() => {
if(security1.authenticate(accessCode14,this.access14.value())){
this.button14.hide();
this.access14.hide();
this.score1++;
console.log(this.score1)

}
});

this.button15.mousePressed(() => {
if(security1.authenticate(accessCode15,this.access15.value())){
this.button15.hide();
this.access15.hide();
this.score1++;
console.log(this.score1)
textSize(20);
fill("white");
text("Score1: " +this.score1, 450, 50);
if(this.score1 === 5) {
clear()
                
fill("black")
textSize(40);
text("TREASURE UNLOCKED",250, 200);

gameState = gamewin;
}
else{
gameState = gamelost;
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

