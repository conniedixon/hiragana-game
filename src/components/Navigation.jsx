/** @format */

import React from "react";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/infinite'>
        <p>Infinate Mode</p>
      </Link>
      <Link to='/untimed-test'>
        <p>Timed Test</p>
      </Link>
    </>
  );
};

export default Navigation;
