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

    const login = async (password, username) => {
        if (!username || !password ) {
            throw 'Missing Credentials';
        }
        if (password === 'corgifeeatarecute') {
            return ' Welcome';
        }
        throw 'Invalid Password';
    } 

    login('asdasdsadas')
    .then((msg)=>{
        console.log('Correct ', msg)
    })
    .catch((err)=>{
        console.log(err)
    })
    const delayedColor = ((color, delay) =>{
        return new Promise((resole, reject) => {
            setTimeout(()=>{
                document.body.style.backgroundColor = color;
            }, delay)
        });
    });
    
    
    delayedColor('red', 2000)
    .then (()=>{
        delayedColor('orange', 2000)
    })
    .then (()=>{
        delayedColor('blue', 2000)
    })
    .then (()=>{
        delayedColor('vindigo', 2000)
    })
    .then (()=>{
        delayedColor('green', 2000)
    })

    async function rainbow(){
        await delayedColor('red', 1000);
        await delayedColor('green', 1000);
        await delayedColor('blue', 1000);
        await delayedColor('vendigo', 1000);
        await delayedColor('black', 1000);
        await delayedColor('orange', 1000);
    }

    async function  showRaibow() {
        await rainbow();
        console.log("All done")
    }