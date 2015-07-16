# web-start

Basic web project setup.

## Step 1

Create src/index.html & src/main.js.

Get a module bundler and static server:

    npm install browserify ecstatic --save-dev

Add to package.json:

```json
  "scripts": {
    "copy-static": "mkdir -p build && cp src/*.html build",
    "build": "npm run copy-static && browserify src/main.js > build/main.js",
    "start": "ecstatic build"
  }
```

Build the bundle and serve the result:

    npm run build && npm start

## Step 2

Bring in a linter:

    npm install eslint eslint-config-planet --save-dev

Create .eslintrc with the following:

```json
{
  "extends": "planet"
}
```

Configure your editor to run the linter (e.g. SublimeLinter-eslint).

Add a test script to package.json:

```json
    "test": "eslint src"
```

Run the linter:

    npm test

Install a file watcher to run tasks on changes:

    npm install watchy --save-dev

Modify the start command in package.json:

```json
    "start": "ecstatic build & watchy --watch src -- bash -c 'npm test && npm run build'",
```

## Step 3

Install a test runner and assertion library:

    npm install mocha chai --save-dev

Split code into modules, and add tests in a test directory.

Update package.json scripts to run the linter and then the tests:

```json
    "pretest": "eslint src",
    "test": "mocha --recursive test"
```

# Step 4

Add a .travis.yml and configure Travis to run your tests.

```yml
language: node_js
node_js:
  - 0.12
```

[![Current Status](https://secure.travis-ci.org/tschaub/web-start.svg?branch=master)](https://travis-ci.org/tschaub/web-start)

Bring in Karma to orchestrate test runs in real browsers:

    npm install karma karma-browserify karma-chrome-launcher karma-mocha karma-sauce-launcher --save-dev

Add a karma.conf.js to configure Karma:
```js
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
```

Update your test related scripts in package.json:
```json
    "start": "ecstatic build & karma start & watchy --watch src -- bash -c 'npm run lint && npm run build'",
    "lint": "eslint src",
    "pretest": "npm run lint",
    "test": "karma start --single-run",
    "test-node": "mocha --recursive test"
```
