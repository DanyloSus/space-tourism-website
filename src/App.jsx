import { Component } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./Elements/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
