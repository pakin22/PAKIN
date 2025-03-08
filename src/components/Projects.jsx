const projects = [
    {
      name: "Weather App",
      description: "A simple weather app using Open-Meteo API",
      tech: "React, API, CSS",
      link: "https://github.com/johndoe/weather-app",
    },
    {
      name: "E-Commerce UI",
      description: "Frontend of an online store",
      tech: "React, Firebase, CSS",
      link: "https://github.com/johndoe/ecommerce",
    }
  ];
  
  export default function Projects() {
    return (
      <section>
        <h2>Projects</h2>
        <div>
          {projects.map((project, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p><strong>Tech:</strong> {project.tech}</p>
              <a href={project.link}>GitHub</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  