## About This Project
Ready to use Webpack project setup.

## What Is Supported?
It supports compilation using following plugins :
- Sass Loader.
- Purify CSS.
- Vue Loader.
- Babel.
- File Loader.
- Uglify JS.

## How To?
- Download or clone this repo.
- Configure `webpack.config.js` and specify your entry points :
```
    app: [
        './src/js/main.js',
        './src/scss/main.scss'
    ],
```
- Run `npm install`.
- Run `npm run dev` or `npm run watch` or `npm run prod`