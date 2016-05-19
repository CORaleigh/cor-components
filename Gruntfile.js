/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    babel: {
      options: {
        plugins: [
          'transform-react-jsx',
          'transform-es2015-modules-commonjs'
        ]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'components/',
            src: ['**/*.js'],
            dest: 'dist/'
          }
        ]
      }
    },

    browserify: {
      dist: {
        files: [{
          src: ['dist/index.js'],
          dest: 'index.js'
        }]
      },
      options: {
        external: [
          'react'
        ]
      }
    },

    eslint: {
      target: ['components/']
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-eslint');


  // Default task.
  grunt.registerTask('default', ['eslint', 'babel', 'browserify']);

};
