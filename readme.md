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
