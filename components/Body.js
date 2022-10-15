import styles from "./Body.module.css";
import Intro from "@components/Intro";
import Experience from "@components/Experience";
import Testimonials from "@components/Testimonials";
import Education from "@components/Education";
import Contact from "./Contact";

export default function Body() {
  return (
    <body className={styles.body}>
      <Intro />
      <Education />
      <Experience title="Experience" />
      <Testimonials />
      <Contact title="Contact" />
    </body>
  );
}
