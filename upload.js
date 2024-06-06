document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita il comportamento predefinito del modulo di inviare la richiesta

    // Crea un oggetto FormData per raccogliere i dati del modulo
    var formData = new FormData(this);

    // Effettua una richiesta POST utilizzando l'API Fetch
    fetch(this.action, {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Errore durante l'invio del video");
        }
        return response.json();
    })
    .then(data => {
        console.log("Proposta di caricamento video inviata con successo:", data);
        // Puoi gestire la risposta del server qui
    })
    .catch(error => {
        console.error("Si è verificato un errore durante l'invio della proposta di caricamento video:", error);
        // Puoi gestire gli errori qui
    });
});
