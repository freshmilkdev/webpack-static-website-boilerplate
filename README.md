# Static Website Boilerplate using Webpack 4
- Webpack 4
- Webpack Dev Server with Hot reload module
- Loaders for css, js and static files
- Dynamic index.html from template using HtmlWebpackPlugin
- ES6 transpiling to ES5 with Babel
- Both developement and production builds

#Usage
Development build, WDS will be opened in default browser at http://localhost:8080 by default.
```sh
npm run dev
``` 
Production build, outputs all needed stuff into /dist folder.
```sh 
npm run prod
``` 


#Notes
index.html files for both development and production builds will be created from template located at `src/index.template.ejs`

