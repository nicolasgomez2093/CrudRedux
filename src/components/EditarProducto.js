import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProductAction } from "../actions/productosActions";
import {useNavigate} from 'react-router-dom'

function EditarProducto() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [productEdit, setProductEdit] = useState({
    name: "",
    price: "",
  });

  const product = useSelector((state) => state.productos.productEdit);

  useEffect(() => {
    setProductEdit(product);
  }, [product]);

  const handleChangeForm = (e) => {
    setProductEdit({
      ...productEdit,
      [e.target.name]: e.target.value,
    });
  };

  const submitEditProduct = (e) => {
    e.preventDefault();
    dispatch(editProductAction(productEdit));
    navigate('/')
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={submitEditProduct}>
              <div className="form-group">
                <label>Nombre producto</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nombre Producto"
                  name="name"
                  onChange={handleChangeForm}
                  value={productEdit.name}
                />
              </div>
              <div className="form-group">
                <label>Precio producto</label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Precio Producto"
                  name="price"
                  onChange={handleChangeForm}
                  value={productEdit.price}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditarProducto;
