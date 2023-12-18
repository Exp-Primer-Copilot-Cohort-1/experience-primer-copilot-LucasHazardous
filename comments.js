// Create web server
var express = require('express')
var app = express()
var fs = require('fs')
var bodyParser = require('body-parser')

// Use body parser
app.use(bodyParser.urlencoded({ extended: false }))

// Set view engine
app.set('view engine', 'ejs')

// Set static folder
app.use(express.static('public'))

// Get data from json file
var data = fs.readFileSync('comments.json')
var comments = JSON.parse(data)

// Get data from json file
var data = fs.readFileSync('comments.json')
var comments = JSON.parse(data)

// Get home page
app.get('/', function (req, res) {
  res.render('index', { comments: comments })
})

// Post data
app.post('/addComment', function (req, res) {
  var newComment = {
    name: req.body.name,
    comment: req.body.comment
  }
  comments.push(newComment)
  fs.writeFileSync('comments.json', JSON.stringify(comments))
  res.redirect('/')
})

// Listen on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})