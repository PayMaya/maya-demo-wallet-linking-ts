import { Dispatch } from "redux";
import { addToCart, clearCart } from "../actions/cart/actionCreators";

export function addToCartThunk(payload: Product) {
    return (dispatch: Dispatch) => dispatch(addToCart(payload))
}

export function clearCartThunk() {
    return (dispatch: Dispatch) => dispatch(clearCart())
}