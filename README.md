# Susy Starter Boilerplate

1. Install Ruby if not Mac
2. Install gems:
<pre>
sudo gem install -n /usr/local/bin compass
sudo gem install -n /usr/local/bin css_parser
sudo gem install -n /usr/local/bin susy
sudo gem install -n /usr/local/bin breakpoint
</pre>
3. Delete gulp directory if not using gulp

If using compass:
- <pre>compass watch</pre>

If using gulp:
1. Install Node.js https://nodejs.org/en/
2. <pre>sudo npm install gulp -g</pre>
3. <pre>npm init</pre>
(optional)
4. Move gulp/gulpfile.js to root and delete gulp directory
5. <pre>npm install gulp gulp-compass gulp-autoprefixer gulp-minify-css gulp-uglify gulp-rename gulp-concat gulp-notify gulp-livereload gulp-plumber --save-dev</pre>
