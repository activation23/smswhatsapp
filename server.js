// Import du module HTTP intégré
const http = require('http');

// Création du serveur
const server = http.createServer((req, res) => {
    // Réponse du serveur
    res.statusCode = 200; // Code de succès
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

// Définir le port et lancer le serveur
const port = 3000;
server.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});
