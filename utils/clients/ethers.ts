import { providers } from 'ethers'
import { RPC_URL, L1_RPC_URL } from '../constants'

export const provider = new providers.JsonRpcProvider(RPC_URL)
export const l1provider = new providers.JsonRpcProvider(L1_RPC_URL)
