document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');
    if (!name || !email || !message) {
        errorMessage.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Veuillez saisir une adresse e-mail valide.";
        return;
    }

    alert("Merci! Votre message a été envoyé avec succès.");

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    errorMessage.textContent = '';
});
