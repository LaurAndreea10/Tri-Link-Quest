# Tri-Link Quest

**Puzzle · Match · Connect — trei lumi, o singură misiune.**

[▶ Joacă live](https://laurandreea10.github.io/Tri-Link-Quest/)

Tri-Link Quest este un joc accesibil 3-în-1 pentru browser: rezolvi un puzzle glisant, continui cu o rundă match-3 și finalizezi conectând perechi fără suprapunerea traseelor.

## Funcții

- alegere liberă între Puzzle, Match și Connect din prima rundă
- campanie cu 10 niveluri
- dificultăți Easy, Normal și Hard
- scor, XP, streak și record persistent
- interfață RO/EN
- dark/light și contrast ridicat
- touch, mouse și tastatură
- focus vizibil, regiuni live și `prefers-reduced-motion`
- sunet opțional
- PWA instalabilă și funcționare offline
- integrare ARCADE WORLD prin `postMessage`
- fără framework și fără dependențe de runtime

## Integrare

Containerul jocului folosește:

```html
data-mini-game-id="tri-link-quest"
```

La finalul fiecărei etape sunt emise evenimentele `arcade:result`, `mini-game:result` și `product-loop:result`. În iframe, jocul transmite `ARCADE_GAME_RESULT` către aplicația părinte.

## Dezvoltare și verificare

```bash
npm install
npm test
npm run check
```

## Structură

- `index.html` — jocul complet
- `manifest.webmanifest` — instalare PWA
- `sw.js` — cache offline
- `tests/` — verificări pentru manifest, SEO și contractul de rezultat
- `.github/workflows/` — testare și publicare GitHub Pages

## Accesibilitate

Țintele tactile au dimensiuni responsive, toate comenzile au focus vizibil, animațiile respectă preferința sistemului, iar puzzle-ul poate fi controlat cu săgețile tastaturii.

## Licență

MIT © Laura Andreea
