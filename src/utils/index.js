const authHeader = () => {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.jwt) {
    return { Authorization: user.jwt };
  }

  return {};
};

const handleResponse = (response, operationType, itemType, itemName) => {
  const responseHandler = {
    successStatus: 200,
    error: 'An error has ocurred. Please try again later.',
  };

  /* eslint-disable default-case */
  switch (operationType) {
    case 'create':
      responseHandler.successStatus = 201;
      responseHandler.error = `An error occurred while creating ${itemType}: ${itemName}`;
      break;
    case 'update':
      responseHandler.successStatus = 204;
      responseHandler.error = `An error occurred while updating ${itemType}: ${itemName}`;
      break;
  }
  /* eslint-enable default-case */

  if (response.status !== responseHandler.successStatus) {
    return Promise.reject(responseHandler.error);
  }

  return response.data;
};

export {
  authHeader,
  handleResponse,
};
