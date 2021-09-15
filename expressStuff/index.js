//importing whatever we need
const express = require('express');
const app = express()
const path = require('path')

//setting engines and the views folder directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static('public'))

//gets requests and responses from the root url
app.get('/', (req,res) => {
    res.render('home') //rendering the ejs file in the views folder
})

//gets requests and responses from the /r/(variable) url
app.get('/r/:subreddit', (req, res)=> {
    const { subreddit } = req.params
    res.render('subreddit', { subreddit })
})

app.listen(3000, ()=>{ //3000 is the port
    console.log('LISTENING ON PORT 3000')
})