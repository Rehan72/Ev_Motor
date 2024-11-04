import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import Signup from './auth/SignUp';
import Charger from './components/charger/Charger';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import {useAuth} from './hooks/UseAuth'; // Custom hook to check auth status
import Dashboard from './screen/dashboard/Dashboard';

function App() {
  const {isAuthenticated} = useAuth();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/',
      element: isAuthenticated ? <Layout /> : <Login />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'charger',
          element: <Charger />,
        },
        {
          path: '*',
          element: <ErrorBoundary />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
