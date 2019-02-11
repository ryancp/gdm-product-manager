import api from '../init/api';
import { handleResponse } from '../utils/index';

async function getList() {
  const requestConfig = {
    method: 'GET',
  };

  const response = await api.get('Categories', requestConfig);
  return handleResponse(response, 'get');
}

export default {
  getList,
};
