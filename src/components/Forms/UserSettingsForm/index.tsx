import React from "react";
import styles from "./usersettingsform.module.scss";

interface Props {
  limitPerWishlist: string;
  username: string;
  isSettingsSaved?: boolean;
  handleSubmit?: (arg: any) => void;
  handleChange?: (arg: any) => void;
}

export default function UserSettingsForm(props: Props) {
  const {
    limitPerWishlist,
    username,
    isSettingsSaved,
    handleSubmit,
    handleChange,
  } = props;

  return (
    <div className={styles.formContainer}>
      {isSettingsSaved && <p>Settings updated successfully</p>}

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input
          className={styles.formInput}
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="limitPerWishlist" className={styles.label}>
          Limit per wishlist
        </label>
        <input
          className={styles.formInput}
          type="number"
          name="limitPerWishlist"
          value={limitPerWishlist}
          onChange={handleChange}
        />
        <button className={styles.saveBtn} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
