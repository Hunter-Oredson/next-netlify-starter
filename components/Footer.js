import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          Made with <img src="/netliheart.svg" height={15} /> using Next.js
        </div>
      </div>
      <div className={styles.copyright}>
        © {year} Hunter Oredson, All Rights Reserved
      </div>
    </footer>
  );
}
