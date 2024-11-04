import {useEffect, useState} from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null); // Store user info
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Track authentication status
  const [loading, setLoading] = useState(false); // Track loading state

  useEffect(() => {
    // Check if the user is already authenticated when the app loads
    const checkAuthStatus = async () => {
      setIsAuthenticated(true);

      // try {
      //   const loggedInUser = await AuthService.getCurrentUser();
      //   if (loggedInUser) {
      //     setUser(loggedInUser);
      //     setIsAuthenticated(true);
      //   } else {
      //     setIsAuthenticated(false);
      //   }
      // } catch (error) {
      //   console.error("Failed to fetch user:", error);
      //   setIsAuthenticated(false);
      // } finally {
      //   setLoading(false);
      // }
    };

    //checkAuthStatus();
  }, []);

  const login = async (...userDetails) => {
    setLoading(true);
    setIsAuthenticated(true);
    console.log(userDetails);

    // setLoading(false);
    // try {
    //   const loggedInUser = await AuthService.login(userDetails);
    //   setUser(loggedInUser);
    //   setIsAuthenticated(true);
    // } catch (error) {
    //   console.error("Login failed:", error);
    //   setIsAuthenticated(false);
    // } finally {
    //   setLoading(false);
    // }
  };

  const logout = async () => {
    // setLoading(true);
    setIsAuthenticated(false);
    // try {
    //   await AuthService.logout();
    //   setUser(null);
    //   setIsAuthenticated(false);
    // } catch (error) {
    //   console.error("Logout failed:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
    loading,
  };
};
