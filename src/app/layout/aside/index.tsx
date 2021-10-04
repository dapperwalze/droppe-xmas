import { Link, NavLink } from "react-router-dom";
import styles from "./aside.module.scss";

const DroppeXmasAside = () => {
  const navlinks = [
    {
      id: 1,
      name: (
        <span className={styles.listItem}>
          <i className="ri-dashboard-line" />{" "}
          <span className={styles.listItemLabel}>Dashboard</span>
        </span>
      ),
      location: "./dashboard",
    },
    {
      id: 2,
      name: (
        <span className={styles.listItem}>
          <i className="ri-store-line" />{" "}
          <span className={styles.listItemLabel}>Market Place</span>
        </span>
      ),
      location: "./market-place",
    },
    {
      id: 3,
      name: (
        <span className={styles.listItem}>
          <i className="ri-file-list-line" />{" "}
          <span className={styles.listItemLabel}>Wish Lists</span>
        </span>
      ),
      location: "./wish-lists",
    },
    {
      id: 4,
      name: (
        <span className={styles.listItem}>
          <i className="ri-wallet-line" />
          <span className={styles.listItemLabel}>Wallet</span>
        </span>
      ),
      location: "./wallet",
    },
    {
      id: 5,
      name: (
        <span className={styles.listItem}>
          <i className="ri-user-settings-line" />
          <span className={styles.listItemLabel}>Settings</span>
        </span>
      ),
      location: "./user-settings",
    },
    {
      id: 6,
      name: (
        <span className={styles.listItem}>
          <i className="ri-logout-box-r-line" />
          <span className={styles.listItemLabel}>Sign Out</span>
        </span>
      ),
      location: "./sign-out",
    },
  ];
  return (
    <aside className={styles.aside}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>
          <Link className={styles.logoLink} to="./dashboard">
            Droppe <span className={styles.xmasColor}>Xmas</span>
          </Link>
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
