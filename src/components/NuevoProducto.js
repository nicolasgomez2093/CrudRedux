import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addNewProductAction } from "../actions/productosActions";
import {showAlertAction, coverAlertAction} from '../actions/alertActions'

function NuevoProducto() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const cargando = useSelector( (state)=> state.productos.loading )
  const error = useSelector(state => state.productos.error)
  const alert = useSelector(state => state.alert.alert)


  const addProduct = (product) => dispatch(addNewProductAction(product));

  const submitNewProduct = (e) => {
    e.preventDefault();
    if (name.trim() === '' || price <=  0){
        const alert = {
            msg: 'Ambos campos son obligatorios',
            classes: 'alert alert-danger text-center text-uppercase p3'
        }
        dispatch( showAlertAction(alert) )
        return
    }
    dispatch( coverAlertAction() )
    addProduct({ name, price});
    navigate('/')
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Nombre producto</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio producto</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Precio Producto"
                  name="precio"
                  value={price}
                  onChange={e => setPrice(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                ENVIAR
              </button>
            </form>
            {cargando ? <p>Cargando...</p> : null}
            {error ? <p className="alert alert-danger p2">Hubo un error</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default NuevoProducto;
