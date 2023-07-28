/**
 * @notice Simulation configuration file for AIP 1.2
 */
import { ethers } from 'ethers'
import { SimulationConfigNew } from '../types'

const ARBSYS = '0x0000000000000000000000000000000000000064'

// from https://github.com/ArbitrumFoundation/governance/blob/07d3e88c71c3fde922721837f947cef2868e6d67/scripts/proposals/AIP12/data/42161-AIP1.2-data.json
const aip4 = {
  actionChainID: 42161,
  actionAddress: '0x984194FfA74486e74A273372321b759fEF2C87ac',
  description:
    '\nProposal: Update Security Council Election Start Date to Ensure Time for Security Audit\n\nCategory: Constitutional - Process\n\nHigh Level Overview\nThe ArbitrumDAO Constitution specifies that the first Security Council election should start on the 15th September alongside a specification for the election.\n\nAn on-chain implementation of the entire election is still a work in progress. The Arbitrum Foundation has sponsored the implementation of a smart contract suite by Offchain Labs, an extension of Tally’s user interface, and the respective audits.\n\nThis proposal seeks to revise the ArbitrumDAO Constitution to provide flexibility for the start date of the election. If passed by a Constitutional Vote, the new start date will be on the 15th September or the earliest possible date in which an on-chain election can begin.\n\nThe motivation to change the election’s start date is to provide time for the implementation to be completed, security audits to be performed, for the community to gain confidence in the quality of its implementation and for the Arbitrum DAO to vote on a separate Constitutional AIP to install an on-chain election system.\n\nThe overarching goal is to still allow the election to begin on the 15th September, but it is prudent to provide leeway and ensure all parties, especially the Arbitrum DAO, are confident in the election software’s security and completeness.\n\nPath to a Smart Contract Enabled Election\nThis proposal seeks approval from the Arbitrum DAO that the first and all subsequent security elections should be performed via the on-chain election process.\n\nThe activation of the Security Council election is dependent on:\n\nComplete implementation for the on-chain smart contracts,\nComplete implementation of the user interface,\nSmart contract audit by a highly regarded auditing firm,\nAll parties, including the Arbitrum DAO, have gained confidence in the implementation’s completeness and security,\nSuccessful Constitutional Vote by the DAO to install the new election software.\nA vote on this proposal is approving that the above conditions are mandatory for any election software before it can be installed into the on-chain smart contracts.\n\nModified Start Date for Election\nThe implementation sponsored by the Arbitrum Foundation should be ready for the start date of the 15th September.\n\nEven so, given the naunces of implementation details and the potential security risks to a critical part of the system, we believe it is still prudent to provide leeway and extra time for the Security Council elections to begin some time after the required date set out by The Arbitrum Foundation.\n\nAfter all, it is not just about having a complete implementation, but ensuring all parties have confidence that all efforts have made been to minimize the risk of bugs in the implementation.\n\nRevision to ArbitrumDAO Constitution\nThe revised text focuses on the election beginning at the earliest possible date from the 15th September. Additionally, the election can only begin once an on-chain election system is installed via a separate Constitutional Vote.\n\nAll future elections can begin exactly six months after the previous election. As such, the chosen date for the first election will decide the earliest start date for the next election.\n\nFor extra clarity in the text, we have renamed “September Cohort” to “First Cohort” and “March Cohort” to “Second Cohort”\n\nFinally, to remove any ambiguity, all security council members are expected to serve the time until the new Security Council members are installed in the respective smart contracts.\n\nCurrent text of ArbitrumDAO Constitution:\nThe Security Council has 12 members, who are divided into a September Cohort of 6 members, and a March Cohort of 6 members. Every year on September 15, 12:00 UTC, an election starts for the 6 September Cohort seats; and every year on March 15, 12:00 UTC, an election starts for the 6 March Cohort seats.\n\nThis means that the initial September Cohort will serve an initial term of 6 months, whereas the initial March Cohort will serve an initial term of 1 year.\n\nThe initial Security Council Cohorts were determined by randomly splitting the 12 members into two 6-member cohorts - 6 members in the September Cohort and 6 members in the March Cohort. The members of the initial Security Council Cohorts are detailed in a transparency report here.\n\nProposed Revision of Arbitrum Constitution:\nThe Security Council has 12 members, who are divided into two Cohorts of 6 members.\n\nThe initial Security Council Cohorts were determined by randomly splitting the 12 members into two 6-member cohorts - 6 members in the ‘First Cohort’ and 6 members in the ‘Second Cohort’. The members of the initial Security Council Cohorts are detailed in a transparency report here.\n\nThe first security election is scheduled to begin on the 15th September 2023 or the earliest possible date. The election can only begin upon the availability of an on-chain election process that was approved and installed by the Arbitrum DAO. This first election replaces the ‘First Cohort’.\n\nThe date chosen for the first election will form the basis for all future elections. Every election will begin exactly 6 months after the previous election has finished and it will replace its respective cohort of 6 members.\n\nAll Security Council members are expected to serve their term until the election is complete and the new Security Council members are installed.\n',
  arbSysSendTxToL1Args: {
    l1Timelock: '0xE6841D92B0C345144506576eC13ECf5103aC7f49',
    calldata:
      '0x01d5062a000000000000000000000000a723c008e76e379c55599d2e4d93879beafda79c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000006fa1ef4ee50c12c4c31477cceaef2264636e3185a45b0c45ccd833bf65b0e3e1000000000000000000000000000000000000000000000000000000000003f48000000000000000000000000000000000000000000000000000000000000001800000000000000000000000004dbd4fc535ac27206064b68ffcf827b0a60bab3f000000000000000000000000cf57572261c7c2bcf21ffd220ea7d1a27d40a82700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000841cff79cd000000000000000000000000984194ffa74486e74a273372321b759fef2c87ac00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004b147f40c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  },
}
const iface = new ethers.utils.Interface(['function sendTxToL1(address,bytes)'])
const calldata = iface.encodeFunctionData('sendTxToL1', [
  aip4.arbSysSendTxToL1Args.l1Timelock,
  aip4.arbSysSendTxToL1Args.calldata,
])

const call1 = {
  target: ARBSYS,
  calldata: calldata,
  value: 0,
  signature: '',
}

export const config: SimulationConfigNew = {
  type: 'new',
  daoName: 'ArbCore',
  governorType: 'arb',
  governorAddress: '0xf07ded9dc292157749b6fd268e37df6ea38395b9',
  targets: [call1.target], // Array of targets to call.
  values: [call1.value], // Array of values with each call.
  signatures: [call1.signature], // Array of function signatures. Leave empty if generating calldata with ethers like we do here.
  calldatas: [call1.calldata], // Array of encoded calldatas.
  description: 'AIP4 Simulation',
}
