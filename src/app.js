import app from './config/express.config'
import config from './config/servers.config'

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
    // listen on port config.port
    app.listen(config.app.port, () => {
      console.log('Application server started on %s:%s', config.app.host, config.app.port);
    })
}