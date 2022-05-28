window.onload = function () {
  let div = document.createElement("div");
  document.body.appendChild(div);
  div.className = "descriereContainer";
  div.innerHTML =
    "La clinica noastra veterinara din Bucuresti, veti regasi medici, asistenti și personal administrativ plini de compasiune, entuziasti si dedicati scopului nostru comun: a oferi un serviciu veterinar de cea mai buna calitate. De aceea, lucram in continuu la mentinerea si imbunatatirea standardului medical. La Happy Paws, suntem mereu pregatiti sa venim in ajutor atunci cand intampinati situatii critice care au nevoie de reactie rapida.";

  let initial = parseInt(window.getComputedStyle(div).height);

  div.onclick = function (event) {
    //click pe div
    if (this.style.height !== "") {
      let curent = parseInt(this.style.height);
      this.style.height = curent + 10 + "px";
    } else {
      this.style.height = initial + 10 + "px";
    }
    event.stopPropagation(); //oprirea propagarii spre parinte
  };

  const divuri = Array.from(document.getElementsByClassName("miniContainer"));
  divuri.forEach((el) => {
    el.addEventListener("click", (event) => {
      el.style.backgroundColor = "orange";
    });
  }, true);

  let x = Math.floor(Math.random() * 10 + 1);
  document.getElementById("mathId").innerHTML =
    "Azi iti oferim " + x + " imbratisari pentru animalutul tau!";

  const parentLi = document.getElementById("listId");
  const childrenLi = parentLi.children; //o colectie a copiilor(tagurilor) lui parentLi
  for (let i = 0; i < childrenLi.length; i++) {
    childrenLi[i].style.fontStyle = "italic";
  }

  const animal1 = { nume: "Piscotel", varsta: 1 };
  const animal2 = { nume: "Pluto", varsta: 3 };
  animal1.boala = "indigestie";
  animal1.tipAnimal = "Pisica";
  animal2.boala = "labuta rupta";
  animal2.tipAnimal = "Cainele";
  document.getElementById("animal1").innerHTML =
    animal1.tipAnimal +
    " cu numele " +
    animal1.nume +
    " in varsta de " +
    animal1.varsta +
    " an, a avut " +
    animal1.boala +
    " si dupa 3 zile de tratament s-a intors fericit la familia ei.";

  document.getElementById("animal2").innerHTML =
    animal2.tipAnimal +
    " cu numele " +
    animal2.nume +
    " in varsta de " +
    animal2.varsta +
    " ani, a avut " +
    animal2.boala +
    " si dupa o saptamana putea din nou sa se joace fericit prin gradina familiei lui.";
};

const firstColor = "salmon";
const secondColor = "pink";
const myInterval = setInterval(setColor, 2000, firstColor, secondColor);
function setColor(firstCol, secondCol) {
  let x = document.body;
  if (x.style.backgroundColor == firstCol) {
    x.style.backgroundColor = secondCol;
  } else {
    x.style.backgroundColor = firstCol;
  }
}
function stopColor() {
  clearInterval(myInterval);
}

function coordonate(event) {
  let x = event.pageX;
  let y = event.pageY;
  let coords = "Coordonata lui X: " + x + ", coordonata lui Y: " + y;
  document.getElementById("coordId").innerHTML = coords;
}
