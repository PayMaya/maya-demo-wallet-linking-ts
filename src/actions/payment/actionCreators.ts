import * as actionTypes from "./actionTypes"

export function paymentSuccessful(payload: { redirectPath: string }) {
    return {
        type: actionTypes.PAYMENT_SUCCESSFUL,
        payload
    }
}

export function paymentFailed(payload: { redirectPath: string }) {
    return {
        type: actionTypes.PAYMENT_FAILED,
        payload
    }
}

export function paymentCancelled(payload: { redirectPath: string }) {
    return { 
        type: actionTypes.PAYMENT_CANCELLED,
        payload
    }
}

export function paymentCleared() {
    return { 
        type: actionTypes.PAYMENT_CLEARED,
    }
}