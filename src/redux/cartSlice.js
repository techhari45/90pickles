import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id && item.weight === newItem.weight);

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    image: newItem.image,
                    weight: newItem.weight,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
                state.totalQuantity++;
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                state.totalQuantity++;
            }
            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        removeFromCart(state, action) {
            const { id, weight } = action.payload;
            const existingItem = state.items.find((item) => item.id === id && item.weight === weight);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.items = state.items.filter((item) => !(item.id === id && item.weight === weight));
            }
            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        updateQuantity(state, action) {
            const { id, weight, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id && item.weight === weight);

            if (existingItem && quantity > 0) {
                const diff = quantity - existingItem.quantity;
                state.totalQuantity += diff;
                existingItem.quantity = quantity;
                existingItem.totalPrice = existingItem.price * quantity;
            }
            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
