import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>Made by Hunter Oredson using Next.js</div>
      <div className={styles.container}></div>
    </footer>
  );
}
