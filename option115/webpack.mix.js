
let mix = require('laravel-mix');

mix
  .js("resources/js/app.js", "public/js")
  .react()
  .extract(["react"])
  .sass("resources/sass/app.scss", "public/css");