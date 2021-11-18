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
};

function initBubble() {
  document.getElementsByClassName('bubble')[0].addEventListener('click', onClick);
  document.getElementsByClassName('bubble')[1].addEventListener('click', onClick);
  document.getElementsByClassName('bubble')[2].addEventListener('click', onClick);
}
initBubble();

function onClick(event) {
  var message = event.target.textContent;
  console.log(message);
}


