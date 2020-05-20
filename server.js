const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

requireDir("./src/models");

const Product = mongoose.model('Product');

const app = express();

app.get('/', (req,res) =>{
    Product.create({
        title: 'React Native',
        description: 'Build native app with ...',
        url: 'http://github.com/facebook/react-native'
    });

    return res.send('Hello Worl')
});

app.listen(3001);
