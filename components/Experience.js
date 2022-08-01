import experience from "../public/experience";

export default function Experience({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      {experience.map((e, index) => (
        <>
          <h2 key={e.name + index}>{e.name}</h2>
          <div className="container">
            <div>{e.position}</div>
            <div>
              {e.start} - {e.end}
            </div>
          </div>
        </>
      ))}
    </>
  );
}
