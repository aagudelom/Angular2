SystemJS.config({
  baseURL: './',
  //defaultJSExtensions: true,
  transpiler: 'typescript',
  map: {
    'angular': 'node_modules/angular/angular.js'
  },
  packages: {
    'ts': { defaultExtension: 'ts' }
  }
});
