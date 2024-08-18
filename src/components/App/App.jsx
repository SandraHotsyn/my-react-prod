import ProfileList from "../ProfileList/ProfileList";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import Headers from "../Header/Header";
import Hero from "../Hero/Hero";
import style from "./App.module.css";
import userData from "../../userData.json";
import friends from "../../friends.json";
import transaction from "../../transactions.json";

export default function App() {
  return (
    <>
      <header>
        <Headers />
      </header>
      <main className={style.container}>
        <Hero />
        <ProfileList proffs={userData} />
        <FriendList user={friends} />
        <TransactionHistory items={transaction} />
      </main>
    </>
  );
}
