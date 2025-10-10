document.addEventListener('DOMContentLoaded', () => {
  /* =========================
     Query helpers
     ========================= */
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const on = (el, evt, fn, opts) => el && el.addEventListener(evt, fn, opts);

  /* =========================
     Audio helpers
     ========================= */
  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

  function fadeAudio(audio, { to = 1, step = 0.05, interval = 100, pauseAtZero = false }) {
    if (!audio) return;
    to = clamp(to);
    clearInterval(audio.__fadeTimer);
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
    audio.onended = null;
    audio.play().catch(() => { window.location.href = url; });
    audio.onended = () => (window.location.href = url);
  }

  const playClick = () => {
    const btn = $('#button-audio');
    if (!btn) return;
    btn.currentTime = 0;
    btn.play().catch(() => {});
  };

  /* =========================
     Elements / Constants
     ========================= */
  const startScreen    = $('#start-screen');
  const startDesc      = $('#start-desc');
  const startBtn       = $('#start-btn');
  const introAudio     = $('#intro-audio');
  const music1Audio    = $('#music1-audio');
  const buttonAudio    = $('#button-audio');
  const reliefSound    = $('#relief-button-sound');

  const btnLightRoom   = $('#btn-light-room');   // LEFT
  const btnDownstairs  = $('#btn-downstairs');   // RIGHT
  const downstairsFade = $('#downstairs-fade');

  const BG_CLASSES = ['downstairs', 'kitchen', 'hallway'];
  const KITCHEN_BG_CLASS = 'kitchen';

  // Images
  const SPOOKY_BASKET_SRC   = './assets/images/laundrybasket_unknown.png';
  const NORMAL_BASKET_SRC   = './assets/images/laundrybasket.png';
  const SPOOKY_PICTURE_SRC  = './assets/images/framedphoto_unknown.png';
  const NORMAL_PICTURE_SRC  = './assets/images/framedphoto.png';
  const SPOOKY_CAT_SRC      = './assets/images/cat_unknown.png';
  const NORMAL_CAT_SRC      = './assets/images/cat.png';
  const SPOOKY_FRUIT_SRC    = './assets/images/fruitbasket_unknown.png';
  const NORMAL_FRUIT_SRC    = './assets/images/fruitbasket.png';

  /* =========================
     DOM/Scene utilities
     ========================= */
  const changeBackground = (next) => {
    document.body.classList.remove(...BG_CLASSES);
    document.body.classList.add(next);
  };

  const removeIfExists = (id) => {
    const el = document.getElementById(id);
    if (el) el.remove();
  };

  // Clone/replace to wipe old listeners
  const resetButton = (btn) => {
    const clone = btn.cloneNode(true);
    btn.parentNode.replaceChild(clone, btn);
    return clone;
  };

  const setButtons = ({ leftText, leftOnClick, rightText, rightOnClick }) => {
    let leftBtn  = document.getElementById('btn-light-room');
    let rightBtn = document.getElementById('btn-downstairs');
    if (!leftBtn || !rightBtn) return;

    leftBtn  = resetButton(leftBtn);
    rightBtn = resetButton(rightBtn);

    leftBtn.textContent  = leftText;
    rightBtn.textContent = rightText;

    on(leftBtn,  'click', (e) => { e.preventDefault(); playClick(); leftOnClick && leftOnClick(); });
    on(rightBtn, 'click', (e) => { e.preventDefault(); playClick(); rightOnClick && rightOnClick(); });
  };

  // Small helper to reliably replay a CSS animation class
  const replayAnim = (el, cls) => {
    el.classList.remove(cls);
    void el.offsetWidth; // reflow
    el.classList.add(cls);
  };

  /* =========================
     Interactable spawners
     ========================= */

  function spawnSpookyBasket() {
    if (document.getElementById('laundry-basket')) return;
    const basket = document.createElement('img');
    basket.id = 'laundry-basket';
    basket.className = 'laundry-basket';
    basket.src = SPOOKY_BASKET_SRC;
    basket.alt = 'Laundry basket';
    document.body.appendChild(basket);

    on(basket, 'mouseenter', () => replayAnim(basket, 'jiggle'));
    on(basket, 'click', () => {
      (reliefSound || buttonAudio)?.play?.().catch(() => {});
      basket.src = NORMAL_BASKET_SRC;
      replayAnim(basket, 'jiggle');
    });
  }

  function spawnSpookyPicture() {
    if (document.getElementById('framed-picture')) return;
    const pic = document.createElement('img');
    pic.id = 'framed-picture';
    pic.className = 'framed-picture slide-in';
    pic.src = SPOOKY_PICTURE_SRC;
    pic.alt = 'Framed picture';
    document.body.appendChild(pic);

    on(pic, 'mouseenter', () => replayAnim(pic, 'jiggle')); // uses picture-specific jiggle in CSS
    on(pic, 'click', () => {
      (reliefSound || buttonAudio)?.play?.().catch(() => {});
      pic.src = NORMAL_PICTURE_SRC;
      replayAnim(pic, 'jiggle');
    });
    on(pic, 'animationend', (e) => { if (e.animationName === 'spooky-enter') pic.classList.remove('slide-in'); });
  }

  function spawnSpookyCat() {
    if (document.getElementById('spooky-cat')) return;
    const cat = document.createElement('img');
    cat.id = 'spooky-cat';
    cat.className = 'spooky-cat slide-in';
    cat.src = SPOOKY_CAT_SRC;
    cat.alt = 'Spooky cat';
    document.body.appendChild(cat);

    on(cat, 'mouseenter', () => replayAnim(cat, 'jiggle'));
    on(cat, 'click', () => {
      (reliefSound || buttonAudio)?.play?.().catch(() => {});
      cat.src = NORMAL_CAT_SRC;
      replayAnim(cat, 'jiggle');
    });
    on(cat, 'animationend', (e) => { if (e.animationName === 'spooky-enter') cat.classList.remove('slide-in'); });
  }

  function spawnSpookyFruitBasket() {
    if (document.getElementById('fruit-basket')) return;
    const fruit = document.createElement('img');
    fruit.id = 'fruit-basket';
    fruit.className = 'fruit-basket slide-in';
    fruit.src = SPOOKY_FRUIT_SRC;
    fruit.alt = 'Spooky fruit basket';
    document.body.appendChild(fruit);

    on(fruit, 'mouseenter', () => replayAnim(fruit, 'jiggle')); // custom jiggle preserves translateY(-50%)
    on(fruit, 'click', () => {
      (reliefSound || buttonAudio)?.play?.().catch(() => {});
      fruit.src = NORMAL_FRUIT_SRC;
      replayAnim(fruit, 'jiggle');
    });
    on(fruit, 'animationend', (e) => { if (e.animationName === 'spooky-enter') fruit.classList.remove('slide-in'); });
  }

  /* =========================
     Scenes
     ========================= */

  function enterDownstairs() {
    removeIfExists('fredbear');

    if (downstairsFade) {
      downstairsFade.classList.add('faded');
      setTimeout(() => (downstairsFade.style.display = 'none'), 1000);
    }

    changeBackground('downstairs');

    // downstairs spawns
    spawnSpookyBasket();
    spawnSpookyPicture();

    setButtons({
      leftText:  'Go to the Kitchen',
      leftOnClick: enterKitchen,
      rightText: 'Go back to the Hallway',
      rightOnClick: () => alert("can't go back now...")
    });
  }

  function enterKitchen() {
    changeBackground(KITCHEN_BG_CLASS);

    // kitchen spawns
    spawnSpookyCat();
    spawnSpookyFruitBasket();

    // remove downstairs items
    removeIfExists('laundry-basket');
    removeIfExists('framed-picture');

    setButtons({
      leftText:  'Turn around',
      leftOnClick: () => alert("I'm so close, and i'm so thirsty"),
      rightText: 'Open the Fridge',
      rightOnClick: openFridge
    });
  }

  function openFridge() {
    // fade out bg music
    try { if (music1Audio) fadeAudio(music1Audio, { to: 0, step: 0.05, interval: 100, pauseAtZero: true }); } catch {}

    // play win music (win-audio preferred; fallback to music2-audio if you wired it that way)
    const winAudio = $('#win-audio') || $('#music2-audio');
    if (winAudio) {
      winAudio.currentTime = 0;
      winAudio.volume = 0.8;
      winAudio.play().catch(() => {});
    }

    // show overlay + reveal drink
    $('#win-screen')?.classList.add('visible');
    $('#win-drink')?.classList.add('visible');

    // clear interactables behind overlay
    ['laundry-basket', 'framed-picture', 'spooky-cat', 'fruit-basket'].forEach(removeIfExists);

    // restart -> reload
    const restartBtn = $('#restart-btn');
    if (restartBtn) {
      const r = resetButton(restartBtn);
      on(r, 'click', () => {
        try { winAudio?.pause?.(); } catch {}
        window.location.reload();
      });
    }
  }

  /* =========================
     Start / Intro
     ========================= */

  // Show start screen & attempt intro audio
  if (startScreen) {
    startScreen.classList.add('visible');

    setTimeout(() => {
      startDesc?.classList.add('visible');
      setTimeout(() => {
        startBtn?.classList.remove('hidden-btn');
        startBtn?.classList.add('visible-btn');
      }, 2000);
    }, 2000);

    if (introAudio) {
      introAudio.volume = 0.4;
      introAudio.play().catch(() => {}); // may be blocked until user gesture
    }
  }

  on(startBtn, 'click', () => {
    playClick();

    startScreen?.classList.remove('visible');
    startScreen?.classList.add('fade-out');
    setTimeout(() => { if (startScreen) startScreen.style.display = 'none'; }, 1000);

    if (music1Audio) {
      music1Audio.volume = 0;
      music1Audio.play().catch(() => {});
      fadeAudio(music1Audio, { to: 0.7, step: 0.05, interval: 100 });
    }
    if (introAudio) fadeAudio(introAudio, { to: 0, step: 0.05, interval: 100, pauseAtZero: true });
  });

  /* =========================
     Other UI wiring
     ========================= */

  // “Room with the Light” external link
  const lightRoomURL = 'https://youtu.be/6nvMMIxV7hc?si=0Y4I-7p5fo9vXfCh&t=11';
  on(btnLightRoom, 'click', (e) => {
    e.preventDefault();
    playSoundThenNavigate(buttonAudio, lightRoomURL);
  });

  // Go Downstairs → scene entry
  on(btnDownstairs, 'click', () => {
    changeBackground('downstairs');
    if (downstairsFade) {
      downstairsFade.classList.add('faded');
      setTimeout(() => (downstairsFade.style.display = 'none'), 1000);
    }
    enterDownstairs();
  });

  // All choice buttons click sound
  $$('.choice-buttons button').forEach((btn) => {
    on(btn, 'click', () => {
      if (!buttonAudio) return;
      buttonAudio.currentTime = 0;
      buttonAudio.play().catch(() => {});
    });
  });
});
