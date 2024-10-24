/* Import modules. */
import { defineStore } from 'pinia'

// import _broadcast from './wallet/broadcast.ts'
// import _setEntropy from './wallet/setEntropy.ts'

/* Set ($STUDIO) token id. */
const STUDIO_TOKENID = '9732745682001b06e332b6a4a0dd0fffc4837c707567f8cbfe0f6a9b12080000'

const TX_GAS_AMOUNT = 1000 // 10.00 NEXA

/**
 * Wallet Store
 */
export const useWalletStore = defineStore('wallet', {
    state: () => ({
        /**
         * Entropy
         * (DEPRECATED -- MUST REMAIN SUPPORTED INDEFINITELY)
         *
         * Initialize entropy (used for HD wallet).
         *
         * NOTE: This is a cryptographically-secure "random"
         * 32-byte (256-bit) value.
         */
        _entropy: null,

        /**
         * Keychain
         *
         * Manages a collection of BIP-32 wallets.
         *
         * [
         *   {
         *     id        : '5be2e5c3-9d27-4b0f-bb3c-8b2ef6fdaafd',
         *     type      : 'studio',
         *     title     : `My Studio Wallet`,
         *     entropy   : 0x0000000000000000000000000000000000000000000000000000000000000000,
         *     createdAt : 0123456789,
         *     updatedAt : 1234567890,
         *   },
         *   {
         *     id        : 'f2457985-4b92-4025-be8d-5f11a5fc4077',
         *     type      : 'ledger',
         *     title     : `My Ledger Wallet`,
         *     createdAt : 0123456789,
         *     updatedAt : 1234567890,
         *   },
         * ]
         */
        _keychain: null,

        /**
         * Wallet
         *
         * Currently active wallet object.
         */
        _wallet: null,
    }),

    getters: {
        /* Return NEXA.js wallet instance. */
        wallet(_state) {
            return _state._wallet
        },

        /* Return wallet status. */
        isReady(_state) {
            return _state.wallet?.isReady
        },

        /* Return wallet status. */
        address(_state) {
            return _state.wallet?.address
        },

        /* Return wallet status. */
        assets(_state) {
            return _state.wallet?.assets
        },

        /* Return wallet status. */
        balances(_state) {
            // FIXME: Update library to expose data OR
            //        refactor to `markets`.
            return _state.wallet?._balances
        },

    },

    actions: {
        async initWeb3() {
            /* Set Smartstarter Address. */
            const addr = '0xDbd91DD51A3152cB26f0b3AcaDE6E25910E71F10'

            /* Set Smartstarter ABI. */
            const abi = require('./contracts/SubnetGuru.json')

            /* Initialize provider. */
            const provider = new ethers.providers
                // .JsonRpcProvider('https://wispy-damp-meadow.avalanche-mainnet.discover.quiknode.pro/e47ea5d0f6aa7820a004234e9ef2a5156d260fe1')
                .JsonRpcProvider('https://api.avax.network/ext/bc/C/rpc')
            console.log('PROVIDER', provider)

            /* Initialize campaign instance. */
            const guruStore = new ethers.Contract(addr, abi, provider)
            console.log('CONTRACT (guruStore):', guruStore)

            /* Request smartstarter nickname. */
            const version = await guruStore
                .getVersion()
                .catch(err => {
                    console.error(err)

                    /* Handle invalid call. */
                    if (err.code === 'CALL_EXCEPTION') {
                        throw new Error('Failed to load (on-chain) Smartstarter contract.')
                    }
                })
            console.log('GURU STORE (version):', version, version.toNumber())
        },

        setEntropy(_entropy) {
            this._entropy = _entropy
        },

        setMnemonic(_mnemonic) {
            let entropy
            let error

            try {
                /* Derive entropy. */
                // entropy = mnemonicToEntropy(_mnemonic)
            } catch (err) {
                /* Set error message. */
                error = err.message
            }

            /* Validate error. */
            if (error) {
                return error
            }

            /* Set entropy. */
            this._entropy = entropy

            /* Create wallet. */
            // this.createWallet(entropy)

            /* Return entropy. */
            return this.wallet
        },

        destroy() {
            /* Reset wallet. */
            this._entropy = null
            this._wallet = null

            console.info('Wallet destroyed successfully!')
        },
    },
})
