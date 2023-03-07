import * as actionTypes from "./actionTypes"

export function getWalletSuccessful(payload: WalletDetails) {
    return {
        type: actionTypes.GET_WALLET_SUCCESSFUL,
        payload
    }
}

export function createWalletLinkSuccessful(payload: string) {
    return {
        type: actionTypes.CREATE_WALLET_LINK_SUCCESSFUL,
        payload
    }
}