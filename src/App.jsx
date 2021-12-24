import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import Sidebar from "./components/Sidebar";
import { Container, SidebarWindow } from "./AppStyle";
import SidebarMenu from "./components/SidebarMenu";
import Home from "./pages/Home";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <Router>
      <Container>
        <GlobalStyles />
        <Sidebar sidebar={sidebar} />
        <SidebarMenu sidebar={sidebar} setSidebar={setSidebar} />
        <SidebarWindow>
          <Navbar />
          <Switch>
            <Route path="/" render={() => <Redirect to="games-home" />} exact />
            <Route
              path="/games-home"
              render={() => <Home selectedItem="games-home" />}
            />
          </Switch>
        </SidebarWindow>
      </Container>
    </Router>
  );
};

export default App;
