import { types } from "../types/types";


const initialState = {
    logged: false,
}


export const  authReducer = (state, action) => {

    switch (action.type) {
        case types.login:
            return state;

            case types.logout:
                return state;
    
        default:
            return state;
    }

}