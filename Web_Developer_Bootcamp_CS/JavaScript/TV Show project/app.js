

// fetch('https://icanhazdadjoke.com/')
//     .then (res => {
//         console.log ("RESPONSE", res)
//         return res.json()
//     })
//     .then(data =>{
//         console.log('Data', data)
//     })
//     .catch(e=>{
//         console.log("Error", e)
//     })

// const fetchBitPrice = async () => {

//     try {
//         const res = await fetch('https://icanhazdadjoke.com/');
//         const data = await res.json;
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// axios.get('https://icanhazdadjoke.com/')
//     .then(response => {
//         console.log(response)
//     })
//     .catch(er => {
//         console.log(err);
//     })

// const fetchBitPricev2 = async () =>{
//     try {
//         const res = await axios.get('https://icanhazdadjoke.com/')
//         console.log(res);
//     } catch (error) {
//         console.log(error)
//     }
// }

// const jokes = document.querySelector('#jokes');


// const getJoke = document.querySelector('button');



// const addNewJoke = async ()=>{
//     try {
//         const getJoke = await getDadJoke();
//         const newLi = document.createElement('LI');
//         newLi.append(getJoke)
//         jokes.append(newLi);
//     } catch (error) {
//         console.log('No Jokes avaliable')
//     }
// }


// const getDadJoke = async ()=> {
//     try {
//         const headers = {headers: {Accept: 'application/json'}}
//         const res = await axios.get('https://icanhazdadjoke.com/', headers);
//         // console.log(res.data.joke);
//         return res.data.joke;
//     } catch (error) {
//         console.log('API problems');
//     }
   
// }
// getJoke.addEventListener('click', addNewJoke);

// const searchForm = document.querySelector('#searchForm')
// searchForm.addEventListener('submit', async function(e) {
//     e.preventDefault();
//     console.dir(searchForm);
//     console.log(searchForm.elements.query.value);
//     const search = searchForm.elements.query.value;
//     try {
//         const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
//         displayImages(res.data);
//         searchForm.elements.query.value='';
//         // console.log(res.data[0].show.image.medium);
//         // const img = document.createElement('img');
//         // img.src = res.data[0].show.image.medium;
//         // document.body.append(img)
//     } catch (error) {
//         console.log(error);
//     }
    
// });


// const displayImages  = (shows) => {
//     for (let show of shows) {
//         if (show.show.image) {
//             const img = document.createElement('img');
//             img.src = show.show.image.medium;
//             document.body.append(img)
//         }
//     }
// }


// revisited 
//promises 

const fakeRequest = (url) => {
    return new  Promise((resolve, reject)=> {
        const rand = Math.random();
        setTimeout(()=>{
            if(rand < 0.7){
                resolve('It worked!!!');
            }
            else {
                reject('It\'s failed!!!');
            }
            
        }, 1000)
    })
} 

fakeRequest('/dogs1')
    .then((data)=>{
        console.log('Your data is here', data);
    })
    .catch ((err)=>{
        console.log(err, "Failed!");
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


// async functions
async function hello () {
    console.log ('Hello');
}

const sing  = async () =>{
    if(true){
        throw new Error('oh no :(');
    }
    else{
        return 'lalalalalaa'
    }
    
}

sing()
.then ((data)=>{
    console.log('Recolved: ', data);
})
.catch((err)=>{
    console.log(err);
})

const login(password, username)