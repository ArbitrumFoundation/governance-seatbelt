import { generateCoreGovSimConfig } from './lib'

const callData =
  '0x8f2a0bb000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000fa62ca6004dce952f24b9c7d151697f8a0fb69b956064b138c6f8911a9e8a832000000000000000000000000000000000000000000000000000000000003f48000000000000000000000000000000000000000000000000000000000000000080000000000000000000000003fffbadaf827559da092217e474760e2b2c3cedd0000000000000000000000003fffbadaf827559da092217e474760e2b2c3cedd0000000000000000000000003fffbadaf827559da092217e474760e2b2c3cedd0000000000000000000000003fffbadaf827559da092217e474760e2b2c3cedd0000000000000000000000003fffbadaf827559da092217e474760e2b2c3cedd0000000000000000000000003fffbadaf827559da092217e474760e2b2c3cedd000000000000000000000000a723c008e76e379c55599d2e4d93879beafda79c000000000000000000000000a723c008e76e379c55599d2e4d93879beafda79c0000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000002800000000000000000000000000000000000000000000000000000000000000340000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000004c00000000000000000000000000000000000000000000000000000000000000580000000000000000000000000000000000000000000000000000000000000072000000000000000000000000000000000000000000000000000000000000000841cff79cd0000000000000000000000003e313eeed58e851ca3841c6109697b9eb35c772600000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004b147f40c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000841cff79cd00000000000000000000000047a85c0a118127f3968a6a1a61e2a326517540d400000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004b147f40c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000841cff79cd00000000000000000000000076d8e97cd4514bebbc21d2044ff4a8d9ea1f0cc400000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004b147f40c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000841cff79cd000000000000000000000000ce0af261eb511cb41b8d0a2e31df80ba37e265ab00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004b147f40c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000841cff79cd000000000000000000000000874356173cfd6c739aeab1f5abfb5f3afb3d4d3300000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004b147f40c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000841cff79cd000000000000000000000000501f30810d2b0eaec15cc3785dbb29e4a8a92a7000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004b147f40c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001800000000000000000000000004dbd4fc535ac27206064b68ffcf827b0a60bab3f000000000000000000000000cf57572261c7c2bcf21ffd220ea7d1a27d40a82700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000841cff79cd0000000000000000000000003e313eeed58e851ca3841c6109697b9eb35c772600000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004b147f40c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000180000000000000000000000000c4448b71118c9071bcb9734a0eac55d18a15394900000000000000000000000086a02dd71363c440b21f4c0e5b2ad01ffe1a748200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000841cff79cd0000000000000000000000003e313eeed58e851ca3841c6109697b9eb35c772600000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004b147f40c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
const simDescription = 'ArbOS 20 + batch poster manager upgrade config'
export const config = generateCoreGovSimConfig(callData, simDescription)
