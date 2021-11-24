// Adapted from https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/config/env.js
// for the same consistency with create-react-app
// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

import { realpathSync, existsSync } from 'fs';
import { resolve, delimiter, isAbsolute } from 'path';
import dotenvExpand from 'dotenv-expand';
import dotenv from 'dotenv';

const appDirectory = realpathSync(process.cwd());
const resolveApp = (relativePath: string): string =>
  resolve(appDirectory, relativePath);

const paths = {
  dotenv: resolveApp('.env'),
};

const NODE_ENV = process.env.NODE_ENV || 'development';

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotenvFiles = [
  `${paths.dotenv}.${NODE_ENV}.local`,
  // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  NODE_ENV !== 'test' && `${paths.dotenv}.local`,
  `${paths.dotenv}.${NODE_ENV}`,
  paths.dotenv,
].filter(Boolean);

// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.  Variable expansion is supported in .env files.
// https://github.com/motdotla/dotenv
// https://github.com/motdotla/dotenv-expand
dotenvFiles.forEach((dotenvFile) => {
  if (existsSync(dotenvFile)) {
    dotenvExpand(
      dotenv.config({
        path: dotenvFile,
      }),
    );
  }
});

// We support resolving modules according to `NODE_PATH`.
// This lets you use absolute paths in imports inside large monorepos:
// https://github.com/facebook/create-react-app/issues/253.
// It works similar to `NODE_PATH` in Node itself:
// https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders
// Note that unlike in Node, only *relative* paths from `NODE_PATH` are honored.
// Otherwise, we risk importing Node.js core modules into an app instead of webpack shims.
// https://github.com/facebook/create-react-app/issues/1023#issuecomment-265344421
// We also resolve them to make sure all tools using them work consistently.
process.env.NODE_PATH = (process.env.NODE_PATH || '')
  .split(delimiter)
  .filter((folder) => folder && !isAbsolute(folder))
  .map((folder) => resolve(appDirectory, folder))
  .join(delimiter);

export interface IGetClientEnvironment {
  raw: Record<string, string>;
  stringified: {
    'process.env': Record<string, string>;
  };
}

/**
 * Parse all relevant `.env` files and combine them into a single object
 * @param prefix : (optional - default null) regular express to filter out
 * @returns
 */
function getClientEnvironment(prefix?: RegExp): IGetClientEnvironment {
  const raw = Object.keys(process.env)
    .filter((key) => !prefix || (prefix && prefix.test(key)))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        // Useful for determining whether we’re running in production mode.
        // Most importantly, it switches React into the correct mode.
        NODE_ENV: process.env.NODE_ENV || 'development',
      } as Record<string, string>,
    );
  // Stringify all values so we can feed into webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {} as Record<string, string>),
  };

  return { raw, stringified };
}

export default getClientEnvironment;
