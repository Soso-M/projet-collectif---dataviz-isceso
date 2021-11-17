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
  


  