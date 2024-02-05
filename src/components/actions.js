// actions.js

export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const increaseQuantity = (index) => ({
    type: INCREASE_QUANTITY,
    payload: index,
});

export const decreaseQuantity = (index) => ({
    type: DECREASE_QUANTITY,
    payload: index,
});

export const removeItem = (index) => ({
    type: REMOVE_ITEM,
    payload: index,
});
