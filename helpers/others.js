function showBSOD(img) {
  console.log("BSOD Ran");
  let bsod = document.createElement("div");
  bsod.id = "bsod";
  let image = document.createElement("img");
  image.src = img;
  image.id = "bsod-image";

  bsod.appendChild(image);
  document.querySelector("#root").appendChild(bsod);
}
