import { useEffect, useState } from "react";
import Item from "./Item";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  return (
    <section className="section-productos section-p1">
      <h2>Nuestros productos</h2>
      <div className="productos-container">
        {productos.map((p) => (
          <Item key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;