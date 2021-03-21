//problem 1 of codekata solved in  time

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 
 var N1= parseFloat(userInput[0].split(" "));
 var N2= parseFloat(userInput[1].split(" "));
 var N3= parseFloat(userInput[2].split(" "));
  var largest=0;
  if (N1>=N2 && N1>=N3)
     largest=N1
  else if (N2>=N1 && N2>=N3)
      largest=N2;
  else
      largest=N3;

console.log(largest);

});
 
