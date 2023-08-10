export const reducer = (state: { cart: any[]; }, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "CLEAR_CART":
            return { ...state, cart: [] };
        case "REMOVE_CART_ITEM":

            return { ...state, cart: [] };
        case "INCREASE_QTY":
            return { ...state, cart: [] };
        case "DECREASE_QTY":

            return { ...state, cart: [] };
        default:
            throw new Error(`No Matching ${action.type} - action type`);
    }
};