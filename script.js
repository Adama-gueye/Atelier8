document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Vérification des données saisies
    if (!name || !email || !message) {
        errorMessage.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    // Vérification de l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Veuillez saisir une adresse e-mail valide.";
        return;
    }

    // Envoi du formulaire (simulé ici)
    // Remplacez cette partie avec votre code pour soumettre les données à votre backend
    // Ici, nous allons simplement afficher un message de succès
    alert("Merci! Votre message a été envoyé avec succès.");

    // Réinitialiser les champs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    errorMessage.textContent = '';
});
