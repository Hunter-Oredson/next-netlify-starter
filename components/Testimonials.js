import testimonies from "../public/testimonies";

export default function Testimonials() {
  return (
    <>
      <h1 className="title" id="testimonials">
        Testimonials
      </h1>
      {testimonies.map((t) => (
        <>
          <div className="testimony">
            <div style={{ textAlign: "left " }}>
              <h3 style={{ marginBottom: 0 }}>
                <a href={t.link}>{t.name}</a>
              </h3>
              <h5 style={{ marginTop: 0 }}>{t.title}</h5>
            </div>
          </div>
          <div style={{ marginTop: 0 }}>"{t.message}"</div>
          <div className="divider" />
        </>
      ))}
    </>
  );
}
