import config from './config'

export default {
  source: "mockoon:1.16.0",
  data: [
    {
      type: "environment",
      item: {
        latency: 0,
        routes: [],
        cors: true,
        headers: [],
        https: false,
        proxyMode: true,
        lastMigration: 18,
        endpointPrefix: "",
        // TODO: may need to migrate this to docker.host.internal
        hostname: "0.0.0.0",
        proxyRemovePrefix: false,
        port: config.mockoon.port,
        name: config.mockoon.name,
        uuid: "05cb4607-f2e3-4634-b4d1-96cceaf59467",
        // TODO: Repplace localhost with current host within docker
        proxyHost: `http://localhost:${config.port}`,
        // TOOD: add host header here for current host within docker
        proxyReqHeaders: [
          {
            key: "",
            value: ""
          }
        ],
        proxyResHeaders: [
          {
            key: "",
            value: ""
          }
        ]
      }
    }
  ]
}