to use the project run these commands 


cp .env.example .env
php artisan key:generate 
                                                          
npm install
npm run dev (in a different terminal)
php artisan migrate
composer update
php artisan config:clear
npm run build 
php artisan serve

be aware that the stripe checkout may not work since you'll need the cli, it only works in ther webserver


Admin login is:

username:admin   

password:admin