import { configureStore } from '@reduxjs/toolkit';

let initialSate = {
    counter: 0,
};

const counterReducer= (state = initialSate, action) => {

    if(action.type === 'increment'){
        return { counter: state.counter +1}
    }
    if(action.type === 'decrement') {
        return { counter: state.counter -1}
    } 
}

const store = configureStore({
    reducer : counterReducer,
    preloadedState: initialSate
})

export default store;