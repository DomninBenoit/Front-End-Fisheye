function photographerFactory(data) {
    const {name, id, city, country, tagline, price, portrait} = data;

    const picture = `assets/photographers/${portrait}`;

    /*
    *function of displaying the photographer's resume on the home page
    */
    function getUserCardDOM() {
        const lien = document.createElement("a");
        lien.setAttribute("href", `photographer.html?id=${id}`);
        lien.setAttribute("aria-label", name);
        lien.classList.add(id);
        const div = document.createElement('div');
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const p = document.createElement('p');
        const localisation = document.createElement('span');
        localisation.classList.add('city');
        localisation.textContent = city + ", " + country;
        const slogan = document.createElement('span');
        slogan.classList.add('slogan');
        slogan.textContent = tagline;
        const rate = document.createElement('span');
        rate.classList.add('price');
        rate.textContent = price + '€/jour';
        div.appendChild(img);
        div.appendChild(h2);
        lien.appendChild(div);
        article.appendChild(lien);

        p.appendChild(localisation);
        p.appendChild(slogan);
        p.appendChild(rate);
        article.appendChild(p);

        return (article);
    }

    /*
    * display of the header of the photographer's page
    */
    function getUserCardDOMPage() {
        const article = document.createElement("article");
        const div = document.createElement("div");
        const btnContact = document.createElement("button");
        btnContact.classList.add("contact_button");
        btnContact.setAttribute("onclick", "displayModal()");
        btnContact.setAttribute("aria-label", `Contact Me`);
        btnContact.setAttribute("tabindex", "1");
        btnContact.textContent = "Contactez-moi";
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        const h1 = document.createElement("h1");
        h1.textContent = name;
        const p = document.createElement('p');
        const localisation = document.createElement('span');
        localisation.classList.add('city');
        localisation.textContent = city + ", " + country;
        const slogan = document.createElement('span');
        slogan.classList.add('slogan');
        slogan.textContent = tagline;

        p.appendChild(localisation);
        p.appendChild(slogan);
        div.appendChild(h1);
        div.appendChild(p)

        article.appendChild(div);
        article.appendChild(btnContact);
        article.appendChild(img);

        return (article);
    }

    return {name, id, city, country, tagline, price, portrait, getUserCardDOM, getUserCardDOMPage};
}