import axios from 'axios';
import config from '../config';
import { v4 as uuidv4 } from 'uuid';
import { Buffer } from 'buffer';

const mayaWalletUrl: string = config.maya_wallet.url;
const hostUrl = config.host_url;
const publicAuth: string = Buffer.from(`${config.maya_wallet.pub_api_key}:`, 'binary').toString('base64');
const secretAuth: string = Buffer.from(`${config.maya_wallet.sec_api_key}:`, 'binary').toString('base64');

/* 
    For demo purposes, the following functions were done on the frontend. 
    However, when implementing for commercial use, please do the following transactions
    on your backend servers to protect the linkId of the customer.
*/

export const createWalletLink = async () :Promise<CreateWalletLinkResponse> => {
    const requestReferenceNumber = uuidv4();
    const req:createWalletLinkRequest = {
        redirectUrl: {
            success: `${hostUrl}/wallets?id=${requestReferenceNumber}`,
            failure: `${hostUrl}/wallets?id=${requestReferenceNumber}`,
            cancel: `${hostUrl}/wallets?id=${requestReferenceNumber}`
        },
    }

    const headers = {
        accept: 'application/json',
        authorization: `Basic ${publicAuth}`,
        'content-type': 'application/json'
    }

    const response = await axios.post(`${mayaWalletUrl}`, req, { headers });
    const walletLinkResponse: CreateWalletLinkResponse = response.data;
    return walletLinkResponse;
}
export const createWalletPayment = async (wallet:WalletDetails, totalAmount: number) => {
    const requestReferenceNumber = uuidv4();
    const req:CreateWalletLinkPaymentRequest = {
        linkId: wallet.linkId!,
        totalAmount: {
            value: totalAmount,
            currency: "PHP"
        },
        requestReferenceNumber
    }

    const headers = {
        accept: 'application/json',
        authorization: `Basic ${secretAuth}`,
        'content-type': 'application/json'
    }

    const response = await axios.post(`${mayaWalletUrl}/${wallet.linkId}/execute`, req, { headers });
    const transaction = response.data;
    return { requestReferenceNumber, walletPayment: transaction };
}

export const getWalletLinkDetails = async (linkId: string) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${secretAuth}`,
        'content-type': 'application/json'
    }
    const response = await axios.get(`${mayaWalletUrl}/${linkId}`, { headers });
    const walletDetails:WalletDetails = { linkId ,...response.data }
    return walletDetails;
}