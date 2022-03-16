function mediaFactory(data) {
    const {id, photographerId, title, image, video, likes, date, price} = data;

    function getMediaCardDOM(medias) {
        const article = document.createElement('article');

        let media;

        if (image) {
            media = document.createElement('img');
            media.setAttribute("src", `assets/Sample Photos/${photographerId}/${image}`);
            media.setAttribute('onclick', `lightboxOpen(${id})`)
        } else {
            media = document.createElement('video');
            media.setAttribute("src", `assets/Sample Photos/${photographerId}/${video}`);
            media.setAttribute('onclick', `lightboxOpen(${id})`)
            media.autoplay = false;
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


        div.appendChild(titleImg);
        div.appendChild(followImg);
        div.appendChild(heart);
        article.appendChild(media);
        article.appendChild(div);

        return (article);
    }

    return {id, photographerId, title, image, likes, date, price, getMediaCardDOM}
}

function filterMedia(medias) {
    const option = document.querySelector('.option');

    if (option.toString() === "popularity") {
     medias.sort(function (a, b) {
         return a.likes - b.likes;
     })
    }

    if (option.toString() === "title") {
        medias.sort(function (a, b) {
            return a.title - b.title;
        })
    }

    if (option.toString() === "date") {
        medias.sort(function (a, b) {
            return a.date - b.date;
        })
    }
}


