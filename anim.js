// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Started out on a one-way train", time: 4 },
  { text: "Always knew where I was gonna go next", time: 10 },
  { text: "Didn't know until I saw your face", time: 11 },
  { text: "I was missing out on every moment", time: 12 },
  { text: "You'll be one and, baby, I'll be two", time: 13 },
  { text: "Would you mind it if I said I'm into you", time: 14 },
  { text: "So if it's real, then darling let me know", time: 38 },
  { text: "I wouldn't mind if you steal the show", time: 44 },

  { text: "", time: 50 }, // pausa

  { text: "You and I, we go together", time: 58 },
  { text: "You're the sky, I'll be the weather", time: 64 },
  { text: "A pretty thing, a sun and rain, oh no", time: 70 },
  { text: "Summer night, perfect occasion", time: 78 },
  { text: "When I'm by, you know I'll be waiting for you", time: 85 },
  { text: "Oh, for you", time: 91 },
  
  { text: "So if it's real, then darling let me know", time: 98 },
  { text: "I wouldn't mind if you steal the show", time: 104 },
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 1.5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
