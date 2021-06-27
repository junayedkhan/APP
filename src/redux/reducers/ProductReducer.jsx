import {ActionsType} from "../contants/ActionsType"

const initialstate = {
    products: []
}

export const ProductReducer = (state = initialstate, {type, payload}) => {
    switch (type) {
        case ActionsType.SET_PRODUCTS:
            return {...state, products: payload}   
        default:
            return state
    }
}

export const SelectedProductReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionsType.SELECTED_PRODUCT:
            return {...state, ...payload}
            case ActionsType.REMOVE_SELECTED_PRODUCT:
                return {}
        default:
            return state
    }
}