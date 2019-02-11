import api from '../init/api';
import { handleResponse } from '../utils/index';

async function getList() {
  const requestConfig = {
    method: 'GET',
  };

  const response = await api.get('Products', requestConfig);
  return handleResponse(response, 'get');
}

async function getItem(id) {
  const requestConfig = {
    method: 'GET',
  };

  const response = await api.get(`Products/${id}`, requestConfig);
  return handleResponse(response, 'get');
}

async function createItem(item) {
  const requestConfig = {
    method: 'POST',
  };

  const response = await api.create('Products', item, requestConfig);
  return handleResponse(response, 'create', 'product', item.Name);
}

async function updateItem(item) {
  const requestConfig = {
    method: 'PUT',
  };

  const response = await api.update(`Products/${item.ProductId}`, item, requestConfig);
  return handleResponse(response, 'update', 'product', item.Name);
}

export default {
  getList,
  getItem,
  createItem,
  updateItem,
};
