import * as cartActionTypes from "./actions/cart/actionTypes"
import * as walletActionTypes from "./actions/wallet/actionTypes"
import * as paymentActionTypes from "./actions/payment/actionTypes"

const initCart: Cart = {
  items: [],
  quantity: 0,
  totalAmount: 0
}

const cart = (state: Cart = initCart, action: CartAction): Cart => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      const addedProduct: Product = action.payload
      const updatedCart: Cart = {
        ...state,
        items: state.items.map(item => {
          if (item.product.name === addedProduct.name) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return { ...item }
          }
        }),
      }

      // if item not yet in cart
      if (!state.items.some(item => item.product.name === addedProduct.name)) {
        updatedCart.items.push({ 
          product: addedProduct, 
          quantity: 1, 
          totalPrice: addedProduct.unitPrice 
        })
      }

      // calculate totals
      updatedCart.items.forEach(item => item.totalPrice = item.quantity * item.product.unitPrice)
      updatedCart.quantity = updatedCart.items.map(item => item.quantity).reduce((a, b) => a + b, 0)
      updatedCart.totalAmount = updatedCart.items.map(items => items.totalPrice).reduce((a, b) => a + b, 0)
      
      return updatedCart
    case cartActionTypes.CLEAR_CART:
      return initCart
    default:
      return state
  }
}

const defaultUser: User = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'janedoe@test.com'
}
const currentUser = (state: User = defaultUser, action: any): User => {
  return state
}

const wallet = (state: WalletDetails = {}, action: any): WalletDetails => {
  switch (action.type) {
    case walletActionTypes.GET_WALLET_SUCCESSFUL:
      return action.payload
    case walletActionTypes.CREATE_WALLET_LINK_SUCCESSFUL:
      return { ...(state), linkId: action.payload }
    default:
      return state;
  }
}

const postPaymentRedirectUrl = (state: string | null = null, action: PaymentAction): string | null => {
  switch (action.type) {
    case paymentActionTypes.PAYMENT_SUCCESSFUL:
    case paymentActionTypes.PAYMENT_FAILED:
    case paymentActionTypes.PAYMENT_CANCELLED:
      const { payload } = action;
      return payload.redirectPath
    case paymentActionTypes.PAYMENT_CLEARED:
      return null
    default:
      return state
  }
}

export { cart, currentUser, wallet, postPaymentRedirectUrl }