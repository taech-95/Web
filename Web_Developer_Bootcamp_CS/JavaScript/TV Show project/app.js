

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