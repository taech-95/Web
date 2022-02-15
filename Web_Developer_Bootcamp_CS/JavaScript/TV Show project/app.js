

fetch('https://icanhazdadjoke.com/')
    .then (res => {
        console.log ("RESPONSE", res)
        return res.json()
    })
    .then(data =>{
        console.log('Data', data)
    })
    .catch(e=>{
        console.log("Error", e)
    })

const fetchBitPrice = async () => {

    try {
        const res = await fetch('https://icanhazdadjoke.com/');
        const data = await res.json;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}

axios.get('https://icanhazdadjoke.com/')
    .then(response => {
        console.log(response)
    })
    .catch(er => {
        console.log(err);
    })

const fetchBitPricev2 = async () =>{
    try {
        const res = await axios.get('https://icanhazdadjoke.com/')
        console.log(res);
    } catch (error) {
        console.log(error)
    }
}

const jokes = document.querySelector('#jokes');


const getJoke = document.querySelector('button');



const addNewJoke = async ()=>{
    try {
        const getJoke = await getDadJoke();
        const newLi = document.createElement('LI');
        newLi.append(getJoke)
        jokes.append(newLi);
    } catch (error) {
        console.log('No Jokes avaliable')
    }
}


const getDadJoke = async ()=> {
    try {
        const headers = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', headers);
        // console.log(res.data.joke);
        return res.data.joke;
    } catch (error) {
        console.log('API problems');
    }
   
}
getJoke.addEventListener('click', addNewJoke);

const searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    console.dir(searchForm);
    console.log(searchForm.elements.query.value);
    const search = searchForm.elements.query.value;
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
        displayImages(res.data);
        searchForm.elements.query.value='';
        // console.log(res.data[0].show.image.medium);
        // const img = document.createElement('img');
        // img.src = res.data[0].show.image.medium;
        // document.body.append(img)
    } catch (error) {
        console.log(error);
    }
    
});


const displayImages  = (shows) => {
    for (let show of shows) {
        if (show.show.image) {
            const img = document.createElement('img');
            img.src = show.show.image.medium;
            document.body.append(img)
        }
    }
}