function userAuthorization(){
    let usernameValue = prompt("Please provide your username");
    let passwordValue = prompt("Please provide your password");
    if(usernameValue !== null && passwordValue !== null){
       if(usernameValue.length >= 3 && passwordValue >= 6){
        alert('Authoriztion success');
      } else {
        alert('Authorization filed');
      }
    } else {
      alert('Authorization filed');
    }
  }
  userAuthorization();