var myColor = ["Red", "Green", "White", "Black"];


var finalStr = "";
for(i = 0; 
    i < myColor.length; 
    i++){
  finalStr+= myColor[i];
  if(i < myColor.length - 1){
    finalStr += " + ";
  }
}

console.log("FINAL STRING IS " + finalStr);