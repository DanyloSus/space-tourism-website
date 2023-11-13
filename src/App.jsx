import { Component } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./Elements/Header";
import Destination from "./Pages/Destination";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:id" element={<Destination />} />
          <Route path="/crew/:id" element={<Home />} />
          <Route path="/technology/:id" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
