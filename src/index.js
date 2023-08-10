import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//paginas con ruta
import Login from './components/Login';
import Home from './components/Home';
import Bandas from './components/Bandas';
import Escoltas from './components/Escoltas';
import Formularios from './components/Formularios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
         path="/index" 
         render={(props) => <Login {...props} />} />
        <Route
          path="/home"
          render={(props) => <Home {...props} />}
        />
        <Route
          path="/bandas"
          render={(props) => <Bandas {...props} />}
        />
        <Route
          path="/escoltas"
          render={(props) => <Escoltas {...props} />}
        />
        <Route
          path="/formularios"
          render={(props) => <Formularios {...props} />}
        />
        
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
