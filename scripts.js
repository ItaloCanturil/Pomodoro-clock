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
    time = countdownElement.innerHTML,
    myIntervalId;
  
$start.addEventListener("click", (e) => {
  time = startingMinutes * 60;
  let thing = {value:time};
  myIntervalId = setInterval(updateCountdown.bind(null, thing), 1000);
  console.log(time, thing)
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
}

function down(){
  startingMinutes -= 1;
  pElement.innerHTML = `${startingMinutes} min`;
  countdownElement.innerHTML = `${startingMinutes}:00`;
}

function updateCountdown(a){
  const minutes = Math.floor(a.value/60);
  let seconds = a.value % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownElement.innerHTML = `${minutes}:${seconds}`;

  a.value--;
  if (a.value <= -1){
    clearInterval(myIntervalId);
    audio.play();
  }
}

function pause(){
  clearInterval(myIntervalId);
}

function reset(){
  clearInterval(myIntervalId);
  let time = startingMinutes * 60;
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
  $pause.style.display = 'none';

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownElement.innerHTML = `${minutes}:${seconds}`;
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