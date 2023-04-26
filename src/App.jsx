import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Service from "./Component/Service";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer></Footer>
    </>
  );
};

export default App;
