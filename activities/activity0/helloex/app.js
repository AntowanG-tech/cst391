// retrieve the express library that was configured in the package.json file
const express = require('express')
// set up as an express application
const app = express()
// set the export port as 3000
const port = 3000

// app.set('views', './views')
// app.set('view engine', 'pug')
// app.use(express.static('public'))

// Route at Root '/' that returns a Test Text message
app.get('/', (req, res) => res.send('Hello Express!'))
// Route at '/hello' that returns a Test View
//app.get('/hello', function (_req, res) 
//{
//    res.render('index', { title: 'Hello World', message: 'Hello world!' })
//})

// Start the Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
