

import RouteConstant from './RouteConstant';


import Dashboard from '../screen/dashboard/Dashboard';
import { preText } from '../components/config/AppUrls';

export const routeParams = preText;
export default [
  {
    component: Dashboard,
    path: `${routeParams}Dashboard`,
    permission: RouteConstant?.DASHBOARD,
    exact: true
  },

]