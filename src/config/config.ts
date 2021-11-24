import getClientEnvironment from './env';

getClientEnvironment();

const config = {
  port: process.env.WOBO_MOCK_PORT || process.env.PORT || `80`,
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
  cookies: {
    auth: process.env.SENTINEL_CANVAS_AUTH_COOKIE,
    authIndicator: process.env.LOGGED_IN_USER_COOKIE,
  }
};

export default config;
