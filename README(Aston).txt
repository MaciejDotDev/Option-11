to use the project run these commands


cp .env.example .env
php artisan key:generate

npm install
npm run dev (in a different terminal)
php artisan migrate
composer update
php artisan config:cache
php artisan config:clear
php artisan db:seed --class=DatabaseSeeder
npm run build
php artisan serve

be aware that the stripe checkout may not work since you'll need the CLI, it only works in the actual website

to trigger low stock notification add an item to the wishlist through another account and decrease the stock by less than 5 by buying an item and see the notification from another account wait at least 20 sec

Admin login is:

username:admin

password:admin
