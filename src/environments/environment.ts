const protocol = 'http';
const host = 'localhost'
const port = '3000';
const rootApi = 'api';

export const environment = {
  production: false,
  baseUrl: `${protocol}://${host}:${port}/${rootApi}/`
};
