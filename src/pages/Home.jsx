import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h4>¡Bienvenidos a MagiToys!</h4>
        <h2>Juguetes que hacen felices</h2>
        <h1>Magia en cada juego</h1>
        <p>Descubrí nuestra colección de juguetes para todas las edades.</p>
        <button onClick={() => navigate("/productos")}>Ver productos</button>
      </div>
    </section>
  );
}

export default Home;