const { request, response } = require('express');
const express = require('express');
const app = express();


// console.dir(app);
// app.use((request, response)=>{
//     console.log("we got a new request");
//     // console.dir(request);
//     // response.send('<h1>Here my web-page</h1>');
// })



// cats

app.post('/cats', (request, response) => {
    response.send("This is the post request");
})

app.get('/cats', (request, response)=>{
    console.log("we got a new cat request");
    response.send("Meow!!!")
})

// dogs
app.get('/dogs', (request, response)=>{
    console.log("we got a new dogs request");
    response.send("Bark!!");
})

// home page 

app.get('/', (request, response) => {
    response.send("Home Page");
});

app.get('/r/:subdir', (request, response) => {
    const {subdir} = request.params;
    response.send(`<h1>Browsing the ${subdir} directory </h1>`);
})

app.get('/r/:subdir/:postID', (request, response) => {
    const {subdir, postID} = request.params;
    response.send(`<h1>Viewing post id ${postID} on the ${subdir} directory </h1>`);
})

app.get('/.search', (req, res) => {
    const {q} = req.query;
    if (!q) {
        console.log(`<h1> Nothing found : ${q}</h1>`)
    }
    res.send(`<h1>Here you search for : ${q}</h1>`)
    console.log(req.query);

})

app.get('*', (request, response) => {
    response.send("This page is doesn't exist")
})

app.listen(8080,()=>{
    console.log("App listening on port 3000");
});

