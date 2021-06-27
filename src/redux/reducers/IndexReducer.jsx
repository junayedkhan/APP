import { combineReducers } from "redux"
import { ProductReducer, SelectedProductReducer } from "./ProductReducer"

const reducers = combineReducers({
    AllProducts: ProductReducer,
    product: SelectedProductReducer
})

export default reducers
