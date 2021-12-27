import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import Sidebar from "./components/Sidebar";
import { Container, SidebarWindow } from "./AppStyle";
import SidebarMenu from "./components/SidebarMenu";
import Home from "./pages/Home";
import Details from "./components/Details";

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
            <Route path="/" component={Home} exact />
            <Route path="/games/:id" component={Details} />
          </Switch>
        </SidebarWindow>
      </Container>
    </Router>
  );
};

export default App;
