const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const FICHIER_DEMANDES = path.join(__dirname, 'demandes.json');

// Permet de lire les données envoyées par un formulaire
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

// Réception du formulaire de contact
app.post('/contact', (req, res) => {
  const { nom, email, date, personnes, message } = req.body;

  // Vérification minimale côté serveur
  if (!nom || !email || !date || !personnes) {
    return res.status(400).send('Merci de remplir tous les champs obligatoires.');
  }

  // Lecture des demandes déjà enregistrées
  let demandes = [];
  if (fs.existsSync(FICHIER_DEMANDES)) {
    demandes = JSON.parse(fs.readFileSync(FICHIER_DEMANDES, 'utf8'));
  }

  // Ajout de la nouvelle demande
  demandes.push({
    recueLe: new Date().toISOString(),
    nom,
    email,
    date,
    personnes,
    message: message || ''
  });

  fs.writeFileSync(FICHIER_DEMANDES, JSON.stringify(demandes, null, 2));

  // Page de confirmation
  res.send(`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demande envoyée — Vite &amp; Gourmand</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <header>
    <a href="/">Vite &amp; Gourmand</a>
  </header>
  <main>
    <h1>Merci, votre demande a bien été envoyée</h1>
    <section class="intro">
      <p>Nous vous répondons dans les meilleurs délais.</p>
      <a href="/" class="bouton">Retour à l'accueil</a>
    </section>
  </main>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});