function addDashes(str){
  var temp = '';
  for (var i = 1; i < str.length; i++) {
    temp+=str[i-1];
    if(str[i] % 2 === 0 && str[i-1] % 2 === 0){
      temp += '-';
    }
  }
  temp+=str[i-1];
      
  return temp;
}

console.log(addDashes('025468'));