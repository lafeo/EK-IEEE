import Layout from "./Layout/Layout";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/volunteer-info">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
