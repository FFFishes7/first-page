const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/animalface_coala.png") {
    myImage.setAttribute("src", "images/animalface_kuma.png");
  } else {
    myImage.setAttribute("src", "images/animalface_coala.png");
  }
};
