import education from "../public/education";

export default function Education() {
  return (
    <>
      <h1 className="title" id="testimonials">
        Education
      </h1>
      {education.map((e, index) => (
        <div key={e.place}>
          <div
            className={
              index % 2 === 1 ? "eTopContainer" : "eTopContainerReverse"
            }
          >
            <a href={e.link}>
              <img src={e.image} className={"webImage"} />
            </a>
            <div className={"smallTitle"}>
              <h2 key={e.place + index}>
                <a href={e.link}>{e.place}</a>
              </h2>
              <div className="eContainer">
                <div>
                  <div>{e.degree}</div>
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
    </>
  );
}
