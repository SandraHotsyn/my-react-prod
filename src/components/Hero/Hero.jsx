import roseBg from "../../assets/Hero/roseBg.png";
import avatar from "../../assets/Hero/avatar.png";
import css from "./Hero.module.css";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

export default function Hero() {
  return (
    <section className={css.flex}>
      <div className={css.textContainer}>
        <p className={css.preText}>ЦК комп'ютерних дисциплін</p>
        <h1 className={css.text}>Персональний сайт викладача спецдисциплін </h1>
        <h2 className={css.textCollege}>ОЛЕКСАНДРІЙСЬКОГО ПОЛІТЕХНІЧНОГО</h2>
        <div className={css.textCollegeContainer}>
          <h2 className={css.textCollege}> ФАХОВОГО КОЛЕДЖУ</h2>
          <ul className={css.listIcon}>
            <li>
              <a href="">
                <SiFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <SiInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <TbWorldWww />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.imgContainer}>
        <img
          src={roseBg}
          alt="rose BG"
          width={600}
          className={css.roseBG}
        ></img>
        <img src={avatar} alt="avatar" width={400} className={css.ava} />
      </div>
    </section>
  );
}
