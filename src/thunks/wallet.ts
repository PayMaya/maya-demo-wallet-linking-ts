import { Dispatch } from "redux";
import { paymentCancelled, paymentFailed, paymentSuccessful } from "../actions/payment/actionCreators";
import { createWalletLinkSuccessful, getWalletSuccessful } from "../actions/wallet/actionCreators";
import { createWalletLink, createWalletPayment, getWalletLinkDetails } from "../services/wallet";

export function linkWalletThunk() {
    return async (dispatch: Dispatch) => {
        const response = await createWalletLink();
        dispatch(createWalletLinkSuccessful(response.linkId))
        window.location.href = response.redirectUrl;
    }
}

export function payWithWalletThunk(wallet: WalletDetails, totalAmount: number) {
    return async (dispatch: Dispatch) => {
        try {
            if(wallet.customer) {
                const {requestReferenceNumber, walletPayment} = await createWalletPayment(wallet,totalAmount);
                processPaymentResult(walletPayment.status,requestReferenceNumber, dispatch); 
            } else {
                dispatch(paymentFailed({ redirectPath: '/purchase/failed' }))
            }
        } catch (error) {
            console.log(error);
            dispatch(paymentFailed({ redirectPath: '/purchase/failed' }))
        }
    } 
}

function processPaymentResult(result:string, requestReferenceNumber:string, dispatch:Dispatch) {
    let redirectPath;

    switch (result) {
        case 'PAYMENT_SUCCESS':
            redirectPath = `/purchase/success/?id=${requestReferenceNumber}`
            dispatch(paymentSuccessful({ redirectPath }));
            break;
        case 'PAYMENT_FAILED':
            redirectPath = `/purchase/failed/?id=${requestReferenceNumber}`
            dispatch(paymentFailed({ redirectPath }));
            break;
        case 'PAYMENT_CANCELLED':
            redirectPath =`/purchase/canceled/?id=${requestReferenceNumber}`
            dispatch(paymentCancelled({ redirectPath }));
            break;
        default:
            break;
    }
}

export function getWalletThunk(linkId: string) {
    return async (dispatch: Dispatch) => {
        try {
            const walletDetails = await getWalletLinkDetails(linkId);
            dispatch(getWalletSuccessful(walletDetails));
        } catch (error) {
            console.error(error);
        }
    }
}