module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  grunt.initConfig({
    // Watch script and style files
    // Reload on changes
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ["./app/js/**/*.jsx"],
        tasks: ["browserify"]
      },
      styles: {
        files: ["./app/stylus/*.styl"],
        tasks: ["stylus"]
      },
      markup: {
        files: ["./app/index.html"],
        tasks: ["copy"]
      }
    },

    // Runs node server
    shell: {
      node: {
        command: 'node server.js'
      }
    },

    // Copies html to public
    copy: {
      dist: {
        files: [{
          cwd: 'app/',
          src: 'index.html',
          dest: 'public/',
          expand: true
        }]
      }
    },

    // Compile stylus into public css
    stylus: {
      dist: {
        files: {
          'public/css/style.css': 'app/stylus/style.styl'
        }
      }
    },

    // Browserify and Babelify into public js
    browserify: {
      dist: {
        options: {
          browserifyOptions: {
              debug: true
          },
          transform: ["babelify"]
        },
        files: {
          "./public/js/bundle.js": ["./app/js/app.jsx"]
        }
      }
    }
  });

  grunt.registerTask('default', ['watch']);

  grunt.registerTask('serve', [
    'copy',
    'browserify',
    'stylus',
    // 'shell:node',
    'watch'
  ])

  grunt.registerTask('build', [
    'copy:dist',
    'browserify:dist',
    'stylus:dist'
  ]);
}
