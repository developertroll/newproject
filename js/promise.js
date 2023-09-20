const helloPromise = new Promise((resolve, reject) => {
    let isSuccess = false;

    if(!isSuccess){
        reject(false);
        return;
    }

    resolve(true);
});

helloPromise.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

const heaven = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let num = 1;
        resolve(num);
    }, 500);
});

heaven
.then((num)=>{
    console.log(num);
    return num+1;
})
.then((num)=>{
    console.log(num);
    return num+10;
})
.then((num)=>{
    console.log(num);
    return num+100;
})
.then((num)=>{
    console.log(num);
    return num+1000;
})
.then((num)=>{
    console.log(num);
})

const example = new Promise((resolve, reject) => {
    let isSuccess = false;

    if(!isSuccess){
        throw new Error('요청에 실패했습니다');
    }
    resolve();
});

example
.then((res)=>{
    console.log(res);
    throw new Error('일부러 에러를 내기');
})
.catch((err)=>{
    console.log(err);
    return '에러를 잡았습니다';
});

function example2(callback){
    console.log(1);
    callback();
}

function getCallback(){
    setTimeout(()=>{
        console.log(2);
    console.log(3);
},500);
}

example2(getCallback);

function example3(){
    console.log(1);
    getPromise().then((res)=>{
        console.log(res);
        console.log(3);
    }
    );
}

function getPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(2);
    },500);
});
}

example3();

// async function asyncFunction(){
//     console.log(1);
//     const result = await getResult();
//     console.log(result);
//     console.log(3);
// }

// function getResult(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(2);
//     },500);
// });
// }

// asyncFunction();

try{
    에러유발;
}catch(err){
    console.log(err);
}

async function asyncFunction() {
    try {
      console.log(1);
      const result = await getResult();
      console.log(result);
      console.log(3);
    } catch (err) {
      console.log(err);
    }
  }
  
  function getResult() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("에러발생 예시"));
      }, 500);
    });
  }
  
  asyncFunction();