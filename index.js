//mise en place des constantes pour le routeur
const port = 3000;
const express = require('express');
const app = express();
const router = express.Router();

// require des datas et de l'api
const translate = require('translate-google');
const data = require('./data.json');

// récupération de l'heure actuelle 
function getHourForData() {
    const date = new Date();
    const heure = date.getHours();
    return heure;
}
getHourForData();

// constitution d'un objet à passer à la fonction de traduction
const tranObj = {
    text: data[getHourForData()],
    fr : data[getHourForData()]
}

//initialisation seeveur express
// moteur de vues
app.set('view engine', 'ejs');
// où on stocke les vues
app.set('views', './views');
// où on stocke les fichiers publics (css et images)
app.use(express.static('./public/'));
//lancement du routeur
app.use(router);

// que récupère t on à l'adresse URL localhost:3000/
app.get('/', (req, res) => {
    res.render('menu')
})

// que récupère t on à l'adresse URL localhost:3000/clock
app.get('/clock', (req, res) => {
    res.render('clock')
})

//que récupère t on à l'adresse localhost:3000/:lang
app.get('/:lang', async function (req, res) {
    console.log(req.params);
    const language = req.params.lang;
    translate(tranObj, {from: 'fr', to:`${language}`}).then(trad => {
        console.log(trad);
        res.render('page', {traduction: trad.text, vf: tranObj.fr})
    }).catch(err => {
        console.error(err)
    });
    ;    
});

// on défini le port d'écoute de l'appli
app.listen(port, () =>  {
    console.log('Cette app écoute le port : ' + port);
});