import axios from "axios";

const LOCATION_API_BASE_URL = "http://localhost:8000/experiences";

class LocationService {
  getLocations() {
    return axios.get(LOCATION_API_BASE_URL);
  }

  createLocation(location) {
    return axios.post(LOCATION_API_BASE_URL, location);
  }

  getLocationById(locationId) {
    // Check if locationId is null or undefined
    if (locationId === null || locationId === undefined) {
      // Return a rejected promise with an error message
      return Promise.reject(new Error("Invalid locationId"));
    }
    return axios.get(LOCATION_API_BASE_URL + "/" + locationId);
  }

  updateLocation(location, locationId) {
    // Check if locationId is null or undefined
    if (locationId === null || locationId === undefined) {
      // Return a rejected promise with an error message
      return Promise.reject(new Error("Invalid locationId"));
    }
    return axios.put(LOCATION_API_BASE_URL + "/" + locationId, location);
  }

  deleteLocation(locationId) {
    return axios.delete(LOCATION_API_BASE_URL + "/" + locationId);
  }
}

export default new LocationService();