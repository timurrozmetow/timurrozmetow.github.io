import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from '@auth0/auth0-react';

import App from "./App";

ReactDOM.render( 
    <Auth0Provider
    domain="dev-rwujxnreukqobk6w.us.auth0.com"
    clientId="H0SfGGzuebIsvt9JY4JOAapcrXTXfub4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    
    , document.getElementById('root'));
