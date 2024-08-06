let testVariable = 128; 
let arrayOfColorChoices = [150, 130, 90, 126, 200];

function setup() {
  createCanvas(400, 400);
  
  let myWonderfulTint = 28; 
  
  background(myWonderfulTint);
  print('myWonderfulTint:', myWonderfulTint);
  print('from setup:', testVariable)
}

function draw() {

  testVariable = random(arrayOfColorChoices);
  
  print('from draw:', testVariable);
  background(testVariable);
}
        