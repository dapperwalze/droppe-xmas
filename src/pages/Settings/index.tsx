import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import UserSettingsForm from "../../components/Forms/UserSettingsForm";
import { saveSettings } from "../../redux/actions/wishlistActions";
import styles from "./usersettings.module.scss";

interface Event {
  target: Record<string, any>;
  preventDefault: () => void;
}

const UserSettings = () => {
  const [formState, setFormState] = useState({
    limitPerWishlist: "",
    username: "",
    isSettingsSaved: false,
  });

  const { limitPerWishlist, username, isSettingsSaved } = formState;

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (evt: Event) => {
      evt.preventDefault();
      setFormState({
        ...formState,

        limitPerWishlist: "",
        isSettingsSaved: true,
      });
      dispatch(saveSettings(+limitPerWishlist, username, isSettingsSaved));
    },
    [formState, dispatch, limitPerWishlist, username, isSettingsSaved]
  );

  const handleChange = useCallback(
    (evt: Event) => {
      const name = evt.target.name;
      const value = evt.target.value;
      setFormState({ ...formState, [name]: value });
    },
    [formState]
  );
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>User Settings</h2>
      </header>

      <UserSettingsForm
        limitPerWishlist={limitPerWishlist}
        username={username}
        isSettingsSaved={isSettingsSaved}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default UserSettings;
