import ProfileList from "../ProfileList/ProfileList";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import style from "./App.module.css";
import userData from "../../userData.json";
import friends from "../../friends.json";
import transaction from "../../transactions.json";

export default function App() {
  return (
    <div>
      <div className={style.flex}>
        <ProfileList proffs={userData} />
        <FriendList user={friends} />
      </div>
      <TransactionHistory items={transaction} />
    </div>
  );
}
