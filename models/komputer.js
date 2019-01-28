const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema ({
    namacpu: String,
    tipe: String,
    plaform: String,
    rilis: String,
    ramSisa: Number,
    ramTotal: Number
});

const Komputer = mongoose.model('data', dataSchema);
module.exports = Komputer;