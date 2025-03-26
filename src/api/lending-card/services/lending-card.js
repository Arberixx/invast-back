'use strict';

/**
 * lending-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lending-card.lending-card');
