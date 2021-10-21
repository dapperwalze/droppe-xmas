import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSettingsForm from "../../components/Forms/UserSettingsForm";
import { saveSettings } from "../../redux/actions/wishlistActions";
import { wishlistSelector } from "../../redux/reducers/wishlistReducer";
import styles from "./usersettings.module.scss";

interface Event {
  target: Record<string, any>;
  preventDefault: () => void;
}

const UserSettings = () => {
  const { userSettings } = useSelector(wishlistSelector);
  const { username: name, limitPerWishlist: spendLimit } = userSettings;
  const [state, setState] = useState({
    username: name,
    limitPerWishlist: spendLimit,
    isSettingsSaved: false,
  });
  const { username, limitPerWishlist, isSettingsSaved } = state;

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (evt: Event) => {
      evt.preventDefault();
      setState(Object.assign({}, state, { isSettingsSaved: true }));
      dispatch(saveSettings(+limitPerWishlist, username, isSettingsSaved));
    },
    [state, dispatch, limitPerWishlist, username, isSettingsSaved]
  );

  const handleChange = useCallback(
    (evt: Event) => {
      const name = evt.target.name;
      const value = evt.target.value;
      setState(Object.assign({}, state, { [name]: value }));
    },
    [state]
  );
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>User Settings</h2>
      </header>

      {isSettingsSaved && (
        <p className={styles.success}>Settings updated successfully.</p>
      )}

      <UserSettingsForm
        limitPerWishlist={limitPerWishlist}
        username={username}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default UserSettings;
