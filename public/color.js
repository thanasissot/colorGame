let title = document.querySelector('#title');
let text = document.querySelector('#text');
let newgame = document.querySelector('#newgame');
let easymode = document.querySelector('#easymode');
let squares = document.querySelectorAll('.square');
let hardmode = document.querySelector('#hardmode');

let startGame = function (index=6) {
// initiate random color squares
  squares.forEach((el,i) =>{
    if(index===3 && i<3 || index === 6){
      el.classList.add('agent');
      el.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
   }
    else if(index === 3){
      el.style.backgroundColor = '#ddd';
    }
  });
  title.style.color = 'black';
  text.textContent = '';
  title.textContent = squares[Math.floor(Math.random()*index)].style.backgroundColor;
  squares.forEach(elem => {
    elem.addEventListener('click', () => {
      if(elem.style.backgroundColor !== title.textContent){
        elem.style.backgroundColor = '#ddd';
        text.textContent = 'Try Again !!!'
      } else {
        text.textContent = 'Correct!!'
        title.style.color = title.textContent;
        squares.forEach(x => {
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
