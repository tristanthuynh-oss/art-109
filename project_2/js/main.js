
document.addEventListener('DOMContentLoaded', () => {
  // ---------- Helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const on = (el, evt, fn, opts) => el && el.addEventListener(evt, fn, opts);
  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

  // Fade audio to target volume, then optionally pause at 0
  function fadeAudio(audio, { to = 1, step = 0.05, interval = 100, pauseAtZero = false }) {
    if (!audio) return;
    to = clamp(to);
    clearInterval(audio.__fadeTimer); // avoid stacking intervals
    audio.__fadeTimer = setInterval(() => {
      const diff = to - audio.volume;
      if (Math.abs(diff) <= step) {
        audio.volume = to;
        clearInterval(audio.__fadeTimer);
        if (pauseAtZero && audio.volume === 0) audio.pause();
        return;
      }
      audio.volume = clamp(audio.volume + Math.sign(diff) * step);
    }, interval);
  }

  function playSoundThenNavigate(audio, url) {
    if (!audio) {
      window.location.href = url;
      return;
    }
    audio.currentTime = 0;
    // Avoid attaching multiple onended handlers
    audio.onended = null;
    audio.play().catch(() => {
      // If autoplay is blocked, just navigate.
      window.location.href = url;
    });
    audio.onended = () => (window.location.href = url);
  }

  // ---------- Elements ----------
  const startScreen   = $('#start-screen');
  const startDesc     = $('#start-desc');
  const startBtn      = $('#start-btn');
  const introAudio    = $('#intro-audio');
  const music1Audio   = $('#music1-audio');
  const buttonAudio   = $('#button-audio');

  const fredbear      = $('#fredbear');
  const reliefSound   = $('#relief-button-sound');

  const btnLightRoom  = $('#btn-light-room');
  const btnDownstairs = $('#btn-downstairs');
  const downstairsFade= $('#downstairs-fade');
  const laundryBasket = $('#laundry-basket');
  const SPOOKY_BASKET_SRC = 'project_2/assets/images/laundrybasket_unknown.png';
  const NORMAL_BASKET_SRC = 'project_2/assets/images/laundrybasket.png';
  // ---------- Start sequence ----------
  if (startScreen) {
    startScreen.classList.add('visible');

    // Staggered reveals
    setTimeout(() => {
      startDesc?.classList.add('visible');
      setTimeout(() => {
        if (startBtn) {
          startBtn.classList.remove('hidden-btn');
          startBtn.classList.add('visible-btn');
        }
      }, 2000);
    }, 2000);

    // Try to play intro audio (may be blocked until user interaction by browser)
    if (introAudio) {
      introAudio.volume = 0.4; // pick one consistent starting volume
      introAudio.play().catch(() => {
        // Autoplay blocked; will start after first user interaction
      });
    }
  }

  // ---------- Start button click ----------
  on(startBtn, 'click', () => {
    // Button click sound
    if (buttonAudio) {
      buttonAudio.currentTime = 0;
      buttonAudio.play().catch(() => {});
    }

    // Fade out start screen
    if (startScreen) {
      startScreen.classList.remove('visible');
      startScreen.classList.add('fade-out');
      setTimeout(() => (startScreen.style.display = 'none'), 1000);
    }

    // Audio crossfade: intro -> music1
    if (music1Audio) {
      music1Audio.volume = 0;
      music1Audio.play().catch(() => {});
      fadeAudio(music1Audio, { to: 0.7, step: 0.05, interval: 100 });
    }
    if (introAudio) {
      fadeAudio(introAudio, { to: 0, step: 0.05, interval: 100, pauseAtZero: true });
    }
  });

  // ---------- Fredbear interactions ----------
  on(fredbear, 'mouseenter', () => {
    fredbear.classList.add('jiggle');
    setTimeout(() => fredbear.classList.remove('jiggle'), 400);
  });

  on(fredbear, 'click', () => {
    if (reliefSound) {
      reliefSound.currentTime = 0;
      reliefSound.play().catch(() => {});
    }
    fredbear.src = './assets/images/fnafbear.png';
  });

  // ---------- Light room navigation ----------
  const lightRoomURL = 'https://youtu.be/6nvMMIxV7hc?si=0Y4I-7p5fo9vXfCh&t=11';
  on(btnLightRoom, 'click', (e) => {
    e.preventDefault();
    playSoundThenNavigate(buttonAudio, lightRoomURL);
  });

  // ---------- Downstairs transition ----------
  const downstairsBtn = document.getElementById('btn-downstairs');
if (downstairsBtn) {
  downstairsBtn.addEventListener('click', () => {
    // Change background
    document.body.classList.add('downstairs');

    // Optional fade effect
    const fadeDiv = document.getElementById('downstairs-fade');
    if (fadeDiv) {
      fadeDiv.classList.add('faded');
      setTimeout(() => (fadeDiv.style.display = 'none'), 1000);
    }

    // Remove Fredbear if present
    const fredbear = document.getElementById('fredbear');
    if (fredbear) fredbear.remove();

    // Spawn spooky laundry basket
    spawnSpookyBasket();
    spawnSpookyPicture();
    // --- CHANGE BUTTON TEXTS & BEHAVIOR ---
    const leftBtn = document.getElementById('btn-light-room');
    const rightBtn = document.getElementById('btn-downstairs');

    if (leftBtn && rightBtn) {
      // Change labels
      leftBtn.textContent = 'Go to the Kitchen';
      rightBtn.textContent = 'Go back to the Hallway';

      // Reset any previous click handlers
      leftBtn.replaceWith(leftBtn.cloneNode(true));
      rightBtn.replaceWith(rightBtn.cloneNode(true));

      // Re-select (since we replaced them)
      const newLeftBtn = document.getElementById('btn-light-room');
      const newRightBtn = document.getElementById('btn-downstairs');

      const buttonAudio = document.getElementById('button-audio');

      // New button behaviors
      newLeftBtn.addEventListener('click', () => {
        // Play click sound
        if (buttonAudio) {
          buttonAudio.currentTime = 0;
          buttonAudio.play().catch(() => {});
        }
        // Navigate (example)
        alert('You walk into the Kitchen...');
        // window.location.href = 'kitchen.html'; // optional future page
      });

      newRightBtn.addEventListener('click', () => {
        if (buttonAudio) {
          buttonAudio.currentTime = 0;
          buttonAudio.play().catch(() => {});
        }
        // Go back upstairs (example)
        alert('Can\'t go back now...');
        // Optionally reset background:
        // document.body.classList.remove('downstairs');
      });
    }
  });
}

// ------------------------------------------------------------
// Spooky Laundry Basket feature
// ------------------------------------------------------------
function spawnSpookyBasket() {
  const SPOOKY_BASKET_SRC = './assets/images/laundrybasket_unknown.png';
  const NORMAL_BASKET_SRC = './assets/images/laundrybasket.png';

  // Don't spawn twice
  if (document.getElementById('laundry-basket')) return;

  const basket = document.createElement('img');
  basket.id = 'laundry-basket';
  basket.className = 'laundry-basket';
  basket.src = SPOOKY_BASKET_SRC;
  basket.alt = 'Laundry basket';
  document.body.appendChild(basket);

  // Hover jiggle (like Fredbear)
  basket.addEventListener('mouseenter', () => {
    basket.classList.add('jiggle');
    setTimeout(() => basket.classList.remove('jiggle'), 400);
  });

  // Click -> play button sound + swap to normal basket
  basket.addEventListener('click', () => {
    // Play button sound
    const buttonAudio = document.getElementById('button-audio');
    if (buttonAudio) {
      buttonAudio.currentTime = 0;
      buttonAudio.play().catch(() => {}); // ignore autoplay errors
    }

    // Change image
    basket.src = NORMAL_BASKET_SRC;

    // Small jiggle feedback
    basket.classList.add('jiggle');
    setTimeout(() => basket.classList.remove('jiggle'), 400);
  });
}

// --- Downstairs transition (replace your existing handler with this) ---
document.getElementById('btn-downstairs').addEventListener('click', () => {
  // Remove Fredbear if present
  const fredbear = document.getElementById('fredbear');
  if (fredbear) fredbear.remove();

  // Change background
  document.body.classList.add('downstairs');

  // Fade out overlay
  const fadeDiv = document.getElementById('downstairs-fade');
  if (fadeDiv) {
    // show overlay immediately, then fade away
    fadeDiv.classList.remove('faded');
    // force a reflow so the transition applies when we add 'faded'
    // (helps if user has navigated before)
    void fadeDiv.offsetWidth;
    fadeDiv.classList.add('faded');
    setTimeout(() => { fadeDiv.style.display = 'none'; }, 1000);
  }

  // Spawn the spooky basket after the background switches
  spawnSpookyBasket();
});

  // ---------- Choice button clicks play sound ----------
  $$('.choice-buttons button').forEach((btn) => {
    on(btn, 'click', () => {
      if (!buttonAudio) return;
      buttonAudio.currentTime = 0;
      buttonAudio.play().catch(() => {});
    });
  });
});

