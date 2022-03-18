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
        div.classList.add('detailImg');
        const titleImg = document.createElement('p');
        titleImg.classList.add('titleImg');
        titleImg.textContent = title
        const followImg = document.createElement('p');
        followImg.classList.add('followImg');
        followImg.setAttribute("id", `followImg-${id}`);
        followImg.setAttribute("aria-label", `likes`)
        followImg.textContent = likes;
        const heart = document.createElement('p')
        heart.classList.add('fas');
        heart.classList.add('fa-heart');
        heart.addEventListener('click', () =>{
            updateLikesTotal(data.likes > likes ? "less" : "add");
            data.likes > likes ? data.likes-- : data.likes++;
            const follow = document.getElementById(`followImg-${id}`);
            follow.textContent = data.likes;
        })

        div.appendChild(titleImg);
        div.appendChild(followImg);
        div.appendChild(heart);
        article.appendChild(media);
        article.appendChild(div);

        return (article);
    }
    return {id, photographerId, title, image, likes, date, price, getMediaCardDOM}
}

function filterMedia(medias, option) {
    console.log(option)
    return medias.sort(function (a, b) {
        if (option === "popularity") {
            return b.likes - a.likes;
        } else if (option === "title") {
            return (a.title).localeCompare(b.title);
        } else if (option === "date") {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
    })
}



