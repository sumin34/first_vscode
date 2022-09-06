
const images = [
    "1_background.jpg",
    "3_background.jpg",
    "4_background.jpg",
    "5_background.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgimage = document.createElement("Img");

bgimage.src = `imgg/${chosenImage}`;
bgimage.classList.add("bgImage");
bgimage.classList.add("img-cover");
document.body.appendChild(bgimage);

