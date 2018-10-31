const express = require('express');
const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/chatting'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})
const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true},
    age: { type: Number, require: true}
}))
User.create({
    user: '李四',
    age: '16'
}, function (err, doc) {
    if(!err) {
        console.log(doc);
    }
    else {
        console.log(err)
    }
    
})
const app = express();

app.get('/', function (req, res) {
    res.send('hello world')
    
})
app.get('/data', function (req, res) {
    res.json({
        name: '张三',
        age: '18'
    })
    
})
app.listen(9093, function() {
    console.log('node app start port 9093')
})