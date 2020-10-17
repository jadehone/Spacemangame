window.onload = alien();

function alien(){
  let alien = document.getElementsByClassName("alien");
  for (let i = 0; i < alien.length; i++){
    alien[i].onclick = removeAlien;
      }
};

function removeAlien(eventObj){
let alien = eventObj.target;
alien.style.visibility = "hidden";
}

let image = document.getElementsByClassName("alien");
    for(let i=0;i<image.length;i++) {
        image[i].addEventListener("click", score);
    }

let counter = 0;

function score() {
  counter ++;
  document.getElementById("score").innerHTML = "Aliens Cleared: " + counter + " out of 12";
  if ( counter == image.length){
  document.getElementById("message").innerHTML = "You saved the spaceman!";
  reset();
  }
     }

let time = 0;
let running = 0;

function start(){
    if (running == 0){
    running = 1;
    addSeconds();
    enablePointer();
  } else {
    running = 0;
  }
};

function reset(){
	running = 0;
	time = 0;
	document.getElementById("time").innerHTML = "00:00:00";
  document.querySelector('#disable-pointer').classList.add("pointer");
};


function addSeconds(){
	if(running == 1){
		setTimeout(function(){
			time++;
			var secs = Math.floor(time / 10);
      if(secs === 10){
        document.getElementById("message").innerHTML = "You are out of time & didn't save Bill! Press reload & start above to try again";
        reset();
      }

			document.getElementById("time").innerHTML = "Time: " + secs + " Seconds";
			addSeconds();
		}, 100);
	}
};

function enablePointer(){
  let pointer = document.querySelector('#disable-pointer');
  if (pointer.classList.contains("pointer")){
    pointer.classList.remove("pointer")
  }
};

function replay() {
  location.reload();
  return false;
}
