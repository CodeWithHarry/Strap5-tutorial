'use strict';

/**
 * hometext service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hometext.hometext');
