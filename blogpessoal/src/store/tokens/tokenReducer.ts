import { Action } from "./actions";

export interface TokenState {
    tokens: string
}

const initialState = {
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialState, actions: Action) => {
    switch(actions.type){
        case "ADD_TOKEN":{
            return {tokens: actions.payload}
        }

        default:
            return state
    }
}