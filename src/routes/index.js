const express = require('express')
const router = express.Router();

router.get('/', (quest, res)=>{
                            res.render('index.html', {title: 'Primer website'});
                          })

router.get('/contact', (req,res)=>{
                            res.render('contact.html', {title: 'Contact page'});
                          })

module.exports = router;
