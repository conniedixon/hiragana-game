/** @format */

import React from "react";
import Hiragana from "./components/Hiragana";
import { Router } from "@reach/router";
import Welcome from "./components/Welcome";
import Navigation from "./components/Navigation";
import TimedTest from "./components/TimedTest";

const App = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <Welcome path='/' key='Home' />
        <Hiragana path='/infinite' key='Hiragana' />
        <TimedTest path='/untimed-test' key='Untimed Test' />
      </Router>
    </div>
  );
};

export default App;
