const express = require('express');
const app = express();
const cors = require('cors')
const mongo = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/dataCPU'
const post = require('./route/route')
app.use(cors())
app.use(post)

mongo.connect(url,(error,client)=>{
    console.log('terhubung ke mongoDB')
    client.close()
})

app.get('/', (req, res)=>{
    res.send('Selamat Datang')
})

app.listen(3900, ()=>{
    console.log('server aktif di port 3900')
})