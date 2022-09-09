import { useEffect, useState } from "react";
import experience from "../public/experience";

export default function Experience({ title }) {
  const [personal, setPersonal] = useState([]);
  const [exp, setExp] = useState([]);

  useEffect(() => {
    const myExperience = [];
    const myProjects = [];

    experience.forEach((e) => {
      e.personal ? myProjects.push(e) : myExperience.push(e);
    });

    setPersonal(myProjects);
    setExp(myExperience);
  }, []);

  return (
    <div>
      <h1 className="title" id="experience">
        {title}
      </h1>
      {exp.map((e, index) => (
        <div>
          <h2 key={e.name + index}>
            <a href={e.link}>{e.name}</a>
          </h2>
          <div className="eContainer">
            <div>
              <div>{e.position}</div>
              <div>
                {e.start} - {e.end}
              </div>
            </div>
            <div>
              <p>{e.description}</p>
            </div>
          </div>
        </div>
      ))}
      {personal.map((e, index) => (
        <>
          <h1 className="title" id="projects">
            personal projects
          </h1>
          <div>
            <h2 key={e.name + index}>
              <a href={e.link}>{e.name}</a>
            </h2>
            <div className="eContainer">
              <div>
                <p>{e.description}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
