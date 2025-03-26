'use strict';

/**
 * token-process router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::token-process.token-process');
