
// async & await
// clear style of using promise :)

// 1. async: Promise 객체를 (만드는) 반환하는 함수임을 알려준다.
async function fetchUser() {
    // do network request in 10sec...
    /*
    return new Promise((resolve, reject) => {
        resolve('ellie')
    })
    */
   return 'ellie'
}

const user = fetchUser();
console.log(user);


// 2. await: async 함수 혹은 Promise 객체를 반환하는 함수에 사용 가능하다. await 키워드를 붙여주면 Promise 객체 내부 값을 반환한다.
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1000);
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

async function pickFruit(){
    try{
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple}, ${banana}`;
    }catch(error){
        console.log(error)
    }
    /*
    위의 예제에서 apple 과 banana 는 서로 연관이 없기 때문에 효율을 위해 병렬 처리가 필요하다.
    */
}


// 3. userful Promise APIs
// getApple 과 getBanana 는 병렬 처리가 이루어진다.
//console.clear()
function pickAllFruit(){
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(" , "));
}
console.clear()
pickAllFruit().then(console.log);