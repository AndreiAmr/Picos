import React from 'react';
import Login from './Login';

type RoutesProps = {
  path: string;
  component: () => React.ReactElement;
  exact: boolean;
};

const onBoardingRoutes: RoutesProps[] = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
];

export default onBoardingRoutes;
