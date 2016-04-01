import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

const app = document.getElementById('app');
import Layout from "./components/Layout.js";
// render layout into app
ReactDOM.render(
  <Layout />,
  app);
