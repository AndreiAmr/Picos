import React from 'react';
import Login from './Login';
import WelcomePage from './Welcome';

type RoutesProps = {
  path: string;
  component: () => React.ReactElement;
  exact: boolean;
};

const onBoardingRoutes: RoutesProps[] = [
  {
    path: '/',
    component: WelcomePage,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
];

export default onBoardingRoutes;
