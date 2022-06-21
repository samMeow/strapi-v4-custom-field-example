'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('custom-field')
      .service('myService')
      .getWelcomeMessage();
  },
};
