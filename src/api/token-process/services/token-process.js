'use strict';

/**
 * token-process service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::token-process.token-process');
