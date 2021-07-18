import React from 'react';
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
];

export default onBoardingRoutes;
