console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
//-----------------------------------------------------------
const renderImages = function (images) {
  let imagesContainer = document.getElementById("dog-image-container");

  for (let i of images.message) {
    let img = document.createElement("img");
    img.src = i;
    img.style.height = "500px";
    img.style.width = "500px";
    imagesContainer.append(img);
  }

  // const  renderImages = function (books) {
  //     return books.forEach((images) => {
  //       return images.message;
  //     });
};
//-------------------------------------------------------------
const getImages = function () {
  console.log(imgUrl);
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => renderImages(data));
};

getImages();
//-----------------------------------------------------------------------------
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const databreed = function () {
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => renderDogBreed(data));
};

databreed(breedUrl);

const renderDogBreed = function (images) {
  let containerBreed = document.getElementById("dog-breeds");
  for (let i of images.message) {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = i;
    li.append(img);
    containerBreed.append(li);
  }
};

getImages();
databreed();
// Event listners =>
// let li = document.getElementsByName("li");
// function changeColor() {
//   li.style.font.color = "blue";
// }
// li.addEventListener("click", () => changeColor);

//----------------------------------------------------------
