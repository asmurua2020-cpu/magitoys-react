import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => setProducto(data.find((p) => p.id === Number(id))));
  }, [id]);

  if (!producto) return <p className="section-p1">Cargando...</p>;

  return (
    <section className="section-productos section-p1">
      <div className="productos-container">
        <div className="producto">
          <div className="producto-imagen">
            <img src={producto.imagen} alt={producto.nombre} />
          </div>
          <div className="producto-descripcion">
            <span>{producto.categoria}</span>
            <h5>{producto.nombre}</h5>
            <p>{producto.descripcion}</p>
            <h4>${producto.precio.toLocaleString("es-AR")}</h4>
          </div>
          <Link to="/productos" className="carrito">Volver a productos</Link>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;