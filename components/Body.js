import styles from "./Body.module.css";
import Intro from "@components/Intro";
import Experience from "@components/Experience";
import Testimonials from "@components/Testimonials";

export default function Body() {
  return (
    <body className={styles.body}>
      <div className="divider" />
      <Intro />
      <Experience title="Experience" />
      <Testimonials />
    </body>
  );
}
