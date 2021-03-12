import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./App";
import AddBug from "./AddBug";

import Header from "./Header";

const Router = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/addbug" component={AddBug} />
      </BrowserRouter>
    </>
  );
};

export default Router;
