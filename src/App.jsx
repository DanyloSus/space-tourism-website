// import libraries
import { Component } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// import pages
import Home from "./Pages/Home";
import Header from "./Elements/Header";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";

class App extends Component {
  render() {
    return (
      // return an old variant of react-router
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:id?" element={<Destination />} />
          <Route path="/crew/" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
