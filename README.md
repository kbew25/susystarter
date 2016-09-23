# Susy Starter Boilerplate

1. Install Ruby if not Mac
2. Install gems:
<pre>
sudo gem install -n /usr/local/bin compass
sudo gem install -n /usr/local/bin css_parser
sudo gem install -n /usr/local/bin susy
sudo gem install -n /usr/local/bin breakpoint
</pre>
3. Delete resources directory if not needed

If using compass:
- <pre>compass watch</pre>

If using gulp:
- Install Node.js https://nodejs.org/en/
- <pre>sudo npm install gulp -g</pre>
- <pre>npm init</pre>

(optional)
- Move resources/gulpfile.js to root and delete directory
- <pre>npm install gulp gulp-compass gulp-autoprefixer gulp-clean-css gulp-uglify gulp-rename gulp-concat gulp-notify gulp-livereload gulp-plumber --save-dev</pre>
