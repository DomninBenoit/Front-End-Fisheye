function mediaFactory(data) {
    const {id, photographerId, title, image, likes, date, price} = data;
const name = ``
    const picture = `assets/Sample Photos/${photographerId}/${image}`;

    function getMediaCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        const div = document.createElement("div");
        const titleImg = document.createElement('p')
        titleImg.textContent = title
        const followImg = document.createElement('p');
        followImg.classList.add('followImg');
        followImg.textContent = likes;

        article.appendChild(img)
        div.appendChild(titleImg);
        div.appendChild(followImg);
        article.appendChild(div);
        return (article);
    }

    return {id, photographerId, title, image, likes, date, price, getMediaCardDOM}
}

