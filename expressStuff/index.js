const express = require('express');
const app = express()
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req,res) => {
    res.render('home')
})

app.get('/r/:subreddit', (req, res)=> {
    const { subreddit } = req.params
    res.render('subreddit', { subreddit })
})

app.listen(3000, ()=>{ //3000 is the port
    console.log('LISTENING ON PORT 3000')
})