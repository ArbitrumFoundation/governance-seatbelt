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

- Nova not supported
- Incorrect time due to crosschain block number
- When simulating executed proposal with retryable, it cannot determine the correct L2 block to use
- ID scheme for child simulation is weird
