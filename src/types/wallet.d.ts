interface WalletDetails {
    linkId?: string
    profileId?: string
    card?: {
        state: string 
    }
    customer?: customerDetails
}

interface customerDetails {
    firstName: string,
    middleName: string,
    lastName: string,
    birthday: string,
    sex: "M" | "F",
    contact: contactDetails
}

interface contactDetails {
    phone: string,
    email: string
}

interface createWalletLinkRequest {
    redirectUrl: {
        success: string,
        failure: string,
        cancel: string
    }
    userId?: string
}

interface CreateWalletLinkPaymentRequest {
    linkId: string,
    totalAmount: {
        value: number,
        currency: string
    }
    requestReferenceNumber: string
}

interface CreateWalletLinkResponse {
    linkId: string,
    redirectUrl: string
}