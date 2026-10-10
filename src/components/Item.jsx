import { Link } from "react-router-dom";

function Item({ id, nombre, categoria, precio, imagen }) {
  return (
    <div className="producto">
      <div className="producto-imagen">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="producto-descripcion">
        <span>{categoria}</span>
        <h5>{nombre}</h5>
        <h4>${precio.toLocaleString("es-AR")}</h4>
      </div>
      <Link to={`/producto/${id}`} className="carrito">Ver detalle</Link>
    </div>
  );
}

export default Item;