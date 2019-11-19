"use strict";

function getCash(ammount){
    let iterations = 0;
    let numOfIterations = ammount / 100;
    if(typeof ammount === 'number' && ammount > 99 || typeof ammount === 'string' && ammount > 99)
    for(iterations; iterations < numOfIterations; iterations++){
      console.log('take your 100 uah');
    } else {
      console.log('please inout valid ammount');
    }
}

getCash(650);