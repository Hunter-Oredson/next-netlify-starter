export default function Header({ title }) {
  return (
    <div>
      <h1 className="title" id="about">
        {title}
      </h1>
      <img src="/Profile.jpg" alt="profile_picture" className="profile" />
      <h3>Full Stack Web Developer</h3>
    </div>
  );
}
