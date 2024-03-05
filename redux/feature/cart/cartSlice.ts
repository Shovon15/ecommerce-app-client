import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface IProduct {
    cart: any;
    id: string;
    image: object | null;
    title: string;
    price: string;
    quantity?: number | undefined;
}

const cartItemsFromStorage: IProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');

const initialState: IProduct[] = cartItemsFromStorage;


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const { id, quantity = 1 } = action.payload;
            const existingProductIndex = state.findIndex(product => product.id === id);

            if (existingProductIndex !== -1) {
                state[existingProductIndex].quantity! += quantity;
            } else {
                state.push({ ...action.payload, quantity });
            }

            // localStorage.setItem("cart", JSON.stringify(state));
        },
        removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
            const { id } = action.payload;
            const existingProductIndex = state.findIndex(product => product.id === id);

            if (existingProductIndex !== -1) {
                if (state[existingProductIndex].quantity! > 1) {
                    state[existingProductIndex].quantity! --;
                } else {
                    state.splice(existingProductIndex, 1);
                }
            }

            // localStorage.setItem("cart", JSON.stringify(state));
        },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;