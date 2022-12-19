const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 3000

app.get('/', (req, res) => {
 // res.send('Hello World in Backend')
 res.status(200).send("Hello from Parag");
})

app.get('/utube', (req, res) => {
    const utube = {
        userName: "sawaiparag",
        likes: 100,
    }
    res.status(200).json({utube});
   });

app.get('/utube/twitter', (req, res) =>{
    const twitter = {
        userName: "paragsawaai",
        likes: 10000,
    }
    res.status(200).json({twitter});
})


app.get('/utube/twitter/')

app.get('/parag', (req, res) => {
    res.send("Youtube")
})

app.get('/quallities', (req, res) => {
    res.send("A test Run")
})

app.listen(port,() =>{
    console.log(`I am ${port}`)

})