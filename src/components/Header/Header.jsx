import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.container}>
      <a href="/" className={css.logoLink}>
        <img src="./src/assets/logo.png" alt="Logo" className={css.logoImage} />
        <span className={css.logoText}>Oleksandra HOTSYN</span>
      </a>
      <nav>
        <ul className={css.headerItem}>
          <li>
            <a href="#" className={css.headerBtn}>
              Про мене
            </a>
          </li>
          <li>
            <a href="#" className={css.headerBtn}>
              Навчальні матеріали
            </a>
          </li>
          <li>
            <a href="#" className={css.headerBtn}>
              Моя група
            </a>
          </li>
          <li>
            <a href="#" className={css.headerBtn}>
              Контакти
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
