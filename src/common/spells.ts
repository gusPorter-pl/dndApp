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
  },
  'animate-dead': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/animate-dead.gif'),
    description: require('../resources/spell-gifs/3/animate-dead-desc.jpg')
  },
  'aura-of-vitality': {
    level: 3,
    gif: false,
    'if-not-gif': {}
  },
  'beacon-of-hope': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/beacon-of-hope.gif'),
    description: require('../resources/spell-gifs/3/beacon-of-hope-desc.jpg')
  },
  'bestow-curse': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/bestow-curse.gif'),
    description: require('../resources/spell-gifs/3/bestow-curse-desc.jpg')
  },
  'blinding-smite': {
    level: 3,
    gif: false,
    'if-not-gif': {}
  },
  blink: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/blink.gif'),
    description: require('../resources/spell-gifs/3/blink-desc.jpg')
  },
  'call-lightning': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/call-lightning.gif'),
    description: require('../resources/spell-gifs/3/call-lightning-desc.jpg')
  },
  clairvoyance: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/clairvoyance.gif'),
    description: require('../resources/spell-gifs/3/clairvoyance-desc.jpg')
  },
  'conjure-animals': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/conjure-animals.gif'),
    description: require('../resources/spell-gifs/3/conjure-animals-desc.jpg')
  },
  'conjure-barrage': {
    level: 3,
    gif: false,
    'if-not-gif': {}
  },
  counterspell: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/counterspell.gif'),
    description: require('../resources/spell-gifs/3/counterspell-desc.jpg')
  },
  'create-food-and-water': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/create-food-and-water.gif'),
    description: require('../resources/spell-gifs/3/create-food-and-water-desc.jpg')
  },
  "crusader's-mantle": {
    level: 3,
    gif: false,
    'if-not-gif': {}
  },
  daylight: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/daylight.gif'),
    description: require('../resources/spell-gifs/3/daylight-desc.jpg')
  },
  'dispel-magic': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/dispell-magic.gif'),
    description: require('../resources/spell-gifs/3/dispell-magic-desc.jpg')
  },
  'elemental-weapon': {
    level: 3,
    gif: false,
    'if-not-gif': {}
  },
  fear: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/fear.gif'),
    description: require('../resources/spell-gifs/3/fear-desc.jpg')
  },
  'feign-death': {
    level: 3,
    gif: false,
    'if-not-gif': {}
  },
  fireball: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/fireball.gif'),
    description: require('../resources/spell-gifs/3/fireball-desc.jpg')
  },
  fly: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/fly.gif'),
    description: require('../resources/spell-gifs/3/fly-desc.jpg')
  },
  'gaseous-form': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/gaseous-form.gif'),
    description: require('../resources/spell-gifs/3/gaseous-form-desc.jpg')
  },
  'glyph-of-warding': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/glyph-of-warding.gif'),
    description: require('../resources/spell-gifs/3/glyph-of-warding-desc.jpg')
  },
  haste: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/haste.gif'),
    description: require('../resources/spell-gifs/3/haste-desc.jpg')
  },
  'hunger-of-hadar': {
    level: 3,
    gif: false,
    'if-not-gif': {}
  },
  'hypnotic-pattern': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/hypnotic-pattern.gif'),
    description: require('../resources/spell-gifs/3/hypnotic-pattern-desc.jpg')
  },
  "leomund's-tiny-hut": {
    level: 3,
    gif: true,
    image: require("../resources/spell-gifs/3/leomund's-tiny-hut.gif"),
    description: require("../resources/spell-gifs/3/leomund's-tiny-hut-desc.jpg")
  },
  'lightning-arrow': {
    level: 3,
    gif: false,
    'if-not-gif': {}
  },
  'lightning-bolt': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/lightning-bolt.gif'),
    description: require('../resources/spell-gifs/3/lightning-bolt-desc.jpg')
  },
  'magic-circle': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/magic-circle.gif'),
    description: require('../resources/spell-gifs/3/magic-circle-desc.jpg')
  },
  'major-image': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/major-image.gif'),
    description: require('../resources/spell-gifs/3/major-image-desc.jpg')
  },
  'mass-healing-word': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/mass-healing-word.gif'),
    description: require('../resources/spell-gifs/3/mass-healing-word-desc.jpg')
  },
  'meld-into-stone': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/meld-into-stone.gif'),
    description: require('../resources/spell-gifs/3/meld-into-stone-desc.jpg')
  },
  nondetection: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/nondetection.gif'),
    description: require('../resources/spell-gifs/3/nondetection-desc.jpg')
  },
  'phantom-steed': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/phantom-steed.gif'),
    description: require('../resources/spell-gifs/3/phantom-steed-desc.jpg')
  },
  'plant-growth': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/plant-growth.gif'),
    description: require('../resources/spell-gifs/3/plant-growth-desc.jpg')
  },
  'protection-from-energy': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/protection-from-energy.gif'),
    description: require('../resources/spell-gifs/3/protection-from-energy-desc.jpg')
  },
  'remove-curse': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/remove-curse.gif'),
    description: require('../resources/spell-gifs/3/remove-curse-desc.jpg')
  },
  revivify: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/revivify.gif'),
    description: require('../resources/spell-gifs/3/revivify-desc.jpg')
  },
  sending: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/sending.gif'),
    description: require('../resources/spell-gifs/3/sending-desc.jpg')
  },
  'sleet-storm': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/sleet-storm.gif'),
    description: require('../resources/spell-gifs/3/sleet-storm-desc.jpg')
  },
  slow: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/slow.gif'),
    description: require('../resources/spell-gifs/3/slow-desc.jpg')
  },
  'speak-with-dead': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/speak-with-dead.gif'),
    description: require('../resources/spell-gifs/3/speak-with-dead-desc.jpg')
  },
  'speak-with-plants': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/speak-with-plants.gif'),
    description: require('../resources/spell-gifs/3/speak-with-plants-desc.jpg')
  },
  'spirit-guardians': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/spirit-guardians.gif'),
    description: require('../resources/spell-gifs/3/spirit-guardians-desc.jpg')
  },
  'stinking-cloud': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/stinking-cloud.gif'),
    description: require('../resources/spell-gifs/3/stinking-cloud-desc.jpg')
  },
  tongues: {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/tongues.gif'),
    description: require('../resources/spell-gifs/3/tongues-desc.jpg')
  },
  'vampiric-touch': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/vampiric-touch.gif'),
    description: require('../resources/spell-gifs/3/vampiric-touch-desc.jpg')
  },
  'water-breathing': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/water-breathing.gif'),
    description: require('../resources/spell-gifs/3/water-breathing-desc.jpg')
  },
  'water-walk': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/water-walk.gif'),
    description: require('../resources/spell-gifs/3/water-walk-desc.jpg')
  },
  'wind-wall': {
    level: 3,
    gif: true,
    image: require('../resources/spell-gifs/3/wind-wall.gif'),
    description: require('../resources/spell-gifs/3/wind-wall-desc.jpg')
  },
  'arcane-eye': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/arcane-eye.gif'),
    description: require('../resources/spell-gifs/4/arcane-eye-desc.jpg')
  },
  'aura-of-life': {
    level: 4,
    gif: false,
    'if-not-gif': {}
  },
  'aura-of-purity': {
    level: 4,
    gif: false,
    'if-not-gif': {}
  },
  banishment: {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/banishment.gif'),
    description: require('../resources/spell-gifs/4/banishment-desc.jpg')
  },
  blight: {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/blight.gif'),
    description: require('../resources/spell-gifs/4/blight-desc.jpg')
  },
  compulsion: {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/compulsion.gif'),
    description: require('../resources/spell-gifs/4/compulsion-desc.jpg')
  },
  confusion: {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/confusion.gif'),
    description: require('../resources/spell-gifs/4/confusion-desc.jpg')
  },
  'conjure-minor-elementals': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/conjure-minor-elementals.gif'),
    description: require('../resources/spell-gifs/4/conjure-minor-elementals-desc.jpg')
  },
  'conjure-woodland-beings': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/conjure-woodland-beings.gif'),
    description: require('../resources/spell-gifs/4/conjure-woodland-beings-desc.jpg')
  },
  'control-water': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/control-water.gif'),
    description: require('../resources/spell-gifs/4/control-water-desc.jpg')
  },
  'death-ward': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/death-ward.gif'),
    description: require('../resources/spell-gifs/4/death-ward-desc.jpg')
  },
  'dimension-door': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/dimension-door.gif'),
    description: require('../resources/spell-gifs/4/dimension-door-desc.jpg')
  },
  divination: {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/divination.gif'),
    description: require('../resources/spell-gifs/4/divination-desc.jpg')
  },
  'dominate-beast': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/dominate-beast.gif'),
    description: require('../resources/spell-gifs/4/dominate-beast-desc.jpg')
  },
  "evard's-black-tenticles": {
    level: 4,
    gif: true,
    image: require("../resources/spell-gifs/4/evard's-black-tenticles.gif"),
    description: require("../resources/spell-gifs/4/evard's-black-tenticles-desc.jpg")
  },
  fabricate: {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/fabricate.gif'),
    description: require('../resources/spell-gifs/4/fabricate-desc.jpg')
  },
  'fire-shield': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/fire-shield.gif'),
    description: require('../resources/spell-gifs/4/fire-shield-desc.jpg')
  },
  'freedom-of-movement': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/freedom-of-movement.gif'),
    description: require('../resources/spell-gifs/4/freedom-of-movement-desc.jpg')
  },
  'giant-insect': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/giant-insect.gif'),
    description: require('../resources/spell-gifs/4/giant-insect-desc.jpg')
  },
  'grasping-vine': {
    level: 4,
    gif: false,
    'if-not-gif': {}
  },
  'greater-invisibility': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/greater-invisibility.gif'),
    description: require('../resources/spell-gifs/4/greater-invisibility-desc.jpg')
  },
  'guardian-of-faith': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/guardian-of-faith.gif'),
    description: require('../resources/spell-gifs/4/guardian-of-faith-desc.jpg')
  },
  'hallucinatory-terrain': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/hallucinatory-terrain.gif'),
    description: require('../resources/spell-gifs/4/hallucinatory-terrain-desc.jpg')
  },
  'ice-storm': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/ice-storm.gif'),
    description: require('../resources/spell-gifs/4/ice-storm-desc.jpg')
  },
  "leomund's-secret-chest": {
    level: 4,
    gif: true,
    image: require("../resources/spell-gifs/4/leomund's-secret-chest.gif"),
    description: require("../resources/spell-gifs/4/leomund's-secret-chest-desc.jpg")
  },
  'locate-creature': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/locate-creature.gif'),
    description: require('../resources/spell-gifs/4/locate-creature-desc.jpg')
  },
  "mordenkainen's-faithful-hound": {
    level: 4,
    gif: true,
    image: require("../resources/spell-gifs/4/mordenkainen's-faithful-hound.gif"),
    description: require("../resources/spell-gifs/4/mordenkainen's-faithful-hound-desc.jpg")
  },
  "mordenkainen's-private-sanctum": {
    level: 4,
    gif: true,
    image: require("../resources/spell-gifs/4/mordenkainen's-private-sanctum.gif"),
    description: require("../resources/spell-gifs/4/mordenkainen's-private-sanctum-desc.jpg")
  },
  "otiluke's-resilient-sphere": {
    level: 4,
    gif: true,
    image: require("../resources/spell-gifs/4/otiluke's-resilient-sphere.gif"),
    description: require("../resources/spell-gifs/4/otiluke's-resilient-sphere-desc.jpg")
  },
  'phantasmal-killer': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/phantasmal-killer.gif'),
    description: require('../resources/spell-gifs/4/phantasmal-killer-desc.jpg')
  },
  polymorph: {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/polymorph.gif'),
    description: require('../resources/spell-gifs/4/polymorph-desc.jpg')
  },
  'staggering-smite': {
    level: 4,
    gif: false,
    'if-not-gif': {}
  },
  'stone-shape': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/stone-shape.gif'),
    description: require('../resources/spell-gifs/4/stone-shape-desc.jpg')
  },
  stoneskin: {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/stoneskin.gif'),
    description: require('../resources/spell-gifs/4/stoneskin-desc.jpg')
  },
  'wall-of-fire': {
    level: 4,
    gif: true,
    image: require('../resources/spell-gifs/4/wall-of-fire.gif'),
    description: require('../resources/spell-gifs/4/wall-of-fire-desc.jpg')
  },
  'animate-object': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/animate-object.gif'),
    description: require('../resources/spell-gifs/5/animate-object-desc.jpg')
  },
  'antilife-shell': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/antilife-shell.gif'),
    description: require('../resources/spell-gifs/5/antilife-shell-desc.jpg')
  },
  awaken: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/awaken.gif'),
    description: require('../resources/spell-gifs/5/awaken-desc.jpg')
  },
  'banishing-smite': {
    level: 5,
    gif: false,
    'if-not-gif': {}
  },
  "bigby's-hand": {
    level: 5,
    gif: true,
    image: require("../resources/spell-gifs/5/bigby's-hand.gif"),
    description: require("../resources/spell-gifs/5/bigby's-hand-desc.jpg")
  },
  'circle-of-power': {
    level: 5,
    gif: false,
    'if-not-gif': {}
  },
  cloudkill: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/cloudkill.gif'),
    description: require('../resources/spell-gifs/5/cloudkill-desc.jpg')
  },
  commune: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/commune.gif'),
    description: require('../resources/spell-gifs/5/commune-desc.jpg')
  },
  'commune-with-nature': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/commune-with-nature.gif'),
    description: require('../resources/spell-gifs/5/commune-with-nature-desc.jpg')
  },
  'cone-of-cold': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/cone-of-cold.gif'),
    description: require('../resources/spell-gifs/5/cone-of-cold-desc.jpg')
  },
  'conjure-elemental': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/conjure-elemental.gif'),
    description: require('../resources/spell-gifs/5/conjure-elemental-desc.jpg')
  },
  'conjure-volley': {
    level: 5,
    gif: false,
    'if-not-gif': {}
  },
  'contact-other-plane': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/contact-other-plane.gif'),
    description: require('../resources/spell-gifs/5/contact-other-plane-desc.jpg')
  },
  contagion: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/contagion.gif'),
    description: require('../resources/spell-gifs/5/contagion-desc.jpg')
  },
  creation: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/creation.gif'),
    description: require('../resources/spell-gifs/5/creation-desc.jpg')
  },
  'destructive-wave': {
    level: 5,
    gif: false,
    'if-not-gif': {}
  },
  'dispel-evil-and-good': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/dispel-evil-and-good.gif'),
    description: require('../resources/spell-gifs/5/dispel-evil-and-good-desc.jpg')
  },
  'dominate-person': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/dominate-person.gif'),
    description: require('../resources/spell-gifs/5/dominate-person-desc.jpg')
  },
  dream: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/dream.gif'),
    description: require('../resources/spell-gifs/5/dream-desc.jpg')
  },
  'flame-strike': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/flame-strike.gif'),
    description: require('../resources/spell-gifs/5/flame-strike-desc.jpg')
  },
  geas: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/geas.gif'),
    description: require('../resources/spell-gifs/5/geas-desc.jpg')
  },
  'greater-restoration': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/greater-restoration.gif'),
    description: require('../resources/spell-gifs/5/greater-restoration-desc.jpg')
  },
  hallow: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/hallow.gif'),
    description: require('../resources/spell-gifs/5/hallow-desc.jpg')
  },
  'hold-monster': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/hold-monster.gif'),
    description: require('../resources/spell-gifs/5/hold-monster-desc.jpg')
  },
  'insect-plague': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/insect-plague.gif'),
    description: require('../resources/spell-gifs/5/insect-plague-desc.jpg')
  },
  'legend-lore': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/legend-lore.gif'),
    description: require('../resources/spell-gifs/5/legend-lore-desc.jpg')
  },
  'mass-cure-wounds': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/mass-cure-wounds.gif'),
    description: require('../resources/spell-gifs/5/mass-cure-wounds-desc.jpg')
  },
  mislead: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/mislead.gif'),
    description: require('../resources/spell-gifs/5/mislead-desc.jpg')
  },
  'modify-memory': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/modify-memory.gif'),
    description: require('../resources/spell-gifs/5/modify-memory-desc.jpg')
  },
  passwall: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/passwall.gif'),
    description: require('../resources/spell-gifs/5/passwall-desc.jpg')
  },
  'planar-binding': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/planar-binding.gif'),
    description: require('../resources/spell-gifs/5/planar-binding-desc.jpg')
  },
  'raise-dead': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/raise-dead.gif'),
    description: require('../resources/spell-gifs/5/raise-dead-desc.jpg')
  },
  "rary's-telepathic-bond": {
    level: 5,
    gif: true,
    image: require("../resources/spell-gifs/5/rary's-telepathic-bond.gif"),
    description: require("../resources/spell-gifs/5/rary's-telepathic-bond-desc.jpg")
  },
  reincarnate: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/reincarnate.gif'),
    description: require('../resources/spell-gifs/5/reincarnate-desc.jpg')
  },
  scrying: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/scrying.gif'),
    description: require('../resources/spell-gifs/5/scrying-desc.jpg')
  },
  seeming: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/seeming.gif'),
    description: require('../resources/spell-gifs/5/seeming-desc.jpg')
  },
  'swift-quiver': {
    level: 5,
    gif: false,
    'if-not-gif': {}
  },
  telekinesis: {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/telekinesis.gif'),
    description: require('../resources/spell-gifs/5/telekinesis-desc.jpg')
  },
  'teleportation-circle': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/teleportation-circle.gif'),
    description: require('../resources/spell-gifs/5/teleportation-circle-desc.jpg')
  },
  'tree-stride': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/tree-stride.gif'),
    description: require('../resources/spell-gifs/5/tree-stride-desc.jpg')
  },
  'wall-of-force': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/wall-of-force.gif'),
    description: require('../resources/spell-gifs/5/wall-of-force-desc.jpg')
  },
  'wall-of-stone': {
    level: 5,
    gif: true,
    image: require('../resources/spell-gifs/5/wall-of-stone.gif'),
    description: require('../resources/spell-gifs/5/wall-of-stone-desc.jpg')
  },
  'arcane-gate': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'blade-barrier': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'chain-of-lightning': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'circle-of-death': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'conjure-fey': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  contingency: {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'create-undead': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  disintegrate: {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  "drawmij's-instant-summons": {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  eyebite: {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'find-the-path': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'flesh-to-stone': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  forbiddance: {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'globe-of-invulnerability': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'guards-and-wards': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  harm: {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  heal: {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  "heroes'-feast": {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'instant-summons': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'magic-jar': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'mass-suggestion': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'move-earth': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  "otiluke's-freezing-sphere": {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  "otto's-irresistible-dance": {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'planar-ally': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'programmed-illusion': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  sunbeam: {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'transport-via-plants': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'true-seeing': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'wall-of-ice': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'wall-of-thorns': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'wind-walk': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'word-of-recall': {
    level: 6,
    gif: false,
    'if-not-gif': {}
  },
  'conjure-celestial': {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  'delayed-blast-fireball': {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  'divine-word': {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  etherealness: {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  'finger-of-death': {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  'fire-storm': {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  forcecage: {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  'mirage-arcane': {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  "mordenkainen's-sword": {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  "mordenkainen's-magnificent-mansion": {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  'plane-shift': {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  'prismatic-spray': {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  'project-image': {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  regenerate: {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  resurrection: {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  'reverse-gravity': {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  sequester: {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  simulacrum: {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  symbol: {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  teleport: {
    level: 7,
    gif: false,
    'if-not-gif': {}
  },
  'animal-shapes': {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  'antimagic-field': {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  'antipathy-and-sympathy': {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  clone: {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  'control-weather': {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  demiplane: {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  'dominate-monster': {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  earthquake: {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  feeblemind: {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  glibness: {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  'holy-aura': {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  'incendiary-cloud': {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  maze: {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  'mind-blank': {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  'power-word-stun': {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  sunburst: {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  telepathy: {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  tsunami: {
    level: 8,
    gif: false,
    'if-not-gif': {}
  },
  'astral-projection': {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  foresight: {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  gate: {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  imprisonment: {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  'mass-heal': {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  'meteor-swarm': {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  'power-word-heal': {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  'power-word-kill': {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  'prismatic-wall': {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  shapechange: {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  'storm-of-vengeance': {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  'time-stop': {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  'true-polymorph': {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  'true-resurrection': {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  weird: {
    level: 9,
    gif: false,
    'if-not-gif': {}
  },
  wish: {
    level: 9,
    gif: false,
    'if-not-gif': {}
  }
};

export default spells;
