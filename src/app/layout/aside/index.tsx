import { NavLink } from "react-router-dom";
import styles from "./aside.module.scss";

const DroppeXmasAside = () => {
  const navlinks = [
    {
      id: 1,
      name: (
        <span className={styles.listItem}>
          <i className="ri-dashboard-line" /> Dashboard
        </span>
      ),
      location: "./dashboard",
    },
    {
      id: 2,
      name: (
        <span className={styles.listItem}>
          <i className="ri-store-line" /> Market Place
        </span>
      ),
      location: "./market-place",
    },
    {
      id: 3,
      name: (
        <span className={styles.listItem}>
          <i className="ri-file-list-line" /> Wish Lists
        </span>
      ),
      location: "./wish-lists",
    },
    {
      id: 4,
      name: (
        <span className={styles.listItem}>
          <i className="ri-wallet-line" /> Wallet
        </span>
      ),
      location: "./wallet",
    },
    {
      id: 5,
      name: (
        <span className={styles.listItem}>
          <i className="ri-user-settings-line" /> Settings
        </span>
      ),
      location: "./user-settings",
    },
    {
      id: 6,
      name: (
        <span className={styles.listItem}>
          <i className="ri-logout-box-r-line" /> Sign Out
        </span>
      ),
      location: "./sign-out",
    },
  ];
  return (
    <aside className={styles.aside}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>
          Droppe <span className={styles.xmasColor}>Xmas</span>
        </h1>
      </div>
      <div className={styles.sideNavBar}>
        {navlinks.map((navlink) => (
          <NavLink
            activeStyle={{
              color: "#fff",
              background: "#000",
              borderRadius: "10px",
            }}
            className={styles.navLink}
            key={navlink.id}
            to={navlink.location}
          >
            {navlink.name}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};
// #fcbdb6

export default DroppeXmasAside;
