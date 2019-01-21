const express = require('express')
const app = express()
const port = 5000
const bodyParser=require('body-parser')
var cors = require('cors')


app.use(bodyParser.json())
app.use(cors())

var courses=[{"id":1,"first_name":"martin","last_name":"Hackett","email":"fhackett0@networksolutions.com","gender":"Male"},
{"id":2,"first_name":"jonas","last_name":"Lombardo","email":"blombardo1@creativecommons.org","gender":"Male"},
{"id":3,"first_name":"Annie","last_name":"Jonas","email":"ejonas2@php.net","gender":"Female"},
{"id":4,"first_name":"Wayne","last_name":"Glasner","email":"wglasner3@bbb.org","gender":"Male"},
{"id":5,"first_name":"Eva","last_name":"Creagh","email":"ncreagh4@ocn.ne.jp","gender":"Male"},
{"id":6,"first_name":"Evangelia","last_name":"Davidovic","email":"edavidovic9@who.int","gender":"Female"},
{
    "id": 7,
    "first_name": "Syman",
    "last_name": "Bodicum",
    "email": "sbodicum0@redcross.org",
    "gender": "Male"}
]
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/courses', (req, res) =>{ 

res.json(courses);
})
app.post('/courses', (req, res) =>{ 
    var course=req.body;
    courses.push(course)
    res.json(courses);
    })

app.delete('/courses/:key', (req, res) =>{ 
    var key=req.params.key;
    console.log(key);
    courses.splice(key,1);
    res.json(courses);
    })

app.put('/courses/:key',(req,res)=> {
    var key=req.params.key;
    console.log(key);
    var course=req.body;
    console.log(course);
    res.json(courses);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))