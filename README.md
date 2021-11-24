# Wobo Server Mock
* Mocks the Wobo Server API auth endpoints

## Before you start

### Create the local development environment file
1. Clone the repo, then run `npm install` from the root folder
2. Create `.env.development.local` in the root folder
3. Template:

  ```
    CANVAS_API_SHARED_SECRET=dev_secret
    WOBO_MOCK_PORT=80
    WOBO_COOKIE_MAX_AGE=
    WOBO_COOKIE_SECURE=
    WOBO_COOKIE_DOMAIN=
    WOBO_COOKIE_PATH=
    WOBO_CORS_ALLOW_ORIGIN=
    LOGGED_IN_USER_COOKIE="<Name of Cookie>"
    SENTINEL_CANVAS_AUTH_COOKIE="<Name of Cookie>"
  ```
> **IMPORTANT**
> `<Name of Cookie>` should be replaced with value from `sentinel-service/src/constants/index.ts`
>   * The value for `LOGGED_IN_USER_COOKIE` should be the same as `authIndicator` => [See here](https://github.com/Workboard/okr-canvas/blob/836b7da139910b4f8689ad1428f1a22e3c46ada3/sentinel-service/src/constants/index.ts#L3)
>   * The value for `SENTINEL_CANVAS_AUTH_COOKIE` should be the same as `auth` => [See here](https://github.com/Workboard/okr-canvas/blob/836b7da139910b4f8689ad1428f1a22e3c46ada3/sentinel-service/src/constants/index.ts#L2)


## Scripts
* `npm start` for normal start
* `npm run start:watch` for starting with `nodemon` watch


## Notes
* The server binds to port `80` by default to match the current wobo server
* So ensure no other process is running on the port