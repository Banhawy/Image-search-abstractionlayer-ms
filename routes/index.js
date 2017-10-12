const express = require('express');
const router = express.Router();
const imgur = require('../services/imgur');

router.get('/', (req,res)=>{
    res.send('hello');
})

router.get('/latest', (req,res)=>{
});

router.get('/api/search/:q', (req,res)=>{
    const query = req.params.q;
    const offset = req.params.offset;
    imgur.getImage(query, offset).then(results=>{
        res.json(results);
    })
});

module.exports = router;