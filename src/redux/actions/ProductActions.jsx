import { ActionsType } from "../contants/ActionsType"

export const SetProducts = (products) => {
    return{
        type: ActionsType.SET_PRODUCTS ,
        payload: products
    }
}

export const SelectedProduct = (product) => {
    return{
        type: ActionsType.SELECTED_PRODUCT ,
        payload: product
    }
}

export const RemoveSelectedProduct = () => {
    return{
        type: ActionsType.REMOVE_SELECTED_PRODUCT
    }
}