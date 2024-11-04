import axiosInstance from './axiosInstance'; // Import the Axios instance

const AuthService = {
  login: async (userDetails) => {
    try {
      const response = await axiosInstance.post('/auth/login', userDetails);
      
      // Store the token in localStorage
      localStorage.setItem('authToken', response.data.token);

      // Return the user data
      return response.data.user;
    } catch (error) {
      console.error("Error during login:", error);
      throw error.response?.data || new Error('Login failed'); // Handle API errors
    }
  },

  logout: () => {
    // Clear the token from localStorage
    localStorage.removeItem('authToken');
  },

  getCurrentUser: async () => {
    try {
      const response = await axiosInstance.get('/auth/me');
      return response.data; // Return the user data
    } catch (error) {
      console.error("Error fetching current user:", error);
      throw error.response?.data || new Error('Failed to fetch user data'); // Handle API errors
    }
  },
};

export default AuthService; 
