axios.get("https://swapi.dev/api/people/1")
.then (res =>{
    console.log("Response", res)
});

const getStarWarsPerson = async (id) =>{
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    }
    catch (err){
        console.log(err);
    }
};

// getStarWarsPerson(5);
const jokes = document.querySelector('#jokes');
const btn = document.querySelector('#dadJoke');


const addNewJoke = async () =>{
    const jokeText = await getDadJoke();
    console.log(jokeText);
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
};

const getDadJoke = async () =>{
    try{
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        // console.log(res.data.joke);
        return res.data.joke;
    }
    catch(e){
        return 'no jokes available';
    }
}

btn.addEventListener('click', addNewJoke)

// getDadJoke();

const form = document.querySelector('#form');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    console.log('Submitted!');
    const query = form.elements.query.value;
    const config = { params: {q: query}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    console.log(res.data);
    displayImages(res.data);
    form.elements.query.value = '';
});

const displayImages = async (shows) =>{
    for(let result of shows){
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
