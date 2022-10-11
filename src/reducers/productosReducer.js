import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    DELETE_PRODUCTS,
    DELETE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_ERROR,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
} from '../types'

// Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoDelete: null,
    productEdit: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS:
        case ADD_PRODUCT: 
            return {
                ...state, 
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state, 
                loading: false,
                productos:[...state.productos, action.payload]
            }
        case GET_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
        case DELETE_PRODUCTS_ERROR:
        case EDIT_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                productos: action.payload
            }
        case DELETE_PRODUCTS:
            return {
                ...state,
                productoDelete: action.payload
            }
        case DELETE_PRODUCTS_SUCCESS:
            return {
                ...state,
                productos: state.productos.filter( product => product.id !== state.productoDelete),
                productoDelete: null
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                productEdit: action.payload
            }
        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                productos: state.productos.map(product => product.id === action.payload.id ? product = action.payload : product),
                productEdit: null,
                
            }
        default:
            return state;
    }
}