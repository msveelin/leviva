import { defineStore } from 'pinia';
import axios from 'axios'

export const useApiStore = defineStore('api', {
  state: () => ({
    data: {}, // Store data for different resources
    user: null,
    error: null,
  }),

  actions: {
    async fetchData(resource) {
      try {
        const response = await axios.get(`http://localhost/leviva-backend/api/${resource}_api.php`);
        this.data[resource] = response?.data?.data; // Set the fetched data into the store
        return this.data[resource]
      } catch (error) {
        this.error = error.message;
      }
    },    


    async createResource(resource, data) {
      try {
        const { response } = await axios.post(`http://localhost/leviva-backend/api/${resource}_api.php`, data);
        // Optionally update state or trigger a fetch for updated data
        this.fetchData(resource); // Example: Trigger a fetch for updated data
        return response
      } catch (error) {
        this.error = error.message;
      }
    },

    async updateResource(resource, data) {
      try {
        const {response} = await axios.put(`http://localhost/leviva-backend/api/${resource}_api.php`, data);
        // Optionally update state or trigger a fetch for updated data
        this.fetchData(resource); // Example: Trigger a fetch for updated data
        return response
      } catch (error) {
        this.error = error.message;
      }
    },

    async deleteResource(resource) {
      try {
        const response = await axios.delete(`http://localhost/leviva-backend/api/${resource}_api.php`);
        // Optionally update state or trigger a fetch for updated data
        this.fetchData(resource); // Example: Trigger a fetch for updated data
      } catch (error) {
        this.error = error.message;
      }
    },

    // Authentication
    async login(credentials) {
      // Make HTTP request to authenticate user
      // Update this.user based on the response
    },

    async logout() {
      // Make HTTP request to logout user
      // Update this.user and clear any stored session data
    },

    async register(userData) {
      // Make HTTP request to register a new user
      // Handle response and update state accordingly
    },
  },
});
