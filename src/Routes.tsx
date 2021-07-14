import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import onBoardingRoutes from './pages/OnBoarding/onBoarding.routes';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {onBoardingRoutes.map((route) => (
          <Route
            path={route.path}
            exact={true}
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
