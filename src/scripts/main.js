AOS.init();

// Capturar o time Stamp do Evento
const eventDate = new Date("Dec 12, 2025 19:00:00");
const eventTimeStamp = eventDate.getTime();
console.log(eventTimeStamp);

// Atualizar de modo dinamico a cada 1 segundo
const getHours = setInterval(function() {
    
    // Capturar o time Stamp de Agora
    const now = new Date()
    const currentTimeStamp = now.getTime();

    // Calcular o intervalo de tempo entre o evento e o agora
    const eventInterval = eventTimeStamp - currentTimeStamp;

    // Calcular o intervalo de tempo em dias
    const daysEventInterval = eventInterval / (1000 * 60 * 60 * 24)
    console.log(daysEventInterval);

}, 1000);