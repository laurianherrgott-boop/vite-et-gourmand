# Vite & Gourmand

Site vitrine d'un traiteur bordelais : présentation de l'entreprise, formules de menus, formulaire de demande de devis et pages légales.

Projet réalisé dans le cadre de la formation Titre Professionnel Développeur Web et Web Mobile (Studi).

## Technologies

- HTML5 et CSS3 (police Poppins, mise en page responsive avec Flexbox et Grid)
- Node.js et Express (serveur et réception du formulaire)

## Prérequis

- [Node.js](https://nodejs.org) installé (version LTS recommandée)

## Installation et lancement

```bash
npm install
node server.js
```

Puis ouvrir http://localhost:3000 dans un navigateur.

Le serveur doit rester lancé tant que l'on consulte le site. Pour l'arrêter : `Ctrl + C`.

## Pages du site

| Adresse | Contenu |
|---|---|
| `/` | Accueil et texte de présentation |
| `/menus.html` | Les 3 formules (saumon à l'oseille, bœuf bourguignon, steak tartare) |
| `/contact.html` | Formulaire de demande de devis |
| `/mentions-legales.html` | Mentions légales |
| `/cgv.html` | Conditions générales de vente |

## Fonctionnement du formulaire de contact

Le formulaire envoie ses données en POST vers `/contact`. Le serveur vérifie les champs obligatoires, enregistre la demande dans un fichier `demandes.json` (créé automatiquement à la première demande), puis affiche une page de confirmation.

Le fichier `demandes.json` contient des données personnelles : il est exclu de Git via `.gitignore` et ne doit pas être publié.

## Structure du projet

```
vite-et-gourmand/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── index.html
│   ├── menus.html
│   ├── contact.html
│   ├── mentions-legales.html
│   └── cgv.html
├── server.js
├── package.json
└── README.md
```

## Limites connues

- Les informations légales (SIRET, code postal, hébergeur, capital, RCS) sont à compléter dans `mentions-legales.html` : elles apparaissent entre crochets.
- Les descriptions des menus et les horaires sont des exemples à remplacer.
- Les demandes de devis sont enregistrées dans un fichier local : pas de notification par email, pas de protection anti-spam.
- Pas de page de connexion ni d'espace administrateur.
- Pas d'images.
- Les CGV et mentions légales sont des modèles à faire valider avant toute publication réelle.

## Auteur

Laurian Herrgott