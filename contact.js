const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware pour parser les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route pour gérer la soumission du formulaire
app.post('/submit-form', (req, res) => {
    const { firstName, lastName, email, project, otherInfo, notRobot } = req.body;

    // Vérifiez si la case "Je ne suis pas un robot" est cochée
    if (!notRobot) {
        return res.status(400).send({ message: "Vous devez confirmer que vous n'êtes pas un robot." });
    }

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'melodie.bretagne.56@gmail.com', // Remplacez par votre email
            pass: 'lejoiedevivre5689', // Remplacez par votre mot de passe
        },
    });

    const mailOptions = {
        from: 'votre-email@gmail.com', // Remplacez par votre email
        to: 'melodie.bretagne.56@gmail.com', // Destinataire
        subject: 'Demande de contact depuis le formulaire',
        text: `Nom: ${firstName} ${lastName}\nEmail: ${email}\nProjet: ${project}\nAutres informations: ${otherInfo}`,
    };

    // Envoi de l'email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ message: "Erreur lors de l'envoi de l'email." });
        }
        res.status(200).send({ message: "Formulaire envoyé avec succès!" });
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running on http://localhost:3000:${port}`);
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi immédiat du formulaire

    const formData = new FormData(event.target); // Récupère toutes les données du formulaire

    fetch("http://localhost:3000/submit-form", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => alert(data)) // Affiche la réponse du serveur
    .catch(error => console.error('Erreur :', error));
});

<script>
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche l'envoi du formulaire de manière classique

        let formData = new FormData(this);

        fetch('http://localhost:3000/submit-form', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                document.getElementById('responseMessage').textContent = data.message;
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            document.getElementById('responseMessage').textContent = "Une erreur est survenue, veuillez réessayer.";
        });
    });
</script>
