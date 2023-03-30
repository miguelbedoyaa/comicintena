var imagen = document.querySelector("#miIMAGEN");
var gif = document.querySelector("#miGIF");

var gifrepetir = document.querySelector("#miGIF");
gifrepetir.addEventListener("dblclick", repetirgif);

function repetirgif() {
  gifrepetir.src = gifrepetir.src;
}


var imagen2 = document.querySelector("#miIMAGEN2");
var gif2 = document.querySelector("#miGIF2");

var gifrepetir2 = document.querySelector("#miGIF2");
gifrepetir2.addEventListener("dblclick", repetirgif2);

function repetirgif2() {
  gifrepetir2.src = gifrepetir2.src;
}


var imagen3 = document.querySelector("#miIMAGEN3");
var gif3 = document.querySelector("#miGIF3");

var gifrepetir3 = document.querySelector("#miGIF3");
gifrepetir3.addEventListener("dblclick", repetirgif3);

function repetirgif3() {
  gifrepetir3.src = gifrepetir3.src;
}


var imagen4 = document.querySelector("#miIMAGEN4");
var gif4 = document.querySelector("#miGIF4");

var gifrepetir4 = document.querySelector("#miGIF4");
gifrepetir4.addEventListener("dblclick", repetirgif4);

function repetirgif4() {
  gifrepetir4.src = gifrepetir4.src;
}

var imagen5 = document.querySelector("#miIMAGEN5");
var gif5 = document.querySelector("#miGIF5");

var gifrepetir5 = document.querySelector("#miGIF5");
gifrepetir5.addEventListener("dblclick", repetirgif5);

function repetirgif5() {
  gifrepetir5.src = gifrepetir5.src;
}

var movmouse = document.querySelector("#mouse");
var movmouse11 = document.querySelector("#mouse1-1");

var movmouse2 = document.querySelector("#mouse2");
var movmouse22 = document.querySelector("#mouse2-1");

var movmouse3 = document.querySelector("#mouse3");
var movmouse33 = document.querySelector("#mouse3-1");

var movmouse4 = document.querySelector("#mouse4");
var movmouse44 = document.querySelector("#mouse4-1");

var movmouse5 = document.querySelector("#mouse5");
var movmouse55 = document.querySelector("#mouse5-1");


movmouse.addEventListener("click", reproducir);

movmouse2.addEventListener("click", reproducir2);
movmouse3.addEventListener("click", reproducir3);
movmouse4.addEventListener("click", reproducir4);
movmouse5.addEventListener("click", reproducir5);





movmouse.addEventListener("click", desaparecer);
movmouse.addEventListener("click", reproducir);

movmouse2.addEventListener("click", desaparecer2);
movmouse2.addEventListener("click", reproducir2);

movmouse3.addEventListener("click", desaparecer3);
movmouse3.addEventListener("click", reproducir3);

movmouse4.addEventListener("click", desaparecer4);
movmouse4.addEventListener("click", reproducir4);

movmouse5.addEventListener("click", desaparecer5);
movmouse5.addEventListener("click", reproducir5);




function reproducir() {
  movmouse.style.display = "none";
  imagen.style.display = "none";
  gif.style.display = "block";
  setTimeout(() => {
    movmouse11.style.display = "flex";
  }, 8000);
}

function reproducir2() {
  imagen2.style.display = "none";
  gif2.style.display = "block";
  setTimeout(() => {
    movmouse22.style.display = "flex";
  }, 6000);
}

function reproducir3() {
  movmouse3.style.display = "none";
  imagen3.style.display = "none";
  gif3.style.display = "block";
  setTimeout(() => {
    movmouse33.style.display = "flex";
  }, 6000);
}

function reproducir4() {
  movmouse4.style.display = "none";
  imagen4.style.display = "none";
  gif4.style.display = "block";
  setTimeout(() => {
    movmouse44.style.display = "flex";
  }, 8000);
}

function reproducir5() {
  movmouse5.style.display = "none";
  imagen5.style.display = "none";
  gif5.style.display = "block";
  setTimeout (() => {
    movmouse55.style.display = "flex";
  },13000);
}






function desaparecer() {
  movmouse.style.display = "none";
}

function desaparecer2() {
  movmouse2.style.display = "none";
}

function desaparecer3() {
  movmouse3.style.display = "none";
}

function desaparecer4() {
  movmouse4.style.display = "none";
}

function desaparecer5() {
  movmouse5.style.display = "none";
}
