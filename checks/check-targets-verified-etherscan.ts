import { JsonRpcProvider } from '@ethersproject/providers'
import { bullet, toAddressLink, getExplorer } from '../presentation/report'
import { ProposalCheck, TenderlySimulation } from '../types'
import { getProvider } from '../utils/utils'
import { ARBITRUM_PRECOMPILES } from '../utils/constants'

/**
 * Check all targets with code are verified on Etherscan
 */
export const checkTargetsVerifiedEtherscan: ProposalCheck = {
  name: 'Check all targets are verified on Etherscan',
  async checkProposal(proposal, sim, deps) {
    const uniqueTargets = proposal.targets.filter((addr, i, targets) => targets.indexOf(addr) === i)
    const info = await checkVerificationStatuses(sim, uniqueTargets, getProvider(proposal.chainid))
    return { info, warnings: [], errors: [] }
  },
}

/**
 * Check all touched contracts with code are verified on Etherscan
 */
export const checkTouchedContractsVerifiedEtherscan: ProposalCheck = {
  name: 'Check all touched contracts are verified on Etherscan',
  async checkProposal(proposal, sim, deps) {
    const info = await checkVerificationStatuses(sim, sim.transaction.addresses, getProvider(proposal.chainid))
    return { info, warnings: [], errors: [] }
  },
}

/**
 * For a given simulation response, check verification status of a set of addresses
 */
async function checkVerificationStatuses(
  sim: TenderlySimulation,
  addresses: string[],
  provider: JsonRpcProvider
): Promise<string[]> {
  const info: string[] = []
  for (const addr of addresses) {
    const status = await checkVerificationStatus(sim, addr, provider)
    const address = toAddressLink(addr, false, getExplorer(sim.simulation.network_id))
    if (status === 'eoa') info.push(bullet(`${address}: EOA (verification not applicable)`))
    else if (status === 'verified') info.push(bullet(`${address}: Contract (verified)`))
    else if (ARBITRUM_PRECOMPILES.has(addr)) info.push(`${address}: Arbitrum Precompile (verification not applicable)`)
    else info.push(bullet(`${address}: Contract (not verified)`))
  }
  return info
}

/**
 * For a given address, check if it's an EOA, a verified contract, or an unverified contract
 */
async function checkVerificationStatus(
  sim: TenderlySimulation,
  addr: string,
  provider: JsonRpcProvider
): Promise<'verified' | 'eoa' | 'unverified'> {
  // If an address exists in the contracts array, it's verified on Etherscan
  const contract = sim.contracts.find((item) => item.address === addr)
  if (contract) return 'verified'
  // Otherwise, check if there's code at the address. Addresses with code not in the contracts array are not verified
  const code = await provider.getCode(addr)
  return code === '0x' ? 'eoa' : 'unverified'
}
