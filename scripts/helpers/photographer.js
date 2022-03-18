const getPhotographers = async () => {


    await fetch('./data/photographers.json')
        .then((response) => response.json())
        .then((data) => photographers = data.photographers)
        .catch((error) => console.error(error));

    return {
        photographers: [...photographers],
    };
};


const getPhotograph = async (photographerId) => {

let currentPhotographer;

    await fetch('./data/photographers.json')
        .then((response) => response.json())
        .then((data) => {
            const photographer = data.photographers.find((photographer) => photographer.id.toString() === photographerId)
            const medias = data.media.filter((media) => media.photographerId.toString() === photographerId)
            currentPhotographer = {
                ...photographer,
                medias
            }

        })
        .catch((error) => console.error(error));

    return currentPhotographer;
};


function likesTotal(medias) {
    const countLikes = document.querySelector('.countLikes');
    let likesTotalPhotographer = 0;
    medias.forEach((media) => {
        likesTotalPhotographer += media.likes;
    })
    countLikes.innerHTML = likesTotalPhotographer.toString();
}

function updateLikesTotal(updateType) {
    let countLikes = document.getElementById('countLikes');

    if (updateType === "add") {
        countLikes.innerText = (parseInt(countLikes.innerText, 10)+1).toString();
    } else {
        countLikes.innerText = (parseInt(countLikes.innerText, 10)-1).toString();
    }
}