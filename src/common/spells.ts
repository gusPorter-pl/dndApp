const spells = {
  'acid-splash': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/acid-splash.gif')
  },
  'blade-ward': {
    level: 0,
    gif: false,
    'if-not-gif': {}
  },
  'chill-touch': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/chill-touch.gif')
  },
  'dancing-lights': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/dancing-lights.gif')
  },
  druidcraft: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/druidcraft.gif')
  },
  'eldritch-blast': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/eldritch-blast.gif')
  },
  'fire-bolt': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/fire-bolt.gif')
  },
  friends: {
    level: 0,
    gif: false,
    'if-not-gif': {}
  },
  guidance: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/guidance.gif')
  },
  light: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/light.gif')
  },
  'mage-hand': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/mage-hand.gif')
  },
  mending: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/mending.gif')
  },
  message: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/message.gif')
  },
  'minor-illusion': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/minor-illusion.gif')
  },
  'poison-spray': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/poison-spray.gif')
  },
  prestidigitation: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/prestidigitation.gif')
  },
  'produce-flame': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/produce-flame.gif')
  },
  'ray-of-frost': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/ray-of-frost.gif')
  },
  resistance: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/resistance.gif')
  },
  'sacred-flame': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/sacred-flame.gif')
  },
  shillelagh: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/shillelagh.gif')
  },
  'shocking-grasp': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/shocking-grasp.gif')
  },
  'spare-the-dying': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/spare-the-dying.gif')
  },
  thaumaturgy: {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/thaumaturgy.gif')
  },
  'thorn-whip': {
    level: 0,
    gif: false,
    'if-not-gif': {}
  },
  'true-strike': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/true-strike.gif')
  },
  'vicious-mockery': {
    level: 0,
    gif: true,
    image: require('../resources/spell-gifs/0/vicious-mockery.gif')
  },
  alarm: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/alarm.gif')
  },
  'animal-friendship': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/animal-friendship.gif')
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
    image: require('../resources/spell-gifs/1/bane.gif')
  },
  bless: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/bless.gif')
  },
  'burning-hands': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/burning-hands.gif')
  },
  'charm-person': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/charm-person.gif')
  },
  'chromatic-orb': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  'colour-spray': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/colour-spray.gif')
  },
  command: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/command.gif')
  },
  'compelled-duel': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  'comprehend-languages': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/comprehend-languages.gif')
  },
  'create-or-destroy-water': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/create-or-destroy-water.gif')
  },
  'cure-wounds': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/cure-wounds.gif')
  },
  'detect-evil-and-good': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/detect-evil-and-good.gif')
  },
  'detect-magic': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/detect-magic.gif')
  },
  'detect-poison-and-disease': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/detect-poison-and-disease.gif')
  },
  'disguise-self': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/disguise-self.gif')
  },
  'dissonant-whispers': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  'divine-favour': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/divine-favour.gif')
  },
  'ensnaring-strike': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  entangle: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/entangle.gif')
  },
  'expeditious-retreat': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/expeditious-retreat.gif')
  },
  'faerie-fire': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/faerie-fire.gif')
  },
  'false-life': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/false-life.gif')
  },
  'feather-fall': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/feather-fall.gif')
  },
  'find-familiar': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/find-familiar.gif')
  },
  'fog-cloud': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/fog-cloud.gif')
  },
  goodberry: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/goodberry.gif')
  },
  grease: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/grease.gif')
  },
  'guiding-bolt': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/guiding-bolt.gif')
  },
  'hail-of-thorns': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  'healing-word': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/healing-word.gif')
  },
  'hellish-rebuke': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/hellish-rebuke.gif')
  },
  heroism: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/heroism.gif')
  },
  hex: {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  "hunter's-mark": {
    level: 1,
    gif: true,
    image: require("../resources/spell-gifs/1/hunter's-mark.gif")
  },
  identify: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/identify.gif')
  },
  'illusory-script': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/illusory-script.gif')
  },
  'inflict-wounds': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/inflict-wounds.gif')
  },
  jump: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/jump.gif')
  },
  longstrider: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/longstrider.gif')
  },
  'mage-armour': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/mage-armour.gif')
  },
  'magic-missile': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/magic-missile.gif')
  },
  'protection-from-evil-and-good': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/protection-from-evil-and-good.gif')
  },
  'purify-food-and-drink': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/purify-food-and-drink.gif')
  },
  'ray-of-sickness': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  sanctuary: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/sanctuary.gif')
  },
  'searing-smite': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  shield: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/shield.gif')
  },
  'shield-of-faith': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/shield-of-faith.gif')
  },
  'silent-image': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/silent-image.gif')
  },
  sleep: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/sleep.gif')
  },
  'speak-with-animals': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/speak-with-animals.gif')
  },
  "tasha's-hideous-laughter": {
    level: 1,
    gif: true,
    image: require("../resources/spell-gifs/1/tasha's-hideous-laughter.gif")
  },
  "tenser's-floating-disk": {
    level: 1,
    gif: true,
    image: require("../resources/spell-gifs/1/tenser's-floating-disk.gif")
  },
  'thunderous-smite': {
    level: 1,
    gif: false,
    'if-not-gif': {}
  },
  thunderwave: {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/thunderwave.gif')
  },
  'unseen-servant': {
    level: 1,
    gif: true,
    image: require('../resources/spell-gifs/1/unseen-servant.gif')
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
    image: require('../resources/spell-gifs/2/aid.gif')
  },
  'alter-self': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/alter-self.gif')
  },
  'animal-messenger': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/animal-messenger.gif')
  },
  'arcane-lock': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/arcane-lock.gif')
  },
  "arcanist's-magic-aura": {
    level: 2,
    gif: true,
    image: require("../resources/spell-gifs/2/arcanist's-magic-aura.gif")
  },
  augury: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/augury.gif')
  },
  barkskin: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/barkskin.gif')
  },
  'beast-sense': {
    level: 2,
    gif: false,
    'if-not-gif': {}
  },
  'blindness-and-deafness': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/blindness-and-deafness.gif')
  },
  blur: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/blur.gif')
  },
  'branding-smite': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/branding-smite.gif')
  },
  'calm-emotions': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/calm-emotions.gif')
  },
  'cloud-of-daggers': {
    level: 2,
    gif: false,
    'if-not-gif': {}
  },
  'continual-flame': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/continual-flame.gif')
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
    image: require('../resources/spell-gifs/2/darkness.gif')
  },
  darkvision: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/darkvision.gif')
  },
  'detect-thoughts': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/detect-thoughts.gif')
  },
  'enhance-ability': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/enhance-ability.gif')
  },
  'enlarge-and-reduce': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/enlarge-and-reduce.gif')
  },
  enthrall: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/enthrall.gif')
  },
  'find-steed': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/find-steed.gif')
  },
  'find-traps': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/find-traps.gif')
  },
  'flame-blade': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/flame-blade.gif')
  },
  'flaming-sphere': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/flaming-sphere.gif')
  },
  'gentle-repose': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/gentle-repose.gif')
  },
  'gust-of-wind': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/gust-of-wind.gif')
  },
  'heat-metal': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/heat-metal.gif')
  },
  'hold-person': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/hold-person.gif')
  },
  invisibility: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/invisibility.gif')
  },
  knock: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/knock.gif')
  },
  'lesser-restoration': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/lesser-restoration.gif')
  },
  levitate: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/levitate.gif')
  },
  'locate-animals-or-plants': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/locate-animals-or-plants.gif')
  },
  'locate-object': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/locate-object.gif')
  },
  'magic-mouth': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/magic-mouth.gif')
  },
  'magic-weapon': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/magic-weapon.gif')
  },
  "melf's-acid-arrow": {
    level: 2,
    gif: true,
    image: require("../resources/spell-gifs/2/melf's-acid-arrow.gif")
  },
  'mirror-image': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/mirror-image.gif')
  },
  'misty-step': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/misty-step.gif')
  },
  moonbeam: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/moonbeam.gif')
  },
  "nystul's-magic-aura": {
    level: 2,
    gif: false,
    'if-not-gif': {}
  },
  'pass-without-trace': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/pass-without-trace.gif')
  },
  'phantasmal-force': {
    level: 2,
    gif: false,
    'if-not-gif': {}
  },
  'prayer-of-healing': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/prayer-of-healing.gif')
  },
  'protection-from-poison': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/protection-from-poison.gif')
  },
  'ray-of-enfeeblement': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/ray-of-enfeeblement.gif')
  },
  'rope-trick': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/rope-trick.gif')
  },
  'scorching-ray': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/scorching-ray.gif')
  },
  'see-invisibility': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/see-invisibility.gif')
  },
  shatter: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/shatter.gif')
  },
  silence: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/silence.gif')
  },
  'spider-climb': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/spider-climb.gif')
  },
  'spike-growth': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/spike-growth.gif')
  },
  'spiritual-weapon': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/spiritual-weapon.gif')
  },
  suggestion: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/suggestion.gif')
  },
  'warding-bond': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/warding-bond.gif')
  },
  web: {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/web.gif')
  },
  'zone-of-truth': {
    level: 2,
    gif: true,
    image: require('../resources/spell-gifs/2/zone-of-truth.gif')
  }
};

export default spells;
