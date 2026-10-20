import './Proyectos.css';
  import semaforo from '../../assets/semaforo2.jpg';
  import pelectric from '../../assets/pelectric.jpg';
  import android from '../../assets/androidstudio.png';
const Proyectos = () => {
  // Arreglo de proyectos (Simulando una base de datos o API)
  const proyectosData = [
    {
      id: 1,
      imagen: pelectric,
      titulo: "Desarrollo de pagina web - G-SERVICES SAC",
      descripcion: "Aplicación web de venta de suministros electricos y servicios indutriales.",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "React", "Laravel", "MySQL"],
      linkDemo: "",
      linkCodigo: "#"
    },
    {
      id: 2,
      imagen: android ,
      titulo: "Desarrollo de Aplicación movil de gestion de tareas GesTask.",
      descripcion: "Aplicación movil, para organizacion de tareas, donde el Admin podra asignar tareas a los empleados.",
      tecnologias: ["AndroidStudio", "SQLite", "Java"],
      linkDemo: "https://fravia.com.pe",
      linkCodigo: "#"
    },
    {
      id: 3,
      imagen: "https://jypsac.com/wp-content/uploads/2025/05/133432-2.jpg.webp",
      titulo: "Pagina web de Perifericos Jyp Perifericos SAC.",
      descripcion: "Aplicación web para la venta y servicio de perifericos.",
      tecnologias: ["React", "Laravel", "MySQL", "JavaScript"],
      linkDemo: "https://jypsac.com/",
      linkCodigo: "#"
    },
    {
      id: 4,
      imagen: semaforo,
      titulo: "Semaforo inteligente",
      descripcion: "Construcción de dos Semaforos Inteligentes con contador de vechiculos.",
      tecnologias: ["Tinkercard", "C++"],
      linkDemo: "https://www.tinkercad.com/things/h3QFcRODoip-grupo-4-semaforo-inteligente/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard&sharecode=Y35v0X5-kJQB6SNai35kIS4yzWIH-LoCdEHt3gwqUNM",
      linkCodigo: "#"
    }
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center">Proyectos Destacados</h2>

        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">

              {/* 1. Imagen del Proyecto */}
              <div className="proyecto-imagen">
                <img src={proyecto.imagen} alt={`Captura de ${proyecto.titulo}`} />
              </div>

              {/* 2. Contenido de la Tarjeta */}
              <div className="proyecto-contenido">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>

                {/* 3. Etiquetas de Tecnologías (Mapeo Anidado) */}
                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 4. Botones de Acción */}
                <div className="proyecto-links">
                  <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-demo">
                    {/* Ícono de Enlace Externo */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo en Vivo
                  </a>

                  <a href={proyecto.linkCodigo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-codigo">
                    {/* Ícono de GitHub */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Ver Código
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;