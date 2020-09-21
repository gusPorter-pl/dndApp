const spells = {
  'acid-splash': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/acid-splash.gif'),
    description: require('../resources/spell-gifs/0/acid-splash-desc.jpg')
  },
  'blade-ward': {
    level: 0,
    gif: false,
    'if-not-gif': {}
  },
  'chill-touch': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/chill-touch.gif'),
    description: require('../resources/spell-gifs/0/chill-touch-desc.jpg')
  },
  'dancing-lights': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/dancing-lights.gif'),
    description: require('../resources/spell-gifs/0/dancing-lights-desc.jpg')
  },
  druidcraft: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/druidcraft.gif'),
    description: require('../resources/spell-gifs/0/druidcraft-desc.jpg')
  },
  'eldritch-blast': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/eldritch-blast.gif'),
    description: require('../resources/spell-gifs/0/eldritch-blast-desc.jpg')
  },
  'fire-bolt': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/fire-bolt.gif'),
    description: require('../resources/spell-gifs/0/fire-bolt-desc.jpg')
  },
  friends: {
    level: 0,
    gif: false,
    'if-not-gif': {}
  },
  guidance: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/guidance.gif'),
    description: require('../resources/spell-gifs/0/guidance-desc.jpg')
  },
  light: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/light.gif'),
    description: require('../resources/spell-gifs/0/light-desc.jpg')
  },
  'mage-hand': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/mage-hand.gif'),
    description: require('../resources/spell-gifs/0/mage-hand-desc.jpg')
  },
  mending: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/mending.gif'),
    description: require('../resources/spell-gifs/0/mending-desc.jpg')
  },
  message: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/message.gif'),
    description: require('../resources/spell-gifs/0/message-desc.jpg')
  },
  'minor-illusion': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/minor-illusion.gif'),
    description: require('../resources/spell-gifs/0/minor-illusion-desc.jpg')
  },
  'poison-spray': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/poison-spray.gif'),
    description: require('../resources/spell-gifs/0/poison-spray-desc.jpg')
  },
  prestidigitation: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/prestidigitation.gif'),
    description: require('../resources/spell-gifs/0/prestidigitation-desc.jpg')
  },
  'produce-flame': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/produce-flame.gif'),
    description: require('../resources/spell-gifs/0/produce-flame-desc.jpg')
  },
  'ray-of-frost': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/ray-of-frost.gif'),
    description: require('../resources/spell-gifs/0/ray-of-frost-desc.jpg')
  },
  resistance: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/resistance.gif'),
    description: require('../resources/spell-gifs/0/resistance-desc.jpg')
  },
  'sacred-flame': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/sacred-flame.gif'),
    description: require('../resources/spell-gifs/0/sacred-flame-desc.jpg')
  },
  shillelagh: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/shillelagh.gif'),
    description: require('../resources/spell-gifs/0/shillelagh-desc.jpg')
  },
  'shocking-grasp': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/shocking-grasp.gif'),
    description: require('../resources/spell-gifs/0/shocking-grasp-desc.jpg')
  },
  'spare-the-dying': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/spare-the-dying.gif'),
    description: require('../resources/spell-gifs/0/spare-the-dying-desc.jpg')
  },
  thaumaturgy: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/thaumaturgy.gif'),
    description: require('../resources/spell-gifs/0/thaumaturgy-desc.jpg')
  },
  'thorn-whip': {
    level: 0,
    gif: false,
    'if-not-gif': {}
  },
  'true-strike': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/true-strike.gif'),
    description: require('../resources/spell-gifs/0/true-strike-desc.jpg')
  },
  'vicious-mockery': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/vicious-mockery.gif'),
    description: require('../resources/spell-gifs/0/vicious-mockery-desc.jpg')
  },
  alarm: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/alarm.gif'),
    description: require('../resources/spell-gifs/1/alarm-desc.jpg')
  },
  'animal-friendship': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/animal-friendship.gif'),
    description: require('../resources/spell-gifs/1/animal-friendship-desc.jpg')
  },
  'armour-of-agathys': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  'arms-of-hadar': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  bane: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/bane.gif'),
    description: require('../resources/spell-gifs/1/bane-desc.jpg')
  },
  bless: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/bless.gif'),
    description: require('../resources/spell-gifs/1/bless-desc.jpg')
  },
  'burning-hands': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/burning-hands.gif'),
    description: require('../resources/spell-gifs/1/burning-hands-desc.jpg')
  },
  'charm-person': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/charm-person.gif'),
    description: require('../resources/spell-gifs/1/charm-person-desc.jpg')
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
    description: require('../resources/spell-gifs/1/colour-spray-desc.jpg')
  },
  command: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/command.gif'),
    description: require('../resources/spell-gifs/1/command-desc.jpg')
  },
  'compelled-duel': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  'comprehend-languages': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/comprehend-languages.gif'),
    description: require('../resources/spell-gifs/1/comprehend-languages-desc.jpg')
  },
  'create-or-destroy-water': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/create-or-destroy-water.gif'),
    description: require('../resources/spell-gifs/1/create-or-destroy-water-desc.jpg')
  },
  'cure-wounds': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/cure-wounds.gif'),
    description: require('../resources/spell-gifs/1/cure-wounds-desc.jpg')
  },
  'detect-evil-and-good': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/detect-evil-and-good.gif'),
    description: require('../resources/spell-gifs/1/detect-evil-and-good-desc.jpg')
  },
  'detect-magic': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/detect-magic.gif'),
    description: require('../resources/spell-gifs/1/detect-magic-desc.jpg')
  },
  'detect-poison-and-disease': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/detect-poison-and-disease.gif'),
    description: require('../resources/spell-gifs/1/detect-poison-and-disease-desc.jpg')
  },
  'disguise-self': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/disguise-self.gif'),
    description: require('../resources/spell-gifs/1/disguise-self-desc.jpg')
  },
  'dissonant-whispers': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  'divine-favour': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/divine-favour.gif'),
    description: require('../resources/spell-gifs/1/divine-favour-desc.jpg')
  },
  'ensnaring-strike': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  entangle: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/entangle.gif'),
    description: require('../resources/spell-gifs/1/entangle-desc.jpg')
  },
  'expeditious-retreat': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/expeditious-retreat.gif'),
    description: require('../resources/spell-gifs/1/expeditious-retreat-desc.jpg')
  },
  'faerie-fire': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/faerie-fire.gif'),
    description: require('../resources/spell-gifs/1/faerie-fire-desc.jpg')
  },
  'false-life': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/false-life.gif'),
    description: require('../resources/spell-gifs/1/false-life-desc.jpg')
  },
  'feather-fall': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/feather-fall.gif'),
    description: require('../resources/spell-gifs/1/feather-fall-desc.jpg')
  },
  'find-familiar': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/find-familiar.gif'),
    description: require('../resources/spell-gifs/1/find-familiar-desc.jpg')
  },
  'fog-cloud': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/fog-cloud.gif'),
    description: require('../resources/spell-gifs/1/fog-cloud-desc.jpg')
  },
  goodberry: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/goodberry.gif'),
    description: require('../resources/spell-gifs/1/goodberry-desc.jpg')
  },
  grease: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/grease.gif'),
    description: require('../resources/spell-gifs/1/grease-desc.jpg')
  },
  'guiding-bolt': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/guiding-bolt.gif'),
    description: require('../resources/spell-gifs/1/guiding-bolt-desc.jpg')
  },
  'hail-of-thorns': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  'healing-word': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/healing-word.gif'),
    description: require('../resources/spell-gifs/1/healing-word-desc.jpg')
  },
  'hellish-rebuke': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/hellish-rebuke.gif'),
    description: require('../resources/spell-gifs/1/hellish-rebuke-desc.jpg')
  },
  heroism: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/heroism.gif'),
    description: require('../resources/spell-gifs/1/heroism-desc.jpg')
  },
  hex: {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  "hunter's-mark": {
    level: 1,
    gif: true,
    image: require("../resources/spell-gifs/1/hunter's-mark.gif"),
    description: require("../resources/spell-gifs/1/hunter's-mark-desc.jpg")
  },
  identify: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/identify.gif'),
    description: require('../resources/spell-gifs/1/identify-desc.jpg')
  },
  'illusory-script': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/illusory-script.gif'),
    description: require('../resources/spell-gifs/1/illusory-script-desc.jpg')
  },
  'inflict-wounds': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/inflict-wounds.gif'),
    description: require('../resources/spell-gifs/1/inflict-wounds-desc.jpg')
  },
  jump: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/jump.gif'),
    description: require('../resources/spell-gifs/1/jump-desc.jpg')
  },
  longstrider: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/longstrider.gif'),
    description: require('../resources/spell-gifs/1/longstrider-desc.jpg')
  },
  'mage-armour': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/mage-armour.gif'),
    description: require('../resources/spell-gifs/1/mage-armour-desc.jpg')
  },
  'magic-missile': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/magic-missile.gif'),
    description: require('../resources/spell-gifs/1/magic-missile-desc.jpg')
  },
  'protection-from-evil-and-good': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/protection-from-evil-and-good.gif'),
    description: require('../resources/spell-gifs/1/protection-from-evil-and-good-desc.jpg')
  },
  'purify-food-and-drink': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/purify-food-and-drink.gif'),
    description: require('../resources/spell-gifs/1/purify-food-and-drink-desc.jpg')
  },
  'ray-of-sickness': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  sanctuary: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/sanctuary.gif'),
    description: require('../resources/spell-gifs/1/sanctuary-desc.jpg')
  },
  'searing-smite': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  shield: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/shield.gif'),
    description: require('../resources/spell-gifs/1/shield-desc.jpg')
  },
  'shield-of-faith': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/shield-of-faith.gif'),
    description: require('../resources/spell-gifs/1/shield-of-faith-desc.jpg')
  },
  'silent-image': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/silent-image.gif'),
    description: require('../resources/spell-gifs/1/silent-image-desc.jpg')
  },
  sleep: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/sleep.gif'),
    description: require('../resources/spell-gifs/1/sleep-desc.jpg')
  },
  'speak-with-animals': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/speak-with-animals.gif'),
    description: require('../resources/spell-gifs/1/speak-with-animals-desc.jpg')
  },
  "tasha's-hideous-laughter": {
    level: 1,
    gif: true,
    image: require("../resources/spell-gifs/1/tasha's-hideous-laughter.gif"),
    description: require("../resources/spell-gifs/1/tasha's-hideous-laughter-desc.jpg")
  },
  "tenser's-floating-disk": {
    level: 1,
    gif: true,
    image: require("../resources/spell-gifs/1/tenser's-floating-disk.gif"),
    description: require("../resources/spell-gifs/1/tenser's-floating-disk-desc.jpg")
  },
  'thunderous-smite': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  thunderwave: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/thunderwave.gif'),
    description: require('../resources/spell-gifs/1/thunderwave-desc.jpg')
  },
  'unseen-servant': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/unseen-servant.gif'),
    description: require('../resources/spell-gifs/1/unseen-servant-desc.jpg')
  },
  'witch-bolt': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  'wrathful-smite': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  aid: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/aid.gif'),
    description: require('../resources/spell-gifs/2/aid-desc.jpg')
  },
  'alter-self': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/alter-self.gif'),
    description: require('../resources/spell-gifs/2/alter-self-desc.jpg')
  },
  'animal-messenger': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/animal-messenger.gif'),
    description: require('../resources/spell-gifs/2/animal-messenger-desc.jpg')
  },
  'arcane-lock': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/arcane-lock.gif'),
    description: require('../resources/spell-gifs/2/arcane-lock-desc.jpg')
  },
  augury: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/augury.gif'),
    description: require('../resources/spell-gifs/2/augury-desc.jpg')
  },
  barkskin: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/barkskin.gif'),
    description: require('../resources/spell-gifs/2/barkskin-desc.jpg')
  },
  'beast-sense': {
    level: 2,
    gif: false,
    'if-not-gif': {}
  },
  'blindness-and-deafness': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/blindness-and-deafness.gif'),
    description: require('../resources/spell-gifs/2/blindness-and-deafness-desc.jpg')
  },
  blur: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/blur.gif'),
    description: require('../resources/spell-gifs/2/blur-desc.jpg')
  },
  'branding-smite': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/branding-smite.gif'),
    description: require('../resources/spell-gifs/2/branding-smite-desc.jpg')
  },
  'calm-emotions': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/calm-emotions.gif'),
    description: require('../resources/spell-gifs/2/calm-emotions-desc.jpg')
  },
  'cloud-of-daggers': {
    level: 2,
    gif: false,
    'if-not-gif': {}
  },
  'continual-flame': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/continual-flame.gif'),
    description: require('../resources/spell-gifs/2/continual-flame-desc.jpg')
  },
  'cordon-of-arrows': {
    level: 2,
    gif: false,
    'if-not-gif': {}
  },
  'crown-of-madness': {
    level: 2,
    gif: false,
    'if-not-gif': {}
  },
  darkness: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/darkness.gif'),
    description: require('../resources/spell-gifs/2/darkness-desc.jpg')
  },
  darkvision: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/darkvision.gif'),
    description: require('../resources/spell-gifs/2/darkvision-desc.jpg')
  },
  'detect-thoughts': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/detect-thoughts.gif'),
    description: require('../resources/spell-gifs/2/detect-thoughts-desc.jpg')
  },
  'enhance-ability': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/enhance-ability.gif'),
    description: require('../resources/spell-gifs/2/enhance-ability-desc.jpg')
  },
  'enlarge-and-reduce': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/enlarge-and-reduce.gif'),
    description: require('../resources/spell-gifs/2/enlarge-and-reduce-desc.jpg')
  },
  enthrall: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/enthrall.gif'),
    description: require('../resources/spell-gifs/2/enthrall-desc.jpg')
  },
  'find-steed': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/find-steed.gif'),
    description: require('../resources/spell-gifs/2/find-steed-desc.jpg')
  },
  'find-traps': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/find-traps.gif'),
    description: require('../resources/spell-gifs/2/find-traps-desc.jpg')
  },
  'flame-blade': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/flame-blade.gif'),
    description: require('../resources/spell-gifs/2/flame-blade-desc.jpg')
  },
  'flaming-sphere': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/flaming-sphere.gif'),
    description: require('../resources/spell-gifs/2/flaming-sphere-desc.jpg')
  },
  'gentle-repose': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/gentle-repose.gif'),
    description: require('../resources/spell-gifs/2/gentle-repose-desc.jpg')
  },
  'gust-of-wind': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/gust-of-wind.gif'),
    description: require('../resources/spell-gifs/2/gust-of-wind-desc.jpg')
  },
  'heat-metal': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/heat-metal.gif'),
    description: require('../resources/spell-gifs/2/heat-metal-desc.jpg')
  },
  'hold-person': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/hold-person.gif'),
    description: require('../resources/spell-gifs/2/hold-person-desc.jpg')
  },
  invisibility: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/invisibility.gif'),
    description: require('../resources/spell-gifs/2/invisibility-desc.jpg')
  },
  knock: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/knock.gif'),
    description: require('../resources/spell-gifs/2/knock-desc.jpg')
  },
  'lesser-restoration': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/lesser-restoration.gif'),
    description: require('../resources/spell-gifs/2/lesser-restoration-desc.jpg')
  },
  levitate: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/levitate.gif'),
    description: require('../resources/spell-gifs/2/levitate-desc.jpg')
  },
  'locate-animals-or-plants': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/locate-animals-or-plants.gif'),
    description: require('../resources/spell-gifs/2/locate-animals-or-plants-desc.jpg')
  },
  'locate-object': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/locate-object.gif'),
    description: require('../resources/spell-gifs/2/locate-object-desc.jpg')
  },
  'magic-mouth': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/magic-mouth.gif'),
    description: require('../resources/spell-gifs/2/magic-mouth-desc.jpg')
  },
  'magic-weapon': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/magic-weapon.gif'),
    description: require('../resources/spell-gifs/2/magic-weapon-desc.jpg')
  },
  "melf's-acid-arrow": {
    level: 2,
    gif: true,
    image: require("../resources/spell-gifs/2/melf's-acid-arrow.gif"),
    description: require("../resources/spell-gifs/2/melf's-acid-arrow-desc.jpg")
  },
  'mirror-image': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/mirror-image.gif'),
    description: require('../resources/spell-gifs/2/mirror-image-desc.jpg')
  },
  'misty-step': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/misty-step.gif'),
    description: require('../resources/spell-gifs/2/misty-step-desc.jpg')
  },
  moonbeam: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/moonbeam.gif'),
    description: require('../resources/spell-gifs/2/moonbeam-desc.jpg')
  },
  "nystul's-magic-aura": {
    level: 3,
    gif: true,
    image: require("../resources/spell-gifs/2/nystul's-magic-aura.gif"),
    description: require("../resources/spell-gifs/2/nystul's-magic-aura-desc.jpg")
  },
  'pass-without-trace': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/pass-without-trace.gif'),
    description: require('../resources/spell-gifs/2/pass-without-trace-desc.jpg')
  },
  'phantasmal-force': {
    level: 2,
    gif: false,
    'if-not-gif': {}
  },
  'prayer-of-healing': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/prayer-of-healing.gif'),
    description: require('../resources/spell-gifs/2/prayer-of-healing-desc.jpg')
  },
  'protection-from-poison': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/protection-from-poison.gif'),
    description: require('../resources/spell-gifs/2/protection-from-poison-desc.jpg')
  },
  'ray-of-enfeeblement': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/ray-of-enfeeblement.gif'),
    description: require('../resources/spell-gifs/2/ray-of-enfeeblement-desc.jpg')
  },
  'rope-trick': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/rope-trick.gif'),
    description: require('../resources/spell-gifs/2/rope-trick-desc.jpg')
  },
  'scorching-ray': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/scorching-ray.gif'),
    description: require('../resources/spell-gifs/2/scorching-ray-desc.jpg')
  },
  'see-invisibility': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/see-invisibility.gif'),
    description: require('../resources/spell-gifs/2/see-invisibility-desc.jpg')
  },
  shatter: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/shatter.gif'),
    description: require('../resources/spell-gifs/2/shatter-desc.jpg')
  },
  silence: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/silence.gif'),
    description: require('../resources/spell-gifs/2/silence-desc.jpg')
  },
  'spider-climb': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/spider-climb.gif'),
    description: require('../resources/spell-gifs/2/spider-climb-desc.jpg')
  },
  'spike-growth': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/spike-growth.gif'),
    description: require('../resources/spell-gifs/2/spike-growth-desc.jpg')
  },
  'spiritual-weapon': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/spiritual-weapon.gif'),
    description: require('../resources/spell-gifs/2/spiritual-weapon-desc.jpg')
  },
  suggestion: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/suggestion.gif'),
    description: require('../resources/spell-gifs/2/suggestion-desc.jpg')
  },
  'warding-bond': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/warding-bond.gif'),
    description: require('../resources/spell-gifs/2/warding-bond-desc.jpg')
  },
  web: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/web.gif'),
    description: require('../resources/spell-gifs/2/web-desc.jpg')
  },
  'zone-of-truth': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/zone-of-truth.gif'),
    description: require('../resources/spell-gifs/2/zone-of-truth-desc.jpg')
  }
};

export default spells;
