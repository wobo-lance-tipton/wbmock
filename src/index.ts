import { app } from './app';
import config from './config/config';
import { log } from './helpers/logger';


log.info('Starting Mock-WB-Service');

app.listen(config.port, async () => {
  log.info(`Server running on port ${config.port}`);
});
