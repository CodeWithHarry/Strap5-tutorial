'use strict';

/**
 * response service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::response.response');
