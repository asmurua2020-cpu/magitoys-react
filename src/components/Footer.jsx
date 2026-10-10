const equipo = [
  { nombre: "Adriana Murua", rol: "Fundadora", emoji: "👩" },
  { nombre: "Marcelo Iribarren", rol: "Atención al cliente", emoji: "🧑" },
  { nombre: "Vanina Vargas", rol: "Logística", emoji: "👨" },
];

function Footer() {
  return (
    <>
      <section className="newsletter section-p1">
        <div className="newstext">
          <h4>Suscribite al newsletter</h4>
          <p>Recibí novedades y <span>ofertas especiales</span></p>
        </div>
        <div className="form">
          <input type="email" placeholder="Tu email" />
          <button>Suscribirme</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <h4>Contacto</h4>
          <p>Av. Siempre Viva 123, Buenos Aires</p>
          <p>Tel: +54 11 1234-5678</p>
          <p>hola@magitoys.com</p>
        </div>

        <div className="col">
          <h4>Sucursales</h4>
          <p>Palermo - Av. Santa Fe 1000</p>
          <p>Belgrano - Av. Cabildo 2000</p>
          <p>Caballito - Av. Rivadavia 5000</p>
        </div>

        <div className="col">
          <h4>Información</h4>
          <a href="#">Políticas de privacidad</a>
          <a href="#">Términos y condiciones</a>
          <a href="#">Preguntas frecuentes</a>
        </div>

        <div className="col follow">
          <h4>Seguinos</h4>
          <div>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>

        <div className="equipo">
          {equipo.map((p, i) => (
            <div className="equipo-card" key={i}>
              <div className="avatar">{p.emoji}</div>
              <h5>{p.nombre}</h5>
              <span>{p.rol}</span>
            </div>
          ))}
        </div>

        <div className="copyright">
          <p>© 2026 MagiToys. Todos los derechos reservados (propiedad intelectual).</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;