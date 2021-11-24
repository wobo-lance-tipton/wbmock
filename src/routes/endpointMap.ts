import { proxyEndpoint } from './proxy';
import { tokenEndpoint } from './token';
import { validateEndpoint } from './validate';
import { authorizeEndpoint } from './authorize';
import { setCookies } from '../middleware/setCookies';
import { setLocalUser } from '../middleware/setLocalUser';

export const endpointMap = {
  ['/wb/oauth/authorize']: [authorizeEndpoint],
  ['/wb/oauth/token']: [setLocalUser, tokenEndpoint],
  ['/wb/oauth/validate']: [setLocalUser, validateEndpoint],
  ['/wb/apis/iproxy']: [setLocalUser, setCookies, proxyEndpoint],
};
