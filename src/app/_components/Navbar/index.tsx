import { title } from "process";
import styles from "src/styles/homepage.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <header>
            <nav className={styles.navbar}>
                <ul className={styles.navItens}>
                    <Link href="/" className={styles.navLink}>
                        <li>Início</li>
                    </Link>
                    <Link href="/" className={styles.navLink}>
                        <li>Produtos</li>
                    </Link>
                    <Link href="/" className={styles.navLink}>
                        <li>Sobre</li>
                    </Link>
                    <Link href="/" className={styles.navLink}>
                        <li>Contato</li>
                    </Link>
                </ul>



            </nav>
        </header>
    );
}