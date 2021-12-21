import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import Sidebar from "./components/Sidebar";
import { Container, SidebarWindow } from "./AppStyle";
import SidebarMenu from "./components/SidebarMenu";

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Router>
      <Container>
        <GlobalStyles />
        <Sidebar sidebar={sidebar} />
        <SidebarMenu sidebar={sidebar} setSidebar={setSidebar} />
        <SidebarWindow className={sidebar ? null : "active"}>
          <Navbar />
        </SidebarWindow>
      </Container>
    </Router>
  );
};

export default App;
