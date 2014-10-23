exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo: 
      	'js/app.js': /^app/
      	'js/vendor.js': /^(bower_components|vendor)/
    stylesheets:
      joinTo: 
        'css/app.css': /^app/
    templates:
      joinTo: 'app.js'
