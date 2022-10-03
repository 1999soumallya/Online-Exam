const mongoose = require('mongoose');
const {Schema} = mongoose;

const userForms = new Schema({
    email: {
        type: String,
        required: true
    },
    exam: {
        type: Array
    }
});

const Forms = mongoose.model('form', userForms);

module.exports = Forms;