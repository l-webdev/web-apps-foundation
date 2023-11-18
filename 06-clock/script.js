function updateClock() {
  // aktuelles Datum und Uhrzeit holen
  const now = new Date();

  // Stunden, Minuten und Sekunden holen
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Winkelberechnungen für die Zeiger
  const hoursAngle = ((hours % 12) * 360) / 12;
  //+ ((minutes / 60) * 360) / 12; // Stundenzeiger bewegt sich um 30 Grad pro Stunde, 0.5 Grad pro Minute
  const minutesAngle = (minutes / 60) * 360; // Minutenzeiger bewegt sich um 6 Grad pro Minute
  const secondsAngle = (seconds / 60) * 360; // Sekundenzeiger bewegt sich um 6 Grad pro Sekunde

  // Zeigerdrehen entsprechend der berechneten Winkel
  document.querySelector(
    ".hour-hand"
  ).style.transform = `rotate(${hoursAngle}deg)`;
  document.querySelector(
    ".minute-hand"
  ).style.transform = `rotate(${minutesAngle}deg)`;
  document.querySelector(
    ".seconds-hand"
  ).style.transform = `rotate(${secondsAngle}deg)`;
}

// Funktionsaufruf zu Beginn, um die Zeiger sofort zu setzen
updateClock();

// aktualisiert die Zeiger jede Sekunde
setInterval(updateClock, 1000);

function updateDigitalClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0"); // Führende Null
  const minutes = now.getMinutes().toString().padStart(2, "0"); // Führende Null hinzufügen
  const seconds = now.getSeconds().toString().padStart(2, "0"); // Führende Null hinzufügen
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  /* const digitalClock = document.getElementsByClassName("digital-clock")[0];
  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;*/
}

updateDigitalClock();

setInterval(() => {
  const colons = document.querySelectorAll(".colon");
  colons.forEach((colon) => {
    colon.classList.toggle("hide");
  });
}, 1000);
