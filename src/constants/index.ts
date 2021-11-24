import config  from '../config/config'

export const cookies = {
  ...config.cookies
} as const;
