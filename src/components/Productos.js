import React, {Fragment, useEffect} from 'react'

import {useSelector, useDispatch } from 'react-redux'
import { getProductsAction } from '../actions/productosActions'
import Producto from './Producto'

function Productos() {
  const dispatch = useDispatch()

  useEffect( () => {
    const getProducts = () => dispatch( getProductsAction()) 
    getProducts()
  }, [])

  const products = useSelector( state => state.productos.productos)
  const error = useSelector( state => state.productos.error)
  const cargando = useSelector( state => state.productos.loading)

  return (
    <Fragment>
        <h2 className='text-center my-5'>Listado de Productos</h2>
        {cargando ? <p className='text-center'>Cargando...</p> : null}
        {error ? <p className='font-weight-bold alert alert-danger text-center mt-4'>Hubo un error</p> : null}
        <table className='table table-striped'>
            <thead className='bg-primary table-dark'>
                <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Precio</th>
                    <th scope='col'>Acciones</th>
                </tr>
            </thead>
            <tbody>
              {products.length === 0 ? 'No hay  productos' : (
                products.map(product => (<Producto key={product.id} product={product}/>))
              )}
            </tbody>
        </table>
    </Fragment>
  )
}
export default Productos