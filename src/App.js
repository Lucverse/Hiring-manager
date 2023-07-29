import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import Home from "./component/Home";
import SignupForm from "./component/SignUp";
import Login from "./component/Login";
import Navbar from "./component/Navbar/Navbar";
import store from "./Redux/store";
import Pagenotfound from "./component/PageNotFound/PageNotFound";
import About from "./component/About";
import Contact from "./component/Contact/Contact";
import Account from "./component/Account/Account";
import CandidateSearch from "./component/Candidate/CandidateSearch";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="comp">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/account" element={<Account />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/search" element={<CandidateSearch />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<SignupForm />} />
                <Route exact path="/login" element={<Login />} />
                <Route path="/*" element={<Pagenotfound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
