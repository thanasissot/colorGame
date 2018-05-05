let title = document.querySelector('#title');
let text = document.querySelector('#text');
let newgame = document.querySelector('#newgame');
let easymode = document.querySelector('#easymode');
let md3 = document.querySelectorAll('.col-md-3');
let hardmode = document.querySelector('#hardmode');

let startGame = function (index=6) {

  md3.forEach((el,i) =>{
    if(index===3 && i<3 || index === 6){
      el.classList.add('agent');
      el.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
   }
    else if(index === 3){
      el.style.backgroundColor = '#444';
    }
  });
  title.textContent = md3[Math.floor(Math.random()*index)].style.backgroundColor;
  md3.forEach(elem => {
    elem.addEventListener('click', () => {
      if(elem.style.backgroundColor !== title.textContent){
        elem.style.backgroundColor = '#444';
        text.textContent = 'Try Again !!!'
      } else {
        text.textContent = 'Correct!!'
        title.style.color = title.textContent;
        md3.forEach(x => {
          x.style.backgroundColor = title.textContent;
        });
      }
    });
  })

}

startGame();

easymode.addEventListener('click', () => startGame(3));

hardmode.addEventListener('click', () => startGame());

newgame.addEventListener('click', () => startGame());

// `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
