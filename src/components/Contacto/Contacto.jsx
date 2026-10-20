import { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  // Estado centralizado para el formulario (Formulario Controlado)
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Función para manejar los cambios en los inputs
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  // Función para simular el envío
  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`¡Gracias por tu mensaje, ${formulario.nombre}! Te contactaré pronto.`);
    // Limpiamos el formulario después de enviar
    setFormulario({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <h2 className="section-title">Trabajemos Juntos</h2>
        <div className="contacto-grid">

          {/* =========================================
              COLUMNA IZQUIERDA: INFORMACIÓN
          ========================================= */}
          <div className="contacto-info">
            <h3 className="info-title">Ponte en Contacto</h3>
            <p className="info-desc">
              ¿Tienes un proyecto en mente o necesitas ayuda para
              automatizar tus flujos de trabajo?
              Me encantaría escucharte.
            </p>

            <div className="info-items">
              {/* Ítem Email */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Email</span>
                  <p className="item-text">brayanhuaman64@gmail.com</p>
                </div>
              </div>

              {/* Item LinkedIn */}
                <div className="info-item">
                  <div className="info-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                    </svg>
                  </div>

                  <div>
                    <span className="item-label">LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/brayan-huaman-b70851361"
                      className="item-text"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mi Perfil de LinkedIn
                    </a>
                  </div>
                </div>


              <div className="info-item">
               <div className="info-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                 >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.09 3h3a2 2 0 0 1 2 1.72c.12.81.37 1.59.73 2.31a2 2 0 0 1-.45 2.11L9.91 10a16.05 16.05 0 0 0 6.09 6l1.09-1.09a2 2 0 0 1 2.11-.45c.72.36 1.5.61 2.31.73A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>

            <div>
              <span className="item-label">Teléfono</span>
              <p className="item-text">+51 939 999 525</p>
            </div>
          </div>

              {/* Ítem Ubicación */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Ubicación</span>
                  <p className="item-text">Lima - Perú</p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              COLUMNA DERECHA: FORMULARIO
          ========================================= */}
          <div className="contacto-form-wrapper">
            <form onSubmit={manejarEnvio} className="contacto-form">

              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">Enviar Mensaje</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contacto;