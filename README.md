In order to run the project enter the following commands in the terminal :
composer install
composer update
cp .env.example .env
php artisan key:generate
npm install
npm run dev (in a differnt terminal)
php artisan migrate
php artisan serve

Please make sure to run the databaseSeeder in order to populate the table with dummy data 
order needs to be maintained for the compatibility checker
