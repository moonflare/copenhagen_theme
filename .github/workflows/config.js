'use strict';

const perfConfig = {
    extends: 'lighthouse:default',
    settings: {
        onlyCategories: ['accessibility'],
    },
};

module.exports = perfConfig;
