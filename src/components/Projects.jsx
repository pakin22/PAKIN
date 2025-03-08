const projects = [
    {
      name: "Weather App",
      description: "พัฒนาเว็บพยากรณ์อากาศโดยใช้ Flutter และ Open-Meteo API",
      tech: "React, API, CSS",
    },
    {
      name: "Expense Tracker App",
      description: "แอปบันทึกรายรับ-รายจ่าย  ใช้ Context API จัดเก็บข้อมูลแบบ memory และเชื่อมฐานข้อมูล backend",
      tech: "React Native, expo,",
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
              
            </div>
          ))}
        </div>
      </section>
    );
  }
  