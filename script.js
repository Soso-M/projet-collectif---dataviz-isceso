var id = null;
function myMove() {
  var elem = document.getElementById("bubbleTrio");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos = pos + 0.5; 
      elem.style.top = pos + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
<<<<<<< HEAD
};

const translate = require('translate-google')
const tranObj = 'Je suis une développeuse'

translate(tranObj, {from: 'fr', to:'ja'}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})
//afficher l'heure en temps reel 
=======
};
>>>>>>> b8f1cd90ee6845b8508a259956f35ddf3108e91e
