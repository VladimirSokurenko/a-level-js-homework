var letter = [];
var text = "Backend As A Service";

letter = text.split(" ")

for(var iterator = 0; iterator < letter.length; iterator++){
    letter[iterator] = letter[iterator].charAt(0);
}

console.log(letter)