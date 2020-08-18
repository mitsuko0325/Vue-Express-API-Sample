const express = require('express')
const bodyParser = require('body-parser')

//corsポリシー対策
const cors = require('cors')

const app = express()

// app.use(bodyParser.json())
// 下のbodyParserはurlencodedがbest practiceぽい
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.get('/test',(req, res)=>{
    console.log('this is get /test')
    res.send({
        msg: 'Hello  from backend/index.js'
    })
})

app.post('/test', (req, res)=>{
    console.log('this is post /test')
    console.log(req.body)
    
    if (req.body.text) {
        res.send({
            message: req.body.text
        })
    } else{
        res.send({
            message: 'this may be from python'
        })
    }
    
})

app.get('/test/sample', (req,res)=>{
    console.log('this is get /test/sample')
    res.send({
        msg: 'this is inde.js test/sample'
    })
})

app.post('/test/sample', (req,res)=>{
    console.log('this is post /test/sample')
    res.send({
        message: req.body.text + 'hahahahaha'
    })
})

app.listen(process.env.port || 3000)