import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from "./components/Layout.js";
const app = document.getElementById('app');
// render layout into app
ReactDOM.render(
  <Layout/>,
  app);
