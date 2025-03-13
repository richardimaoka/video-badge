import styles from "./BellIcon.module.css";

type Props = {};

export function BellIcon(props: Props) {
  return (
    <span className={"material-symbols-outlined " + styles.icon}>
      notifications
    </span>
  );
}
