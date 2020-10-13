const spells = {
  'acid-splash': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/acid-splash.gif'),
    description: [require('../resources/spell-gifs/0/acid-splash-desc.jpg')]
  },
  'fire-bolt': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/fire-bolt.gif'),
    description: [require('../resources/spell-gifs/0/fire-bolt-desc.jpg')]
  },
  friends: {
    level: 0,
    gif: false,
    'if-not-gif': {}
  },
  light: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/light.gif'),
    description: [require('../resources/spell-gifs/0/light-desc.jpg')]
  },
  'chromatic-orb': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  'colour-spray': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/colour-spray.gif'),
    description: [require('../resources/spell-gifs/1/colour-spray-desc.jpg')]
  },
  identify: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/identify.gif'),
    description: [require('../resources/spell-gifs/1/identify-desc.jpg')]
  },
  'ray-of-sickness': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  'arcane-lock': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/arcane-lock.gif'),
    description: [require('../resources/spell-gifs/2/arcane-lock-desc.jpg')]
  },
  'cloud-of-daggers': {
    level: 2,
    gif: false,
    'if-not-gif': {}
  },
  'scorching-ray': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/scorching-ray.gif'),
    description: [require('../resources/spell-gifs/2/scorching-ray-desc.jpg')]
  },
  'glyph-of-warding': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/glyph-of-warding.gif'),
    description: [
      require('../resources/spell-gifs/3/glyph-of-warding1-desc.jpg'),
      require('../resources/spell-gifs/3/glyph-of-warding2-desc.jpg')
    ]
  }
};

export default spells;
