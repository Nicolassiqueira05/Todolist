const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/login', (req, res) =>{
    const email = req.query.email
    const password = req.query.password
    if (email == 'teste' && password == '123') {
        res.send('true')
    }else{
        res.send('false')
    }
})

app.listen(2000, () => {
    console.log('Working')
})