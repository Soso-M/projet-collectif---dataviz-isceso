const port = 3000;

const express = require('express');
const app = express();
const router = express.Router();
const translate = require('translate-google')
const tranObj = {
    text: 'Un chat bleu'
}

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public/'));
app.use(router);

app.get('/', (req, res) => {
    res.render('menu')
})

app.get('/:lang', async function (req, res) {
    console.log(req.params);
    const language = req.params.lang;
    translate(tranObj, {from: 'fr', to:`${language}`}).then(trad => {
        console.log(trad);
        res.render('page', {traduction: trad.text})
    }).catch(err => {
        console.error(err)
    });
    ;    
});

app.listen(port, () =>  {
    console.log('Cette app écoute le port : ' + port);
});