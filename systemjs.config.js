/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': '/app', // 'dist',
    '@angular': '/node_modules/@angular',
 
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
  
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'upgrade',
  ];
  // put the names of any of your Material components here
  var materialPkgs = [
    'core',
    'button',
 
  ];

  materialPkgs.forEach((pkg) => {
    packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js` };
  });
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  };
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);



/*
(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',
    '@angular2-material/button': 'node_modules/@angular2-material/button',
    
    'app': 'app', // 'dist',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',
    '@angular': 'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    '@angular2-material/button': { main: 'button.js', defaultExtension: 'js'},
   
  };

  var packageNames = [
    '@angular/common',
 
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function (pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
*/
