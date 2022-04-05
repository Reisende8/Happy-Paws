function showOtherImg() {
  const imgArray = [
    "mancare_catelusi.jpg",
    "patrula_catelusilor.jpg",
    "piscotel.jpeg",
    "pisicuta_adormita.jpg",
  ];

  var im1 = document.getElementById("main-img");

  for (i = 0; i < imgArray.length; i++) {
    if (i == imgArray.length - 1) {
      im1.setAttribute("src", imgArray[0]);
      break;
    } else {
      if (im1.getAttribute("src") == imgArray[i]) {
        im1.setAttribute("src", imgArray[i + 1]);
        break;
      }
    }
  }
}
setInterval(showOtherImg, 5000);
