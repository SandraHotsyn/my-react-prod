import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import css from "./ProfileList.module.css";

export default function ProfileList({ proffs }) {
  return (
    <ul className={css.list}>
      {userData.map((item) => {
        return (
          <li key={item.id}>
            <Profile proff={item} />
          </li>
        );
      })}
    </ul>
  );
}
