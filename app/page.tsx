import { Badge } from "./components/Badge";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div className={styles.inner}>
        <span className={"material-symbols-outlined " + styles.icon}>
          notifications
        </span>
        <Badge number={2} />
      </div>
    </div>
  );
}
