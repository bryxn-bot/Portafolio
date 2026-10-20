import { useState } from 'react';
import './Habilidades.css';
import unmsm from '../../assets/unmsm.jpg';

const Habilidades = () => {
  const [imagenActiva, setImagenActiva] = useState(null);

  const skillsData = [
    {
  id: 1,
  titulo: "SQL SERVER",
  descripcion: "Modelado de base de datos, DER, Consultas multiples.",
  nivel: "Intermedio",
  botonTexto: "VER CERTIFICADO",
  certificado: unmsm,
  estado: "completado"
},
    {
      id: 2,
      titulo: "SQL Server / MySQL / PostGreSQL / Oracle",
      descripcion: "SQL, T-SQL, Optimización, Procedimientos Almacenados.",
      nivel: "Avanzado",
      botonTexto: "VER CERTIFICADO",
      estado: "completado"
    },
    {
      id: 3,
      titulo: "Python for Data Analyst",
      descripcion: "Pandas, NumPy, Matplotlib, Automatización, Keras.",
      nivel: "Avanzado",
      botonTexto: "VER CERTIFICADO",
      estado: "completado"
    },
    // ...agrega "certificado" a los demás igual que arriba
  ];

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">

              <div className="skill-header">
                <div className="skill-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>

                {/* Ahora es un <button> y solo aparece si hay certificado */}
                {skill.certificado && (
                  <button
                    type="button"
                    className={`skill-badge ${skill.estado === 'proceso' ? 'badge-yellow' : 'badge-green'}`}
                    onClick={() => setImagenActiva(skill.certificado)}
                  >
                    {skill.botonTexto}
                  </button>
                )}
              </div>

              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-desc">{skill.descripcion}</p>
                <span className="skill-level">{skill.nivel}</span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Modal del certificado */}
      {imagenActiva && (
        <div className="modal-overlay" onClick={() => setImagenActiva(null)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-cerrar"
              onClick={() => setImagenActiva(null)}
              aria-label="Cerrar"
            >
              ✕
            </button>
            <img src={imagenActiva} alt="Certificado" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Habilidades;