const getPhotographers = async () => {


    await fetch('./data/photographers.json')
        .then((response) => response.json())
        .then((data) => photographers = data.photographers)
        .catch((error) => console.error(error));

    return {
        photographers: [...photographers],
    };
};

const photographerDisplayData = () => {

    const photographerHeader = document.querySelector(".photographer_header");
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');

    photographers.forEach((photographer) => {
        if (photographer.id === id) {
            const photographerModelPage = photographerFactory(photographer);
            const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
            photographerHeader.appendChild(userCardDOMPage);
        }
    });
};

async function initPage() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    photographerDisplayData(photographers);
}

initPage();