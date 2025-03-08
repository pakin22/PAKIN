const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Firebase", "figma", "expo", "flutter", "C#", "reacetnative"];

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
