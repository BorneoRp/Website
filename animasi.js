
```
// Seleksi elemen
let elemen = document.getElementById('animasi');

// Fungsi animasi fade
function fadeAnimasi() {
  let opacity = 0;
  let interval = setInterval(function() {
    if (opacity < 1) {
      elemen.style.opacity = opacity;
      opacity += 0.1;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

// Panggil animasi
fadeAnimasi();
```

Efek Animasi Slide
```
// Seleksi elemen
let elemen = document.getElementById('animasi');

// Fungsi animasi slide
function slideAnimasi() {
  let posisi = 0;
  let interval = setInterval(function() {
    if (posisi < 200) {
      elemen.style.transform = `translateX(${posisi}px)`;
      posisi += 10;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

// Panggil animasi
slideAnimasi();
```

Efek Animasi Zoom
```
// Seleksi elemen
let elemen = document.getElementById('animasi');

// Fungsi animasi zoom
function zoomAnimasi() {
  let skala = 1;
  let interval = setInterval(function() {
    if (skala < 2) {
      elemen.style.transform = `scale(${skala})`;
      skala += 0.1;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

// Panggil animasi
zoomAnimasi();
```

Efek Animasi Rotasi
```
// Seleksi elemen
let elemen = document.getElementById('animasi');

// Fungsi animasi rotasi
function rotasiAnimasi() {
  let sudut = 0;
  let interval = setInterval(function() {
    if (sudut < 360) {
      elemen.style.transform = `rotate(${sudut}deg)`;
      sudut += 10;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

// Panggil animasi
rotasiAnimasi();
```

Menggunakan Library AnimeJS
```
import anime from 'animejs';

// Seleksi elemen
let elemen = document.getElementById('animasi');

// Animasi dengan AnimeJS
anime({
  targets: elemen,
  translateX: 200,
  easing: 'easeInOutQuad',
  duration: 2000,
  loop: true
});
```

```
// Seleksi elemen
let elemen = document.getElementById('animasi');

// Fungsi animasi fade
function fadeAnimasi() {
  let opacity = 0;
  let interval = setInterval(function() {
    if (opacity < 1) {
      elemen.style.opacity = opacity;
      opacity += 0.1;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

// Panggil animasi
fadeAnimasi();
```

Efek Animasi Slide
```
// Seleksi elemen
let elemen = document.getElementById('animasi');

// Fungsi animasi slide
function slideAnimasi() {
  let posisi = 0;
  let interval = setInterval(function() {
    if (posisi < 200) {
      elemen.style.transform = `translateX(${posisi}px)`;
      posisi += 10;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

// Panggil animasi
slideAnimasi();
```

Efek Animasi Zoom
```
// Seleksi elemen
let elemen = document.getElementById('animasi');

// Fungsi animasi zoom
function zoomAnimasi() {
  let skala = 1;
  let interval = setInterval(function() {
    if (skala < 2) {
      elemen.style.transform = `scale(${skala})`;
      skala += 0.1;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

// Panggil animasi
zoomAnimasi();
```

Efek Animasi Rotasi
```
// Seleksi elemen
let elemen = document.getElementById('animasi');

// Fungsi animasi rotasi
function rotasiAnimasi() {
  let sudut = 0;
  let interval = setInterval(function() {
    if (sudut < 360) {
      elemen.style.transform = `rotate(${sudut}deg)`;
      sudut += 10;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

// Panggil animasi
rotasiAnimasi();
```

Menggunakan Library AnimeJS
```
import anime from 'animejs';

// Seleksi elemen
let elemen = document.getElementById('animasi');

// Animasi dengan AnimeJS
anime({
  targets: elemen,
  translateX: 200,
  easing: 'easeInOutQuad',
  duration: 2000,
  loop: true
});
```
