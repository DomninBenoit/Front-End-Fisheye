

const photographerDisplayData = (photographer) => {

    const photographerHeader = document.getElementById('photographHeader');
    const photographerModelPage = photographerFactory(photographer);
    const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
    photographerHeader.appendChild(userCardDOMPage);
    const photographerName = document.getElementById(`photographerNameModal`);
    photographerName.innerText = photographer.name;
};

const mediaDisplayData = (photographer) => {

    const mediaSection = document.querySelector(".media_section");
    photographer.medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM(photographer.medias);
        mediaSection.appendChild(mediaCardDOM);

    });
};

async function initPage() {

    let params = new URL(document.location).searchParams;
    let id = params.get('id');
    // Récupère les datas des photographes
    const photographer = await getPhotograph(id);
    photographerDisplayData(photographer);
    mediaDisplayData(photographer);
    insertImgLightbox(photographer.medias);
    likesTotal(photographer.medias);

    const filters = document.querySelector(".filter");

    filters.addEventListener("change", (e) =>{
        filterMedia(photographer.medias);
        })
}

initPage();


// DOM Elements
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("message");
let email_V = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let regExp = new RegExp("[0-9]");

form.addEventListener('submit', validate);



//contrôle de la saisie
function validate(a) {
    a.preventDefault();

    const inputValidate = [];

    //check prénom
    if (firstName.value.length < 2 || firstName.value === "" || regExp.test(firstName.value)) {
        document.getElementById("errorFirst").innerHTML =
            "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        firstName.style.borderColor = "red";
        inputValidate.push(false);
    } else {
        document.getElementById("errorFirst").innerHTML = "";
        inputValidate.push(true);
        firstName.style.borderColor = "transparent";
    }

    //check nom
    if (lastName.value.length < 2 || lastName.value === "" || regExp.test(lastName.value)) {
        document.getElementById("errorLast").innerHTML =
            "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        lastName.style.borderColor = "red";
        inputValidate.push(false);
    } else {
        document.getElementById("errorLast").innerHTML = "";
        inputValidate.push(true);
        lastName.style.borderColor = "transparent";
    }

    //check email
    if (email.value === "" || !email_V.test(email.value)) {
        document.getElementById("errorEmail").innerHTML =
            "Veuillez entrer un email valide";
        email.style.borderColor = "red";
        inputValidate.push(false);
    } else {
        document.getElementById("errorEmail").innerHTML = "";
        inputValidate.push(true);
        email.style.borderColor = "transparent";
    }

    if (inputValidate.every((element) => element === true)) {
        console.log(firstName.value, lastName.value, email.value, message.value);
        closeModal();
        form.reset();
    }
}
