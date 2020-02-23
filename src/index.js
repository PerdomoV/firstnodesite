console.log('escuchando')

const express=require('express');
const router = express.Router();
const path = require('path');


var app = express();
// app.use(router)
app.set('port',3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');
// router.get('/', (quest, res)=>{
//                             res.render('index.html', {title: 'Primer website'});
//                           })
//
// router.get('/contact', (req,res)=>{
//                             res.render('contact.html', {title: 'Contact page'});
//                           })


app.use(require('./routes'));


app.listen(app.get('port'), ()=>{console.log(`server on port ${app.get('port')}`)});
