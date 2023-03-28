import { providers } from 'ethers'
import { RPC_URL, L1_RPC_URL } from '../constants'

export const provider = new providers.JsonRpcProvider(RPC_URL)
export const l1provider = new providers.JsonRpcProvider(L1_RPC_URL)

if ((await provider.getNetwork()).chainId !== 42161) throw new Error('RPC need to be Arb1')
if ((await l1provider.getNetwork()).chainId !== 1) throw new Error('L1_RPC need to be Mainnet')