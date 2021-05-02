import Layout from "./Layout/Layout";
import { Switch, Route } from "react-router-dom";
import Dementia from "./components/Dementia";
import Suicide from "./components/Suicide";
import PsyFirstAid from "./components/PsyFirstAid";
import Communication from "./components/Communication";
import Winter from "./components/Winter";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/volunteer-info">
          <Layout />
        </Route>
        <Route exact path="/volunteer-info/1">
          <Dementia />
        </Route>
        <Route exact path="/volunteer-info/2">
          <Suicide />
        </Route>
        <Route exact path="/volunteer-info/3">
          <PsyFirstAid />
        </Route>
        <Route exact path="/volunteer-info/4">
          <Communication />
        </Route>
        <Route exact path="/volunteer-info/5">
          <Winter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
