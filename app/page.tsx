import { Badge } from "./components/Badge";
import { BellIcon } from "./components/BellIcon";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div className={styles.roundBox}>
        <BellIcon />
        <Badge number={2} />
      </div>
    </div>
  );
}
