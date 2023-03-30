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

var imagen6 = document.querySelector("#miIMAGEN6");
var gif6 = document.querySelector("#miGIF6");

var gifrepetir6 = document.querySelector("#miGIF6");
gifrepetir6.addEventListener("dblclick", repetirgif6);

function repetirgif6() {
  gifrepetir6.src = gifrepetir6.src;
}

var imagen7 = document.querySelector("#miIMAGEN7");
var gif7 = document.querySelector("#miGIF7");

var gifrepetir7 = document.querySelector("#miGIF7");
gifrepetir7.addEventListener("dblclick", repetirgif7);

function repetirgif7() {
  gifrepetir7.src = gifrepetir7.src;
}

var imagen8 = document.querySelector("#miIMAGEN8");
var gif8 = document.querySelector("#miGIF8");

var gifrepetir8 = document.querySelector("#miGIF8");
gifrepetir8.addEventListener("dblclick", repetirgif8);

function repetirgif8() {
  gifrepetir8.src = gifrepetir8.src;
}

var imagen9 = document.querySelector("#miIMAGEN9");
var gif9 = document.querySelector("#miGIF9");

var gifrepetir9 = document.querySelector("#miGIF9");
gifrepetir9.addEventListener("dblclick", repetirgif9);

function repetirgif9() {
  gifrepetir9.src = gifrepetir9.src;
}

var imagen10 = document.querySelector("#miIMAGEN10");
var gif10 = document.querySelector("#miGIF10");

var gifrepetir10 = document.querySelector("#miGIF10");
gifrepetir10.addEventListener("dblclick", repetirgif10);

function repetirgif10() {
  gifrepetir10.src = gifrepetir10.src;
}

var imagen11 = document.querySelector("#miIMAGEN11");
var gif11 = document.querySelector("#miGIF11");

var gifrepetir11 = document.querySelector("#miGIF11");
gifrepetir11.addEventListener("dblclick", repetirgif11);

function repetirgif11() {
  gifrepetir11.src = gifrepetir11.src;
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

var movmouse6 = document.querySelector("#mouse6");
var movmouse66 = document.querySelector("#mouse6-1");

var movmouse7 = document.querySelector("#mouse7");
var movmouse77 = document.querySelector("#mouse7-1");

var movmouse8 = document.querySelector("#mouse8");
var movmouse88 = document.querySelector("#mouse8-1");

var movmouse9 = document.querySelector("#mouse9");
var movmouse99 = document.querySelector("#mouse9-1");

var movmouse10 = document.querySelector("#mouse10");
var movmouse100 = document.querySelector("#mouse10-1");

var movmouse11 = document.querySelector("#mouse11");
var movmouse110 = document.querySelector("#mouse11-1");


movmouse.addEventListener("click", reproducir);

movmouse2.addEventListener("click", reproducir2);
movmouse3.addEventListener("click", reproducir3);
movmouse4.addEventListener("click", reproducir4);
movmouse5.addEventListener("click", reproducir5);
movmouse6.addEventListener("click", reproducir6);
movmouse7.addEventListener("click", reproducir7);
movmouse8.addEventListener("click", reproducir8);
movmouse9.addEventListener("click", reproducir9);
movmouse10.addEventListener("click", reproducir10);
movmouse11.addEventListener("click", reproducir11);

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

movmouse6.addEventListener("click", desaparecer6);
movmouse6.addEventListener("click", reproducir6);

movmouse7.addEventListener("click", desaparecer7);
movmouse7.addEventListener("click", reproducir7);

movmouse8.addEventListener("click", desaparecer8);
movmouse8.addEventListener("click", reproducir8);

movmouse9.addEventListener("click", desaparecer9);
movmouse9.addEventListener("click", reproducir9);

movmouse10.addEventListener("click", desaparecer10);
movmouse10.addEventListener("click", reproducir10);

movmouse11.addEventListener("click", desaparecer11);
movmouse11.addEventListener("click", reproducir11);

function reproducir() {
  movmouse.style.display = "none";
  imagen.style.display = "none";
  gif.style.display = "block";
  setTimeout(() => {
    movmouse11.style.display = "flex";
  }, 15000);
}

function reproducir2() {
  imagen2.style.display = "none";
  gif2.style.display = "block";
  setTimeout(() => {
    movmouse22.style.display = "flex";
  }, 13000);
}

function reproducir3() {
  movmouse3.style.display = "none";
  imagen3.style.display = "none";
  gif3.style.display = "block";
  setTimeout(() => {
    movmouse33.style.display = "flex";
  }, 12000);
}

function reproducir4() {
  movmouse4.style.display = "none";
  imagen4.style.display = "none";
  gif4.style.display = "block";
  setTimeout (() => {
    movmouse44.style.display = "flex";
  },14000);

}

function reproducir5() {
  movmouse5.style.display = "none";
  imagen5.style.display = "none";
  gif5.style.display = "block";
  setTimeout (() => {
    movmouse55.style.display = "flex";
  },13000);
}

function reproducir6() {
  movmouse6.style.display = "none";
  imagen6.style.display = "none";
  gif6.style.display = "block";
  setTimeout (() => {
    movmouse66.style.display = "flex";
  },6000);
}

function reproducir7() {
  movmouse7.style.display = "none";
  imagen7.style.display = "none";
  gif7.style.display = "block";
  setTimeout (() => {
    movmouse77.style.display = "flex";
  },14000);
}

function reproducir8() {
  movmouse8.style.display = "none";
  imagen8.style.display = "none";
  gif8.style.display = "block";
  setTimeout (() => {
    movmouse88.style.display = "flex";
  },15000);
}

function reproducir9() {
  movmouse9.style.display = "none";
  imagen9.style.display = "none";
  gif9.style.display = "block";
  setTimeout (() => {
    movmouse99.style.display = "flex";
  },15000);
}

function reproducir10() {
  movmouse10.style.display = "none";
  imagen10.style.display = "none";
  gif10.style.display = "block";
  setTimeout (() => {
    movmouse100.style.display = "flex";
  },15000);
}

function reproducir11() {
  movmouse11.style.display = "none";
  imagen11.style.display = "none";
  gif11.style.display = "block";
  setTimeout (() => {
    movmouse110.style.display = "flex";
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

function desaparecer6() {
  movmouse6.style.display = "none";
}

function desaparecer7() {
  movmouse7.style.display = "none";
}

function desaparecer8() {
  movmouse8.style.display = "none";
}

function desaparecer9() {
  movmouse9.style.display = "none";
}

function desaparecer10() {
  movmouse10.style.display = "none";
}

function desaparecer11() {
  movmouse11.style.display = "none";
}

