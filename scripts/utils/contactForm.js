function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    document.getElementById("contactModalClose").focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
