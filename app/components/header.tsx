import About from "../about/page";
import styles from "../css/page.module.css";
import Link from "next/link";


function Header() {
  return (
    <nav className={styles.floatLeft}>
      <ul>
        <Link href="./">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/content">
          <li>Content</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;