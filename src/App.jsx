import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import Sidebar from "./components/Sidebar";
import { Container, SidebarWindow } from "./AppStyle";
import SidebarMenu from "./components/SidebarMenu";
import Home from "./pages/Home";
import Details from "./components/Details";
import Genres from "./pages/Genres";
import GenreDetails from "./components/GenreDetails";

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
            <Route path="/" exact render={() => <Redirect to="games-home" />} />
            <Route
              path="/games-home"
              render={() => <Home selectedPage="games-home" />}
            />
            <Route
              path="/popular-games"
              render={() => <Home selectedPage="popular-games" />}
            />
            <Route
              path="/new-games"
              render={() => <Home selectedPage="new-games" />}
            />
            <Route
              path="/upcoming-games"
              render={() => <Home selectedPage="upcoming-games" />}
            />
            <Route
              path="/search/:pattern"
              render={(props) => (
                <Home selectedPage={props.match.params.pattern} />
              )}
            />
            <Route path="/genres" component={Genres} />
            <Route path="/genre/:id" component={GenreDetails} />
            <SimpleReactLightbox>
              <Route path="/games/:id" component={Details} />
            </SimpleReactLightbox>
          </Switch>
        </SidebarWindow>
      </Container>
    </Router>
  );
};

export default App;
