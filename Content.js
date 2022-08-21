let imgUrl = "https://picsum.photos/200";

const images = document.getElementsByTagName("img");

for (let i = 0; i < images.length; i++) {
    images[i].src = imgUrl;
}