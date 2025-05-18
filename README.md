# ssgs-calc

## Descrizione
`ssgs-calc` è un progetto che fornisce funzionalità matematiche di base.

## Prerequisiti
- Node.js versione 16 o superiore
- npm (Node Package Manager)

## Istruzioni di installazione
1. Clonare il repository:
   ```bash
   git clone <URL-del-repository>
   ```
2. Accedere alla directory del progetto:
   ```bash
   cd ssgs-calc
   ```
3. Installare le dipendenze:
   ```bash
   npm install
   ```
## Avvio della CLI Interattiva

Per avviare la calcolatrice in modalità interattiva da terminale, esegui il comando:

```bash
npm start

## Istruzioni per i test
Per eseguire i test unitari:
```bash
npm test
```

Per generare un report di code coverage:
```bash
npm run coverage
```
Il report sarà disponibile nella directory `coverage/lcov-report/index.html`.

## CI/CD
Il progetto utilizza GitHub Actions per l'integrazione continua e il deployment continuo. I workflow sono configurati per eseguire i test e generare report di code coverage automaticamente ad ogni push.

## Struttura del progetto
- `math.js`: Contiene le funzioni matematiche principali.
- `math.test.js`: Contiene i test unitari per le funzioni in `math.js`.
- `package.json`: File di configurazione del progetto.
- `coverage/`: Directory che contiene i report di code coverage.

 


