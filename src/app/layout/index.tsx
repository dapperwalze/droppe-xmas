import { Switch, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import DroppeXmasAside from "./aside";
import DroppeXmasContent from "./content";
import MarketPlace from "./../../pages/MarketPlace/index";
import WishLists from "./../../pages/WishLists/index";
import DepositFunds from "./../../pages/DepositFunds/index";
import UserSettings from "./../../pages/Settings/index";
import styles from "./droppexmaslayout.module.scss";

export const DroppeXmasLayout = () => {
  return (
    <div className={styles.droppeXmasLayout}>
      <DroppeXmasAside />
      <DroppeXmasContent>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/market-place">
            <MarketPlace />
          </Route>
          <Route exact path="/wish-lists">
            <WishLists />
          </Route>
          <Route exact path="/deposit-funds">
            <DepositFunds />
          </Route>
          <Route exact path="/user-settings">
            <UserSettings />
          </Route>
          <Route exact path="/sign-out"></Route>
        </Switch>
      </DroppeXmasContent>
    </div>
  );
};
