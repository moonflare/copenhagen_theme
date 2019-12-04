'use strict';

module.exports = {
    extends: 'lighthouse:default',

    settings: {
        // For the purpose of this project, performance should be enough
        // It can always be extended to other categories
        onlyCategories: ['performance']
    }
};
