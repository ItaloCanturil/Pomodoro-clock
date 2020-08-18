const $start = document.getElementById('start'),
      $pause = document.getElementById('pause'),
      $reset = document.getElementById('reset'),
      $arrowUp = document.querySelector('.arrow-up'),
      $arrowDown = document.querySelector('.arrow-down'),
      $title = document.querySelector('.conteiner > h2')
      countdownElement = document.getElementById('countdown'),
      pElement = document.querySelector('.p-element'),
      audio = document.querySelector('audio');

let startingMinutes = 25,
    time = parseInt(countdownElement.innerHTML) * 60,
    myIntervalId;
    
$start.addEventListener("click", (e) => {
  myIntervalId = setInterval(updateCountdown, 1000);
  $pause.style.display = 'block';
});

$pause.addEventListener("click", (e) =>{
  audio.pause();
  $pause.style.display = 'none';
  pause();
});

$reset.addEventListener("click", (e) =>{
  reset();
});

$arrowUp.addEventListener("click", (e) => {
  up();
});

$arrowDown.addEventListener("click", (e) => {
  down();
});


function up(){
  startingMinutes += 1;
  pElement.innerHTML = `${startingMinutes} min`;
  countdownElement.innerHTML = `${startingMinutes}:00`;
  time = startingMinutes * 60;
}

function down(){
  startingMinutes -= 1;
  pElement.innerHTML = `${startingMinutes} min`;
  countdownElement.innerHTML = `${startingMinutes}:00`;
  time = startingMinutes * 60;
}

function updateCountdown(){
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownElement.innerHTML = `${minutes}:${seconds}`;

  time--;
  if (time <= -1){
    clearInterval(myIntervalId);
    audio.play();
  }

  console.log(time)
}

function pause(){
  clearInterval(myIntervalId);
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
}

function reset(){
  clearInterval(myIntervalId);
  let calc = startingMinutes * 60;
  time = calc;
  const minutes = Math.floor(calc/60);
  let seconds = calc % 60;
  $pause.style.display = 'none';

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownElement.innerHTML = `${minutes}:${seconds}`;

  console.log(time)
}

// function breakLength(){
//   $title.innerHTML = "Break";
//   breakMinutes = 5; 
//   let time = breakMinutes * 60;
//   const minutes = Math.floor(time/60);
//   let seconds = time % 60;

//   seconds = seconds < 10 ? '0' + seconds : seconds;

//   countdownElement.innerHTML = `${minutes}:${seconds}`;

//   time--;

//   if(time <= 1){
//     audio.play()
//     reset();
//   }
// }