module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		wiredep: {

			task: {

			// Point to the files that should be updated when
			// you run `grunt wiredep`
			src: [
				//'**/*.html',   // .html support...
				//'app/views/**/*.jade',    .jade support...
				//'src/assets/scss/styles.scss',   //.scss & .sass support...
				//'app/config.yml'          and .yml & .yaml support out of the box!
				'src/content/_layouts/default.hbs',   //.scss & .sass support...
				],

				options: {
				// See wiredep's configuration documentation for the options
				// you may pass	
				// https://github.com/taptapship/wiredep#configuration
			}
		}
	},


	// JsHint your javascript
	jshint : {
		src: {
			src: ['src/assets/js/*.js', '!src/assets/js/vendor/*.js']
		},
		options : {
			browser: true,
			curly: false,
			eqeqeq: false,
			eqnull: true,
			expr: true,
			immed: true,
			newcap: true,
			noarg: true,
			smarttabs: true,
			sub: true,
			undef: false
		}
	},

	concat: {
		// 2. la configuration pour la concaténation va ici.
		dev: {
			src: [
				'src/assets/js/vendor/**/*.js', // tous les JS dans vendor
				'src/assets/js/*.js'  // ce fichier là
				],
				dest: '_site/assets/js/global.js'
			}
		},

		uglify: {
			production: {
				options: {
					mangle: false,
					sourceMap: true,
					sourceMapName: '_site/assets/js/app.map'
				},
				files: {
					'_site/assets/js/global.js': ['src/assets/js/vendor/**/*.js', 'src/assets/js/*.js']
				}
			}
		},

		imagemin: {
			production: {
				files: [{
					expand: true,
					cwd: 'src/assets/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: '_site/assets/images/'
				}]
			}
		},

		svgmin: {
			production : {
				files: [{
					expand: true,
					cwd: 'src/assets/images/',
					src: '**/*.svg',
					dest: '_site/assets/images/'
				}]
			}
		},

		copy: {
			fonts: {
				expand: true,
				cwd: 'src/assets/fonts',
				src: '**/*',
				dest: '_site/assets/fonts/'
			},
			libs: {			
				expand: true,
				src: 'src/assets/js/lib/*',
				dest: '_site/assets/js/lib/',
				flatten: true
			},
			images: {			
				expand: true,
				cwd: 'src/assets/images',
				src: '**/*',
				dest: '_site/assets/images/'
			}
		},

	// Compass and scss
	compass: {
		options: {
		//bundleExec: true,
		httpPath: './',
		cssDir: '_site/assets/css',
		sassDir: 'src/assets/scss',
		imagesDir: 'src/assets/images',
		javascriptsDir: 'src/assets/js',
		fontsDir: 'src/fonts',
		assetCacheBuster: 'none',
		require: [
			//'sass-globbing',
			'susy'
			]
		},
		dev: {
			options: {
				environment: 'development',
				outputStyle: 'expanded',
				relativeAssets: true,
				raw: 'line_numbers = :true\n'
			}
		},
		dist: {
			options: {
				environment: 'production',
				outputStyle: 'compact',
				force: true
			}
		}
	},
	sass: {
		dev: {
			options: {
				style: 'expanded',
				require:'susy'	
			},
			files: {
				'_site/assets/css/styles.css': 'src/assets/scss/styles.scss'
			}
		},
		production: {
			options: {
				style: 'compressed',
				require:'susy'	
			},
			files: {
				'_site/assets/css/styles.css': 'src/assets/scss/styles.scss'
			}
		} 
	},


	watch: {
		scripts: {
			files: ['src/assets/js/*.js'],
			tasks: ['concat'],
			options: {
				spawn: false,
			},
		},
		css: {
			files: ['src/assets/scss/**/*.scss'],
			tasks: ['sass:dev'],//['compass:dev'],
			options: {
				spawn: false,
			}
		},
		html: {
			files: ['src/content/**/*.hbs'],
			tasks: ['assemble'],
			options: {
				spawn: false,
			}
		},

		copyfonts: {
			files: ['src/assets/fonts/**'],
			tasks: ['copy:fonts'],
			options: {
				spawn: false,
			}
		},

		copylibs: {
			files: ['src/assets/js/lib/**'],
			tasks: ['copy:libs'],
			options: {
				spawn: false,
			}
		},

		copyimages: {
			files: ['src/assets/images/**'],
			tasks: ['copy:images'],
			options: {
				spawn: false,
			}
		}

	},
	assemble: {
		options: {
			assets: 'assets',
			partials: ['src/content/_includes/**/*.hbs'],
	    //layout: ['src/content/_layouts/default.hbs'],
	    layoutdir: 'src/content/_layouts/',

	    data: ['src/content/_data/*.{json,yml}'],
	    flatten: true
	},
	test: {
		files: {
			'./_site': ['src/content/_pages/*.hbs']
		}}
	},
	browserSync: {
		dev: {
			bsFiles: {
				src : [
				'_site/assets/css/styles.css',
				'_site/assets/js/global.js',
				'_site/*.html'
				]
			},
			options: {
				watchTask: true,
				server: './_site'
			}
		}
	}

});

// 3. Nous disons à Grunt que nous voulons utiliser ce plug-in.
grunt.loadNpmTasks('grunt-wiredep');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
//grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-svgmin');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-assemble');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync');


// 4. Nous disons à Grunt quoi faire lorsque nous tapons "grunt" dans la console.
grunt.registerTask('default', ['browserSync', 'watch']);
// Utiliser sass:dist ou compass:dist
grunt.registerTask('dist', ['jshint', 'uglify', 'sass:production', 'imagemin:production', 'svgmin:production', 'copy', 'assemble']);




};