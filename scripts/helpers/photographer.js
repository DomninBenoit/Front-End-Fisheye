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