// --- CONFIG: update these paths to match your assets ---
const SPOOKY_PICTURE_SRC = './assets/images/framedphoto_unknown.png';
const NORMAL_PICTURE_SRC = './assets/images/framedphoto.png';

// Spawn the spooky framed picture in the downstairs scene (top-right)
function spawnSpookyPicture() {
  // prevent duplicates
  if (document.getElementById('framed-picture')) return;

  const pic = document.createElement('img');
  pic.id = 'framed-picture';
  pic.className = 'framed-picture slide-in';
  pic.src = SPOOKY_PICTURE_SRC;
  pic.alt = 'Framed picture';
  document.body.appendChild(pic);

  // hover jiggle (same as basket/fredbear)
  pic.addEventListener('mouseenter', () => {
    pic.classList.add('jiggle');
    setTimeout(() => pic.classList.remove('jiggle'), 400);
  });

  // click -> (optional sound) then swap to normal picture
  pic.addEventListener('click', () => {
    const buttonAudio = document.getElementById('button-audio');
    if (buttonAudio) {
      buttonAudio.currentTime = 0;
      buttonAudio.play().catch(() => {});
    }
    pic.src = NORMAL_PICTURE_SRC;
    pic.classList.add('jiggle');
    setTimeout(() => pic.classList.remove('jiggle'), 400);
  });
}