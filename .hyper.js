module.exports = {
  config: {
    fontSize: "13px",
    fontFamily: "Inconsolata",

    modifiersKey: {
      cmdIsMeta: false,
      altIsMeta: true
    },

    hyperBorder: {
      borderColors: [ "random", "random" ],
      borderWidth: "2px",
      animate: true
    }
  },

  plugins: [
    "hyperpower",
    "hyperterm-themed-scrollbar",
    "hyper-simple-highlight-active-session",
    "hyperborder",
    "hyperterm-bold-tab",
    "hyper-blink",
    "hyperterm-paste",
    "hyperlinks",
    "hyperterm-cursor",
    "hyperpunk"
  ]
};
