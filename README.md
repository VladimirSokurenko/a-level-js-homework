Homework 2

task 1

```js
var letter = [];
var text = "Backend As A Service";

letter = text.split(" ")

for(var iterator = 0; iterator < letter.length; iterator++){
    letter[iterator] = letter[iterator].charAt(0);
}

console.log(letter)
```

task 2

```js
function checkInputType(userInput){
    var currentDate = new Date();
    if(typeof userInput == "number"){
       console.log(currentDate.toLocaleString("RU"))
    } else {
      console.log("Invalid data type")
    }
  }
  checkInputType(500)
```  

Homework 3

```
function showArguments () {
    console.log(arguments.callee.name)
    for ( var arg of arguments ) {
        console.log(arg)
    }
}

showArguments (10, false, "google")
```
  
