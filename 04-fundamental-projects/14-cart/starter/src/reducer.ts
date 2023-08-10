interface CartItem {
    id: string,
    title: string
    price: string
    img: string
    amount: number,
}



//track total quantity
//track total price
//refactor to use MAP methods

export const reducer = (state: { cart: any; }, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "CLEAR_CART":
            return { ...state, cart: [] };
        case "REMOVE_CART_ITEM":
            let newArr: CartItem[] = []

            state.cart.forEach((item: any) => {
                if (item.id !== action.payload) {
                    newArr.push(item)
                }
            })

            return { ...state, cart: newArr };
        case "INCREASE_QTY":
            let increased: CartItem[] = []

            state.cart.forEach((item: any) => {
                if (item.id === action.payload) {
                    increased.push({
                        ...item,
                        amount: item.amount++
                    })
                } else {
                    increased.push(item)
                }
            })

            return { ...state, cart: increased };
        case "DECREASE_QTY":
            let decreased: CartItem[] = []

            state.cart.forEach((item: any) => {
                if (item.id === action.payload && item.amount > 0) {
                    decreased.push({
                        ...item,
                        amount: item.amount--
                    })
                } else {
                    decreased.push(item)
                }
            })

            return { ...state, cart: decreased };
        default:
            throw new Error(`No Matching ${action.type} - action type`);
    }
};