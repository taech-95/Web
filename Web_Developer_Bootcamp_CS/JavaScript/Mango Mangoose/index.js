const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviedb', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("CONNECTED!!!")
    })
    .catch(err =>{
        console.log("ERROR!!!")
        console.log(err)
    })
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open',function(){
//     console.log("connection open");
// });


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});
const Movie = mongoose.model('Movie', movieSchema);
const amadeus = new Movie({ title: "Amodeus", year: 1996, score: 92, rating: 'R'});
Movie.insertMany([
    { title: "Amelie", year: 1996, score: 92, rating: 'R'},
    { title: "Alie", year: 1996, score: 81, rating: 'R'},
    { title: "LOTR", year: 1999, score: 99, rating: 'R'},
    { title: "Hobbit", year: 2012, score: 91, rating: 'R'},
    { title: "Star Wars", year: 2001, score: 87, rating: 'R'}
])
    .then(data =>{
        console.log('It worked');
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema);
const bike = new Product({name: 'Mountain Bike', price: 599});
bike.save()
    .then(data => {
        console.log('It worked');
        console.log(data);
    })
    .catch(err=>{
        console.log(error);
    })