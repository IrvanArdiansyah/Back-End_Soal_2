const router = require('express').Router();
const mongoose = require('mongoose');
const Komputer = require('../models/komputer');
let url = 'mongodb://localhost:27017/dataCPU'
let os = require('os')
let namaCPU = os.hostname();
let osTipe = os.type();
let osPlatform = os.platform();
let osRilis = os.release();
let ramSisa = os.freemem();
let ramTotal = os.totalmem();

router.post('/data', (req, res) => {
    mongoose.connect(url, () => {
        console.log('Terhubung ke MongoDB!')
        new Komputer({
            namacpu: namaCPU,
            tipe: osTipe,
            platform: osPlatform,
            rilis: osRilis,
            sisaram: ramSisa,
            totalram: ramTotal
        }).save().then((hasil) => {
            console.log(hasil)
            res.send(hasil)
            mongoose.disconnect()
        })
    })
})

router.get('/data', (req, res) => {
    mongoose.connect(url, () => {
        console.log('Terhubung ke MongoDB!')
        Komputer.find((error, hasil) => {
            console.log(hasil)
            res.send(hasil)
            mongoose.disconnect()
        })
    })
})


module.exports = router;