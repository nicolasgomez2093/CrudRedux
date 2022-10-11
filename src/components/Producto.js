import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction, getProductEditAction } from "../actions/productosActions";
import Swal from "sweetalert2";

function Producto({ product }) {
  const { name, price, id } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const confirmDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtomColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteProductAction(id));
      }
    });
  };

  const redirectEdition = product => {
    dispatch( getProductEditAction(product))
    navigate(`/productos/editar/${id}`)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        $ <span className="font-weight-bold">{price}</span>
      </td>
      <td className="acciones">
        <button onClick={() => redirectEdition(product)} className="btn btn-primary mr-2">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}
export default Producto;
