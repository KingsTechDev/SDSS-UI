const _isDev = window.location.port.indexOf('4400') > -1;
const getHost = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
};

const apiURI = _isDev ? 'http://localhost:7200' : '';

export const ENV = {
  BASE_URI: getHost(),
  BASE_API: apiURI
};
