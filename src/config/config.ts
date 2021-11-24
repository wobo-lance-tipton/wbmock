import getClientEnvironment from './env';
const mockoonConfigEndpoint = `http://localhost:4146/mockoon/config`;

getClientEnvironment();

const config = {
  port: process.env.WOBO_PORT || process.env.PORT || `4146`,
  canvas: {
    sharedSecret: process.env.CANVAS_API_SHARED_SECRET,
  },
  wobo: {
    cors: {
      allowOrigin: process.env.WOBO_CORS_ALLOW_ORIGIN || '*',
    },
    cookieOptions: {
      maxAge: process.env.WOBO_COOKIE_MAX_AGE
        ? parseInt(process.env.WOBO_COOKIE_MAX_AGE)
        : 60 * 60 * 1000,
      secure: !!process.env.WOBO_COOKIE_SECURE || false,
      domain: process.env.WOBO_COOKIE_DOMAIN || '',
      path: process.env.WOBO_COOKIE_PATH || '/',
    },
  },
  mockoon: {
    data: process.env.MOCKOON_DATA_FILE || mockoonConfigEndpoint,
    port: process.env.MOCKOON_PORT || `4147`,
    name: process.env.MOCKOON_NAME || `Wobo Server`,
  },
};

export default config;
