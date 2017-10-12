const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('hello');
})

router.get('latest', (req,res)=>{
});

router.get('api/imagesearch/:q', (req,res)=>{
});

module.exports = router;