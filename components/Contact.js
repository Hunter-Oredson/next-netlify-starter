export default function Contact({ title }) {
  return (
    <>
      <h1 className="title" id="contact">
        {title}
      </h1>
      <a href="https://www.linkedin.com/in/hunter-oredson-332894208/">
        {" "}
        <img src="/linkedin.svg" />
      </a>
    </>
  );
}
