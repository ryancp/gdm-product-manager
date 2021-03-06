import merge from 'webpack-merge';
import prodEnv from './prod.env';

const PROTOCOL_HTTP = 'https://';
const DOMAIN = 'azurewebsites';
const TLD = 'net';
const API_SUBDOMAIN = 'gdm-interview-api';

export default merge(prodEnv, {
  API_URI: `"${PROTOCOL_HTTP}${API_SUBDOMAIN}.${DOMAIN}.${TLD}/api/v1/"`,
});
