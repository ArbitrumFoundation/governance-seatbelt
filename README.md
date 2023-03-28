# Arbitrum Crosschain Seatbelt

This repository is a modified version of the Uniswap governance-seatbelt that support Arbitrum Crosschain Governance

To test it out, configure .env and run 
```
// To simulate payload
SIM_NAME=arbcore-rt yarn start
// To simulate onchain proposals
yarn start
```

## Known Issue

- Each crosschain message is simulated individually, that is, if those action interact with eachother the simulation result will not be correct 
    - TODO: add checker to flag when multiple crosschain message is created