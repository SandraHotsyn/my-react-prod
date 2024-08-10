import css from "./Friend.module.css";
import clsx from "clsx";

export default function Friend({ user: { avatar, name, isOnline } }) {
  const cls = clsx(css.status, isOnline ? css.isOnline : css.isOffline);

  return (
    <div className={css.container}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.title}>{name}</p>
      <p className={cls}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
