import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import DroppeXmasAside from "./aside";
import DroppeXmasContent from "./content";
import MarketPlace from "./../../pages/MarketPlace/index";
import WishLists from "./../../pages/WishLists/index";
import Wallet from "../../pages/Wallet/index";
import UserSettings from "./../../pages/Settings/index";
import styles from "./droppexmaslayout.module.scss";

export const DroppeXmasLayout = () => {
  return (
    <div className={styles.droppeXmasLayout}>
      <DroppeXmasAside />
      <DroppeXmasContent>
        <Switch>
          <Redirect exact from="/" to="/dashboard"></Redirect>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/market-place">
            <MarketPlace />
          </Route>
          <Route exact path="/wish-lists">
            <WishLists />
          </Route>
          <Route exact path="/wallet">
            <Wallet />
          </Route>
          <Route exact path="/user-settings">
            <UserSettings />
          </Route>
        </Switch>
      </DroppeXmasContent>
    </div>
  );
};
export default DroppeXmasLayout;
