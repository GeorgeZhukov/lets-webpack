const Reveal = require('imports-loader?define=>false!reveal.js')
import "reveal.js/css/reveal.css";
import "reveal.js/css/theme/solarized.css";
import "highlight.js/styles/solarized-dark.css";

Reveal.initialize({
  history: true,
  controls: true,
  progress: true,
  slideNumber: true,
  keyboard: true,
  overview: true,
  vertical: true,
  touch: true,
  loop: false,
});

const hljs = require("highlight.js");
hljs.initHighlightingOnLoad();

