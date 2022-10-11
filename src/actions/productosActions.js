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
  START_EDIT_PRODUCT
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

//Crear Nuevos Productos
export function addNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      await clienteAxios.post("/productos", product);
      dispatch(addProductSuccess(product));
      Swal.fire("Correcto", "El producto se agrego correctamente", "success");
    } catch (error) {
      dispatch(addProductError(true));
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = (estado) => ({
  type: ADD_PRODUCT_ERROR,
  payload: estado,
});

export function getProductsAction() {
  return async (dispatch) => {
    dispatch(getProducts());

    try {
      const resp = await clienteAxios.get("/productos");
      dispatch(getProductsSuccess(resp.data));
    } catch (error) {
      dispatch(getProductsError());
    }
  };
}

const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: true,
});

const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = () => ({
  type: GET_PRODUCTS_ERROR,
  payload: true,
});

// DELETE
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(getProductDelete(id))

        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch( deleteProductSuccess() )
            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            )
        } catch (error) {
            dispatch( deleteProductError() )
        }
    }
}

const getProductDelete = id => ({
    type: DELETE_PRODUCTS,
    payload: id
})
const deleteProductSuccess = () => ({
    type: DELETE_PRODUCTS_SUCCESS
})
const deleteProductError = () => ({
    type: DELETE_PRODUCTS_ERROR,
    payload: true
})

// EDITAR

export function getProductEditAction(product) {
    return (dispatch) => {
        dispatch( getProductEdit(product))
    }
}

const getProductEdit = product => ({
    type: EDIT_PRODUCT,
    payload: product
})

export function editProductAction(product) {
    return async (dispatch) => {
        dispatch( editProduct() )

        try {
            await clienteAxios.put(`/productos/${product.id}`, product)
            dispatch( editProductSuccess(product) )
        } catch (error) {
            dispatch( editProductError() )
        }
    }
}

const editProduct = () => ({
    type: START_EDIT_PRODUCT,
})

const editProductSuccess = product => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product
})

const editProductError = () => ({
    type: EDIT_PRODUCT_ERROR,
    payload: true
})