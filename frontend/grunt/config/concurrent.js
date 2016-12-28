module.exports = function(grunt) {
    return {
        'dev-deploy': {
            tasks: ['watch:sass', 'watch:js'],
            options: {
                'logConcurrentOutput': true,
                'limit': 10
            }
        },
        'watch-eslint': {
            tasks: ['watch:eslint'],
            options: {
                'logConcurrentOutput': true
            }
        },
        'watch-sass': {
            tasks: ['watch:sass'],
            options: {
                'logConcurrentOutput': true,
                'limit': 10
            }
        }
    };
};
