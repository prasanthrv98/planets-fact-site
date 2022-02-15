import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import PlanetContent from "./components/Layout/PlanetContent";
import Navbar from "./components/navbar/Navbar";
import SideNavigation from "./components/UI/SideNavigation";

const App = () => {
  const [toggleSideNav, setToggleSideNav] = useState(false);
  const clickHandler = () => {
    setToggleSideNav(!toggleSideNav);
  };

  return (
    <div className="app">
      <Navbar hamBtnClicked={clickHandler} />
      {toggleSideNav && <SideNavigation />}

      <Switch>
        <Route path="/" exact>
          <Redirect to="/mercury/overview" />
        </Route>
        <Route path="/:planetName/:planetSpec">
          <PlanetContent />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
