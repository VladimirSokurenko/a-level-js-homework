function checkInputType(userInput){
    var currentDate = new Date();
    if(typeof userInput == "number"){
       console.log(currentDate.toLocaleString("RU"))
    } else {
      console.log("Invalid data type")
    }
  }
  checkInputType(500)