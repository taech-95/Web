const express = require('express');
const path = require('path');
const app = express();
const redditData = require('./data.json');


app.use(express.static(path.join(__dirname, '/public')));
// console.log(redditData);

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('home.ejs');
});

app.get('/rand', (req, res) =>{
    const number = Math.floor(Math.random() * 10)+1 ;
    res.render('random.ejs', {rand:number, name :'Random'});
});


app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Kesia', 'Dejra', 'Markiz'
    ]
    res.render('cats.ejs', {cats:cats});
});

app.get('/r/:subreddit', (req, res) =>{
    const{subreddit} = req.params;
    const data = redditData[subreddit];
    if(data){
        res.render('subreddit.ejs', {...data});
    } else {
        res.render('notfound', {subreddit})
    }

});


app.listen(8080, () => {
    console.log('listening on port 8080')
});