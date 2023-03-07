interface PaymentAction {
    type: string,
    payload: {
        redirectPath: string
    }
}