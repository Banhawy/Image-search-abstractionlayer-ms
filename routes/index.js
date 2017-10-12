const express = require('express');
const router = express.Router();
const imgur = require('../services/imgur');
const History = require('../models/history');

router.use(express.static('public'));

router.get('/latest', (req,res)=>{
    //Get the last 10 queries and sort on date in descending order
    History.find({}, 'term when -_id').sort('-when').limit(10).then(results=>{
        res.json(results);
    });
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