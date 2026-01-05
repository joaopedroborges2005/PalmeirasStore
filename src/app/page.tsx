import { title } from "process";
import styles from "src/styles/homepage.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Link href="/" className={styles.linkContainer}>
        <div className={styles.logo}>
          <Image
            src="/Palmeiras_logo.svg.png"
            alt="Palmeiras Logo"
            width={125}
            height={80}
          />
        </div>
        <h1>Palmeiras Store</h1>
        <title>Palmeiras Store</title>
      </Link>
    </main>
  );
}