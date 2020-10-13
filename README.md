# Initiative Tracker & Spell Search

### What is this?

This react native app allows DM's to track and look up useful information in a dnd game. Being able to easily track initiative is useful, and also searching up spells when one of my players has the handbook makes it easier again.

### How to get this working

1. Clone repo
2. `yarn` and `nmp i` to get everything downloaded.
3. Change import in `src\redux\reducer.ts` and `src\views\tabs\spells.tsx` from `import spells from ...\commmon\spells` to `import spells from ...\commmon\test-spells`. I have a private submodule that stores copyrighted gifs, so I have provided some of them that is located in the main repository.
