import { Reducer } from 'redux'
import { CounterState } from './types'

const initialState = {
    count: 0
};

const reducer: Reducer<CounterState> = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return { ...state, count: state.count + 1 };
        case "DEC":
            return { ...state, count: state.count - 1 };
        case "RESET":
            return { ...state, count: 0 };
        default:
            return state;
    }
}

export { reducer as counterReducer }
