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
