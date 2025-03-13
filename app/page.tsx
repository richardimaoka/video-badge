import { BellIcon } from "./components/BellIcon";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div className={styles.roundBox}>
        <BellIcon />
      </div>
    </div>
  );
}
