import { SET_JWT } from "./constants";

const initialState = {
    jwt: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JWT:
            return { ...state, jwt: action.payload};
        default:
            return state;
    }
};

export default rootReducer;
