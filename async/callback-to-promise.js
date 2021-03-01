
// Callback Hell to Promise Chaining

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}
  
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');

/*
userStorage.loginUser(id, password)
    .then(user => userStorage.getRoles(user))
    .then(result => console.log(result))
    .catch(error => console.log(error))
*/

async function login(){
    try{
        const user = await userStorage.loginUser(id, password);
        const result = await userStorage.getRoles(user);
        console.log(result)  
    }catch(error){
        console.log(error)
    }  
}

console.clear()
login()