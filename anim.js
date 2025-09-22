// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Started out on a one-way train 😄", time: 12 },
  { text: "Always knew where I was gonna go next", time: 14 },
  { text: "Didn't know until I saw your face", time: 16 },
  { text: "I was missing out on every moment", time: 20 },
  { text: "You'll be one and, baby, I'll be two", time: 22 },
  { text: "Would you mind it if I said, I'm into you", time: 24 },
  { text: "I'm into you", time: 29 },
  { text: "So if it's real", time: 31 },
  { text: "then darling let me know", time: 35 },
  { text: "I wouldn't mind", time: 42 },
  { text: "if you steal the show", time: 45 },
  { text: "", time: 48 }, // Pausa
  { text: "You and I", time: 68 },
  { text: "we go together", time: 70 },
  { text: "You're the sky", time: 71 },
  { text: "I'll be the weather", time: 72 },
  { text: "A pretty thing", time: 73 },
  { text: "a sun and rain, oh no", time: 75 },
  { text: "Summer night, perfect occasion", time: 80 },
  { text: "When I'm by, you know I'll be waiting for you", time: 83 },
  { text: "Oh, for you", time: 85 },
  { text: "So if it's real, then darling let me know", time: 86 },
  { text: "I wouldn't mind if you steal the show", time: 100 },
  { text: "So if it's real", time: 108 },
  { text: "then darling let me know", time: 112 },
  { text: "I wouldn't mind", time: 119 },
  { text: "if you steal the show", time: 122 },
  { text: "You shine", time: 125 },
  { text: "You shine", time: 127 },
  { text:"Like forever", time: 130 },
  { text:"That's forever", time: 132 },
  { text: "You shine", time: 135 },
  { text: "You shine", time: 138 },
  { text: "And steal the show", time: 140 },
  { text: "So if it's real", time: 145 },
  { text: "then darling let me know", time: 148 },
  { text: "I wouldn't mind", time: 155 },
  { text: "if you steal the show", time: 159 },
  { text: "Started out on a one-way train ", time: 162 },
  { text: "Always knew where I was gonna go next", time: 165 },
  { text: "So if it's real", time: 166 },
  { text: "then darling let me know", time: 169 },
  { text: "I wouldn't mind", time: 177 },
  { text: "if you steal the show", time: 180 },
  { text: "", time: 183 }, // Fin
];
// Animar las letras
function updateLyrics() {
  var time = audio.currentTime; // Usamos el tiempo exacto con decimales para mayor fluidez
  var currentLine = null;
  // Buscamos la última línea cuyo tiempo ya haya pasado
  for (var i = lyricsData.length - 1; i >= 0; i--) {
    if (time >= lyricsData[i].time) {
      currentLine = lyricsData[i];
      break;
    }
  }

  if (currentLine) {
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 10);

//funcion titulo
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
