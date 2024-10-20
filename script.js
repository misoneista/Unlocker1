let action1Completed = false;
let action2Completed = false;

function openSite() {
    // Simula la visita al sito aprendo una nuova finestra
    window.open("https://www.iltuosito.com", "_blank");
    action1Completed = true;
    checkActions();
}

function watchVideo() {
    // Simula la visualizzazione di un video promozionale
    alert("Simulazione: Guarda il video promozionale qui!");
    action2Completed = true;
    checkActions();
}

function checkActions() {
    // Verifica se tutte le azioni sono state completate
    if (action1Completed && action2Completed) {
        document.getElementById("unlockButton").disabled = false;
    }
}

function unlockLink() {
    // Sblocca il link
    document.getElementById("unlockedLink").style.display = "block";
    function startUnlockProcess(linkId) {
    // Avvio processo di sblocco (ad esempio, mostrando passaggi)
    alert("Inizia il processo di sblocco per " + linkId);
    
    // Avvia il timer di 8 minuti
    startTimer(8, linkId);
}

function startTimer(minutes, linkId) {
    let time = minutes * 60;
    const interval = setInterval(function() {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        console.log(minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
        time--;

        // Quando il timer arriva a 0, sblocca il link
        if (time < 0) {
            clearInterval(interval);
            unlockLink(linkId);
        }
    }, 1000);
}

function unlockLink(linkId) {
    alert("Link " + linkId + " è stato sbloccato! Puoi accedere ora.");
    // Qui puoi fare redirect o mostrare il link sbloccato
}