function mediaFactory(data) {
    const {id, photographerId, title, image, video, likes, date, price} = data;
    const name = ``


    function getMediaCardDOM() {
        const article = document.createElement('article');
        article.onclick = lightboxOpen;
        let media;

        if (image) {
            media = document.createElement('img');
            media.setAttribute("src", `assets/Sample Photos/${photographerId}/${image}`);
        } else {
            media = document.createElement('video');
            media.setAttribute("src", `assets/Sample Photos/${photographerId}/${video}`);
            media.autoplay = true;
        }
        const div = document.createElement("div");
        const titleImg = document.createElement('p')
        titleImg.textContent = title
        const followImg = document.createElement('p');
        followImg.classList.add('followImg');
        followImg.textContent = likes;
        const heart = document.createElement('p')
        heart.classList.add('fas');
        heart.classList.add('fa-heart');

        article.appendChild(media)
        div.appendChild(titleImg);
        div.appendChild(followImg);
        div.appendChild(heart);
        article.appendChild(div);

        return (article);
    }

    return {id, photographerId, title, image, likes, date, price, getMediaCardDOM}
}

