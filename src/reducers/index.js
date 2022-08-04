import { combineReducers } from 'redux'
import brandReducers from './brandReducer'
import categoryReducers from './categoryReducer'

import childProductReducer from './childProductReducer'
import menProductReducer from './menProductReducer'
import productSaleReducer from './productSaleReducer'
import userReducer from './userReducer'
import womenProductReducer from './womenProductReducer'

const reducers = combineReducers({
    productSale: productSaleReducer,
    menProduct: menProductReducer,
    womenProduct: womenProductReducer,
    childProduct: childProductReducer,
    user: userReducer,
    category: categoryReducers,
    brand: brandReducers

})
export default (state, action) => reducers(state, action)