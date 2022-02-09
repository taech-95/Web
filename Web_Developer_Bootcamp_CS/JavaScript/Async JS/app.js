new Promise((resolve, reject)=>{
    resolve();
})

const fakeRequest = (url) => {
    return new Promise((resolve, reject)=>{
        const rand = Math.random();
        setTimeout(()=>{
            if (rand<0.7) {
                resolve();
            }
            else {
                reject();
            }
        },1000)
    })
}

fakeRequest('gooogle.com').then((data)=>{
    console.log("Done with request!");
    console.log("Here you data: ",data);
})

async function hello(){
    console.log('hello')   
}
const sing = async ()=>{
    // throw new Error('Oh no!');
    return 'LA LA LA'
}

sing
    .then((data)=>{
        console.log('Promise Resolved with:', data)
    })
    .catch (err => {
        console.log(err)
    })