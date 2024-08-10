import Friend from "../Friend/Friend";
import friends from "../../friends.json";
import css from "./FriendList.module.css";

export default function FriendList({ user }) {
  return (
    <ul className={css.list}>
      {friends.map((item) => {
        return (
          <li className={css.tem} key={item.id}>
            <Friend user={item} />
          </li>
        );
      })}
    </ul>
  );
}
