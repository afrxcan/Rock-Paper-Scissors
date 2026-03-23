# 🕹️ RPS Arcade

A retro arcade-styled Rock Paper Scissors game built with HTML, CSS, and JavaScript.

## Project Structure

```
Rock-Paper-Scissors/
├── index.html   → Page structure and layout
├── style.css    → Retro arcade styling
├── script.js    → Game logic, sounds, animations
└── README.md    → You are here
```

## How to Run

No installs, no build tools. Just open `index.html` in your browser.

## Features

- 🎮 Rock, Paper, Scissors gameplay against a CPU opponent
- 🔊 Web Audio API sound effects — click, win, lose, draw, reset
- 🎵 Background music via online audio source
- 📊 Live scoreboard tracking player and CPU scores
- 📝 Battle log showing round history
- 🎬 Animations — button press bounce, winner pulse, loser shake

## What I Learned Building This

### HTML
- How to use the `audio` tag to play audio files
- `id` attributes for JS to reference specific elements
- `data-*` attributes (`data-choice`) to store metadata on elements

### CSS
- CSS custom properties (`--variables`) for a consistent color system
- `@keyframes` animations — `scale`, `translateX`, `translateY`
- Pseudo-classes — `:hover`, `:active` for interactive button states
- `transition` for smooth property changes
- `flexbox` for layout — `justify-content`, `align-items`, `flex-direction`
- `text-shadow` for neon glow effects

### JavaScript
- `document.getElementById` and `querySelectorAll`
- `addEventListener` for click events
- `dataset` property to read `data-` attributes
- `textContent` and `innerHTML`
- `classList.add/remove` for toggling CSS classes
- `setTimeout` and `setInterval` for timed actions
- `++` increment operator for score tracking
- Template literals (backticks + `${}`) for dynamic strings
- Web Audio API — `AudioContext`, `OscillatorNode`, `GainNode`
- Object as a data map (`BEATS`, `ICONS`) instead of long if/else chains

## Audio

Background music loads from an online source — requires an internet connection to play.
Sound effects are generated in-browser using the Web Audio API — work offline.

## Credits

**Ernest** — Developer
Built this project from scratch as part of my IT course (Jan–Jul 2026).
Wrote all the HTML, CSS,and JavaScript step by step.

**Claude (Anthropic)** — Teaching Assistant
Guided the build concept by concept — explained every line before it was written,
caught bugs, answered questions, and never just handed over the code. It especially
helped me understand the Web Audio API and style the project.


**Resources**
- [Google Fonts](https://fonts.google.com) — Press Start 2P font (if you end up adding it)
- [OpenGameArt](https://opengameart.org) — Background music
- [MDN Web Docs](https://developer.mozilla.org) — Web Audio API reference
- [Mixkit](https://mixkit.co) — Sound effects reference
