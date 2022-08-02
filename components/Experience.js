import experience from "../public/experience";

export default function Experience({ title }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      {experience
        .filter((e) => !e.personal)
        .map((e, index) => (
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
      {experience
        .filter((e) => e.personal)
        .map((e, index) => (
          <>
            <h1 className="title">personal projects</h1>
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
