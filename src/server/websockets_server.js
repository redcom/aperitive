import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import { app as settings } from '../../package.json';
import log from '../log';

// Hot reloadable modules
let subscriptionManager = require('./api/subscriptions').subscriptionManager;

let server;

const port = process.env.WS_PORT || settings.wsPort;

const websocketServer = createServer((req, res) => {
  res.writeHead(404);
  res.end();
});

server = websocketServer.listen(port, () => log(
  `WebSocket Server is now running on port ${port}`
));

server.on('close', () => {
  server = null;
});

new SubscriptionServer({
  subscriptionManager,
}, websocketServer);

if (module.hot) {
  try {
    module.hot.dispose(() => {
      if (server) {
        server.close();
      }
    });

    module.hot.accept();

    // Reload reloadable modules
    module.hot.accept('./api/subscriptions',
      () => { subscriptionManager = require('./api/subscriptions').subscriptionManager; });
  } catch (err) {
    log(err.stack);
  }
}
