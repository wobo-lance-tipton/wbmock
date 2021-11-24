import path from 'path'
import config from './config/config'
import { spawn } from 'child_process'
const rootDir = path.join(__dirname, '../')

/**
 * Starts the prxoy server, to proxy requests to our mock server
 */
export const mockServer = () => {
  return spawn('npx', [
    `mockoon-cli`,
    `start`,
    `--name`,
    config.mockoon.name,
    `--data`,
    config.mockoon.data,
    `--port`,
    config.mockoon.port,
  ], {
    cwd: rootDir,
    stdio: 'inherit',
    env: process.env,
  });
}

mockServer()