import Image from "next/image";
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
          <div
            className={
              index % 2 === 1 ? "eTopContainer" : "eTopContainerReverse"
            }
          >
            <a href={e.link}>
              <img src={e.image} className={"webImage"} />
            </a>
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
              </div>
            </div>
          </div>
          <div>
            <p>{e.description}</p>
          </div>
          <div
            className="divider"
            style={{ marginTop: 75, marginBottom: 75 }}
          />
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
            <a href={e.link}>
              <img src={e.image} height={50} />
            </a>
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
