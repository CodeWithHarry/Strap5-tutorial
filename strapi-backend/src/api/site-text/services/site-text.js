'use strict';

/**
 * site-text service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-text.site-text');
