import { createStore } from 'redux';
const addItem = [];
const reducer = (state = addItem, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];

        case 'DEL':
            const positionProductDeL = state.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (positionProductDeL !== -1) {
                return state.filter(
                    (item, index) => index !== positionProductDeL,
                );
            } else {
                return state;
            }

        default:
            return state;
    }
};
const store = createStore(reducer);
export default store;
