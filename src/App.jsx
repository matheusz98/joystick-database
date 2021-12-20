import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <h1>Hello World!</h1>
    </Router>
  );
};

export default App;
