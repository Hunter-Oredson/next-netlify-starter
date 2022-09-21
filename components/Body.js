import styles from "./Body.module.css";
import Intro from "@components/Intro";
import Experience from "@components/Experience";
import Testimonials from "@components/Testimonials";
import Contact from "./Contact";

export default function Body() {
  return (
    <body className={styles.body}>
      <Intro />
      <Experience title="Experience" />
      <Testimonials />
      <Contact title="Contact" />
    </body>
  );
}
