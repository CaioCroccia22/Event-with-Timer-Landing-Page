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
    // Math.floor() para arredondar o valor para baixo
    const daysEventInterval = Math.floor(eventInterval / (1000 * 60 * 60 * 24));

    // Calcular o intervalo de tempo em horas
    const hoursEventInterval = Math.floor((eventInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // Calcular o intervalo de tempo em minutos
    const minutesEventInterval = Math.floor((eventInterval % (1000 * 60 * 60 * 24)) / (1000 * 60));

    // Calcular o intervalo de tempo em segundos
    const secondsEventInterval = Math.floor((eventInterval % (1000 * 60 * 60 * 24)) / 1000);
    
    console.log(daysEventInterval);
    console.log(hoursEventInterval);
    console.log(minutesEventInterval);
    console.log(secondsEventInterval);

    document.getElementById("contador").innerHTML = daysEventInterval + ' ' + 'dias' + ' ' + hoursEventInterval + ' ' + 'horas'
    + ' ' + minutesEventInterval + ' ' + 'minutos' +  ' ' + secondsEventInterval + ' ' + 'segundos';

    if(eventInterval < 0){
        clearInterval(eventInterval);
        document.getElementById("contador").innerHTML = "Evento Expirado";
    }

}, 1000);