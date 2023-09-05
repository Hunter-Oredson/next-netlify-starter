export default function Contact({ title }) {
  return (
    <>
      <h1 className="title" id="contact">
        {title}
      </h1>
      <div style={{ margin: "0px 0px" }}>
        <a href="mailto:hunteroredson@gmail.com?subject=Hunter%20Oredson%20website%20resume">
          {" "}
          <img src="/email.svg" alt="email" />
        </a>
        <a href="https://www.linkedin.com/in/hunter-oredson-332894208/">
          {" "}
          <img src="/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://github.com/Hunter-Oredson">
          {" "}
          <img src="/github.svg" alt="github" />
        </a>
      </div>
    </>
  );
}
