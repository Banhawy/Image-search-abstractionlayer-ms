const express = require('express');
const router = express.Router();
const imgur = require('../services/imgur');
const History = require('../models/history');

router.get('/', (req,res)=>{
    res.send('hello');
})

router.get('/latest', (req,res)=>{
});

router.get('/api/search/:q', (req,res)=>{
    const query = req.params.q;
    const offset = req.params.offset;
    new History({ term: query }).save();
    imgur.getImage(query, offset).then(results=>{
        res.json(results);
    })
});

module.exports = router;