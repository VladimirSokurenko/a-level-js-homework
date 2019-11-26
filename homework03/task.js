function usersCollector(){
    let users = [];
    let count = parseInt(prompt('How many users?'));
    let i = 0;
        let capitalizedFirstName ='';
        let capitalizedLastName ='';
        for(i; i < count; i++){
            capitalizedFirstName = prompt('give me your first name');
            capitalizedLastName = prompt('give me your last name');
            users.push({
                first_name: capitalizedFirstName.charAt(0).toUpperCase() + capitalizedFirstName.slice(1),
                last_name: capitalizedLastName.charAt(0).toUpperCase() + capitalizedLastName.slice(1),
                birthday: prompt('give me your date of birth'),
            })
            if(users[i].first_name.charAt(0) === 'E' || users[i].last_name.charAt(0) === 'E'){
                console.log(users[i]);
            }
        }
        return users;
    }
    
usersCollector()
    