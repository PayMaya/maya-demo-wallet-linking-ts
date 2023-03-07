import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getWalletThunk, linkWalletThunk } from "../thunks/wallet";

export function WalletList() {
    const wallet:WalletDetails = useSelector((state:AppState) => state.wallet)

    const dispatch: Dispatch<any> = useDispatch();
    const onLinkWallet = () => {
        dispatch(linkWalletThunk());
    }

    useEffect(() => {
        if(wallet.linkId) {
            dispatch(getWalletThunk(wallet.linkId))
        }
    }, [wallet.linkId]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="wallet-list-container">
            <div className="maya-wallet-container">
                <div className="maya-logo">
                    <img src={require('../assets/maya_logo.png')} alt="maya_logo"></img>
                </div>
                <div className="maya-info">
                    { wallet.customer ? 
                        <div className="maya-customer-info">
                            <p>{ maskPhoneNumber(wallet.customer.contact.phone) }</p>
                            <p>&#x2713; Linked</p>
                        </div> :
                        <button className="btn green link-wallet-button" onClick={ onLinkWallet }>Link Your Wallet</button>
                    }
                </div>
            </div>
        </div>
    )
}

function maskPhoneNumber(phoneNumber: string) {
    return phoneNumber.replace(phoneNumber.substring(4,9), "*****")
}