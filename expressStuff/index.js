//importing whatever we need
const express = require('express');
const app = express()
const path = require('path')
const redditData = require('./data.json')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')

//setting engines and the views folder directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static('public')) //static fo;es folder name
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(cookieParser())


//gets requests and responses from the root url
app.get('/', (req,res) => {
    const { username } = req.cookies
    res.render('home', {username}) //rendering the ejs file in the views folder
})

//gets requests and responses from the /r/(variable) url
app.get('/r/:subreddit', (req, res)=> {
    const { subreddit } = req.params
    const { username } = req.cookies
    if (redditData[subreddit]) {
        res.render('subreddit', { subreddit, subredditData : redditData[subreddit], username })
    } else {
        res.send('Subreddit not found')
    }
})


app.post('/r/:subreddit/:postID/makecomment', (req, res) => {
    const { comment } = req.body
    const { subreddit, postID } = req.params

    for (let posts of redditData[subreddit].posts) {
        if (posts.id == postID) {
            posts.comment.push(comment)
        }
    }
    
    res.redirect(`/r/${subreddit}`) 
})



app.get('/r/:subreddit/:postID/:commentID/edit', (req,res) => {
    const { subreddit, postID, commentID } = req.params
    const oldComment = redditData[subreddit]["posts"][postID]["comment"][commentID]
    res.render('edit', { subreddit, postID, commentID, oldComment })
})



app.patch('/r/:subreddit/:postID/:commentID/patch', (req,res) => {
    const { subreddit, postID, commentID } = req.params
    const { newComment } = req.body
    redditData[subreddit]["posts"][postID]["comment"][commentID] = newComment
    res.redirect(`/r/${subreddit}`)
})



app.post('/setUserName', (req,res) => {
    const { username } = req.body
    res.cookie('username', username)
    res.redirect('/')
})



app.listen(3000, ()=>{ //3000 is the port
    console.log('LISTENING ON PORT 3000')
})