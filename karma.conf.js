module.exports = function(karma) {

  karma.set({
    browsers: ['Chrome'],
    frameworks: ['browserify', 'mocha'],
    files: ['test/**/*.js'],
    preprocessors: {
      'test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true
    }
  });

};
