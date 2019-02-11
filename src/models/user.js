const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
};

const handleResponse = (response) => {
  if (response.username !== 'art' || response.password !== 'bosco') {
    const error = 'You have entered an invalid username or password. Please try again.';
    return Promise.reject(error);
  }

  response.authenticated = true;
  delete response.password;

  return response;
};

async function login(username, password) {
  const userLoginMock = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username,
        password,
        firstName: 'Art',
        lastName: 'Vandelay',
        email: 'art@vandelay.industries',
        id: '6d026b00-c9fd-4c80-8971-f797c6d82815',
        jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI2MCIsInVuaXF1ZV9uYW1lIjoiaW50ZXJ2aWV3YXBpQGdhcnRuZXIuY29tIiwiZW1haWwiOiJpbnRlcnZpZXdhcGlAZ2FydG5lci5jb20iLCJuYmYiOjE1NDY0NDIxNzksImV4cCI6MTYwNjQ0MjExOSwiaWF0IjoxNTQ2NDQyMTc5fQ.99nK9rDxYYl0B0yMz-62NSNGiJpS7cTTh6Ix4xF9iy8',
      });
    }, 700);
  });

  const response = await userLoginMock;
  const user = await handleResponse(response);
  if (user.jwt) {
    // store user details and jwt token in local storage to keep user logged in
    // between page refreshes
    localStorage.setItem('user', JSON.stringify(user));
  }
  return user;
}

export default {
  login,
  logout,
};
