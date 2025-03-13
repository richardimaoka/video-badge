import { Badge } from "../components/Badge";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <Badge number={12} />
    </div>
  );
}
