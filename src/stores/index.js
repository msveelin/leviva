import { defineStore } from 'pinia';
import axios from 'axios'
import {ca} from "vuetify/locale";
import {StorageService} from "@/services/storageService.js";
import {notifyError, notifySuccess} from "@/services/notificationService.js";

export const useApiStore = defineStore('api', {
  state: () => ({
    data: {}, // Store data for different resources
    user: null,
    error: null,
  }),

  actions: {
    async fetchItem(resource, idParameterName, id){
      if(idParameterName){
        try {
          const response = await axios.get(`http://localhost/leviva-backend/api/${resource}_api.php?${idParameterName}=${id}`);
          this.data[resource] = response?.data; // Set the fetched data into the store
          return this.data[resource]
        } catch (error) {
          this.error = error.message;
        }
      }
      else{
        try {
          const response = await axios.get(`http://localhost/leviva-backend/api/${resource}_api.php`);
          this.data[resource] = response?.data; // Set the fetched data into the store
          return this.data[resource]
        } catch (error) {
          this.error = error.message;
        }
      }
    },
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

    async deleteResource(resource, idParameterName, id) {
      try {
        const response = await axios.delete(`http://localhost/leviva-backend/api/${resource}_api.php?${idParameterName}=${id}`);
        // Optionally update state or trigger a fetch for updated data
        this.fetchData(resource); // Example: Trigger a fetch for updated data
      } catch (error) {
        this.error = error.message;
      }
    },


    // Authentication
      async login(credentials) {
          try {
              const response = await axios.post(`http://localhost/leviva-backend/api/authentication_api.php`, credentials);
              let storageService = new StorageService();

              // If login is successful
              if (response.status === 200) {
                  storageService.setItem('access_token', response.data.access_token);
                  storageService.setItem('refresh_token', response.data.refresh_token);
                  storageService.setItem('expires_in', response.data.access_token_expires_in);

                  let expireTime = new Date()
                  expireTime.setSeconds(expireTime.getSeconds() + response.data.access_token_expires_in)
                  storageService.setItem('expireTime', expireTime.getTime())

                  this.data["user"] = response?.data.data;
                  await notifySuccess("Successfully Logged In")
                  window.location.href = "/admin-portal/dashboard";
              } else {
                  // If login is unsuccessful, display error message
                  await notifyError(response.data.message || "An error occurred during login");
              }
              return response;
          } catch (error) {
              // If an error occurs during the HTTP request (e.g., network error), return the error response
              console.error(error);
              if (error.response) {
                  // If the error has a response, return it
                  await notifyError(error.response?.data.message);
                  return error.response;
              } else {
                  // Otherwise, return a generic error message
                  await notifyError("An error occurred during login");
                  return null;
              }
          }
      },

      async logout() {
      let data = {
        logout: true
      }
      try {
        const response = await axios.post(`http://localhost/leviva-backend/api/logout_api.php`)
            .then( async (response) => {
              let storageService = new StorageService()
              // console.log(response.data.access_token)
              storageService.removeItem('access_token');
              storageService.removeItem('refresh_token');
              storageService.removeItem('expires_in');

              storageService.removeItem('expireTime')

              await notifySuccess("Logged Out Successfully")
              window.location.href = "/admin-portal-login"
              return response
            });
      } catch (e){
        console.error(e);
      }
    },

    async register(userData) {
      // Make HTTP request to register a new user
      // Handle response and update state accordingly
    },
  },
});
