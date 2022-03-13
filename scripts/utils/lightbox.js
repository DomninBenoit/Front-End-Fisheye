const lightbox = document.getElementById("lightbox");
let currentMediaId;

function lightboxOpen(id) {
    currentMediaId = id;
    lightbox.style.display = "block";
    const imgById = document.getElementById(id);
    imgById.style.display = "block";
}

function closeLightbox() {
    lightbox.style.display = "none";
    const imgById = document.getElementById(currentMediaId);
    imgById.style.display = "none";

}


function insertImgLightbox(medias) {
    const container = document.querySelector('.lightbox__container');
    medias.forEach((media) => {
        let mediaLightbox;
        if (media.image) {
            mediaLightbox = document.createElement('img');
            mediaLightbox.classList.add("slide");
            mediaLightbox.setAttribute("src", `assets/Sample Photos/${media.photographerId}/${media.image}`);
        } else {
            mediaLightbox = document.createElement('video');
            mediaLightbox.classList.add("slide");
            let sourceVideo = document.createElement("source");
            sourceVideo.setAttribute("src", `assets/Sample Photos/${media.photographerId}/${media.video}`);
            mediaLightbox.autoplay = true;
            mediaLightbox.appendChild(sourceVideo);
        }
        mediaLightbox.setAttribute("id", media.id);
        mediaLightbox.style.display = "none";
        container.appendChild(mediaLightbox);
    })
}

let index = 0;

function changeMedia(n) {
    showMedia((index += n));
}


function showMedia(n) {

    const slides = document.getElementsByClassName("slide")

    if (n > slides.length - 1) {
        index = 0;
    }
    if (n < 0) {
        index = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}