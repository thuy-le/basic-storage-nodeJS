module.exports = function(grunt) {
    return {
        dev: {
            root: './build/',
            host: '0.0.0.0',
            port: '9999',
            cache: 0, // no cache!
            showDir: false,
            autoIndex: false,
            runInBackground: false
        }
    };
};