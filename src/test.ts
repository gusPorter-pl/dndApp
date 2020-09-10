import playerStore from './store/players';
import * as actions from './actions/players';

playerStore.subscribe(() => {
  playerStore.getState().players.sort((p, q) => q.initiative - p.initiative);
  console.log(playerStore.getState());
});

playerStore.dispatch(
  actions.addPlayer({
    name: 'Bizzie',
    initiative: 20,
    initiativeModifier: 5,
    colour: 0
  })
);
playerStore.dispatch(
  actions.addPlayer({
    name: 'Lizzie',
    initiative: 22,
    initiativeModifier: 3,
    colour: 0
  })
);
playerStore.dispatch(
  actions.editPlayer({
    name: 'Lizzie',
    initiative: 5,
    initiativeModifier: 3,
    colour: 0
  })
);
playerStore.dispatch(actions.removePlayer('Lizzie'));
playerStore.dispatch(
  actions.editPlayer({
    name: 'Bizzie',
    initiative: 18,
    initiativeModifier: 5,
    colour: 0
  })
);
