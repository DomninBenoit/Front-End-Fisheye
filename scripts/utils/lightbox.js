const lightbox = document.getElementById("lightbox");
let slides;
let currentMediaId;
let index = 0;

function lightboxOpen(id) {
    currentMediaId = id;
    lightbox.style.display = "block";
    const imgById = document.getElementById(id);
    console.log(imgById)
    imgById.style.display = "block";

    document.getElementById("lightboxClose").focus();
}

function closeLightbox() {
    const imgById = document.getElementById(currentMediaId);
    imgById.style.display = "none";
    console.log(slides)
    if (index >= 0 && slides) slides[index].style.display = "none";
    lightbox.style.display = "none";

}

/*
Loading images in the lightbox when opening the photographer page
 */
function insertImgLightbox(medias) {
    const container = document.querySelector('.lightbox__container');

    medias.forEach((media) => {
        const div = document.createElement('div');
        div.classList.add("slide");
        let mediaLightbox;
        if (media.image) {
            mediaLightbox = document.createElement('img');
            mediaLightbox.setAttribute("src", `assets/Sample Photos/${media.photographerId}/${media.image}`);
        } else {
            mediaLightbox = document.createElement('video');
            let sourceVideo = document.createElement("source");
            sourceVideo.setAttribute("src", `assets/Sample Photos/${media.photographerId}/${media.video}`);
            mediaLightbox.autoplay = true;
            mediaLightbox.loop = true;
            mediaLightbox.appendChild(sourceVideo);
        }
        let mediaTitle = document.createElement('h2');
        mediaTitle.textContent = `${media.title}`;
        div.setAttribute("id", media.id);
        console.log(div)
        div.style.display = "none";
        div.appendChild(mediaLightbox);
        div.appendChild(mediaTitle);
        container.appendChild(div)
    })
    const modalBtnClose = document.getElementById("lightboxClose");
    modalBtnClose.addEventListener("click", closeLightbox)

}


function changeMedia(n) {
    showMedia((index += n));
}

/*
image switch in lightbox
 */
function showMedia(n) {

    slides = document.getElementsByClassName("slide")

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