function likesTotal(medias) {
    const countLikes = document.querySelector('.countLikes');
    let likesTotalPhotographer = 0;
    medias.forEach((media) => {
        likesTotalPhotographer += media.likes;
    })
    countLikes.innerHTML = likesTotalPhotographer.toString();
}
