import axios from 'axios';
import config from '../store/config';
import { authHeader } from '../utils/index';

/**
 * Create a new Axios client instance
 * @see https://laravel-news.com/building-flexible-axios-clients
 */
const getClient = (baseUrl = null) => {
  const options = {
    baseURL: baseUrl || config.state.apiUri,
    headers: authHeader(),
  };

  const client = axios.create(options);

  return client;
};

/**
 * Base HTTP Client
 */
export default {
  // Provide request methods with the default baseUrl
  async get(url, conf = {}) {
    try {
      const response = await getClient().get(url, conf);
      return await Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async create(url, data = {}, conf = {}) {
    try {
      const response = await getClient().post(url, data, conf);
      return await Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async update(url, data = {}, conf = {}) {
    try {
      const response = await getClient().put(url, data, conf);
      return await Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
