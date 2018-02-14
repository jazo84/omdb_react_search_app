import React from "react";
import { Switch, Route } from "react-router-dom";

//import Home from "./components/Home";
import Omdb from "./api/omdb_api";

export default (
  	<Switch>
    	<Route exact path="/" component={Omdb} />
    </Switch>
);
