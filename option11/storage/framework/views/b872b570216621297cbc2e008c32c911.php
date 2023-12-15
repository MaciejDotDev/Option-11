


















<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Bike shop</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="css/app.css">

    <!-- Styles -->
    <style>
        body {
            background-color: #F7F4F2;
            margin: 0px;
            padding: 0px;
            font-family: Lexend;
        }

        .topnav {
            background-color: #F7F4F2;
            height: 38px;
            text-align: center;
            padding-top: 20px;
            padding-bottom: 20px;
        }

        .topnav a {
            color: black;
            text-align: center;
            padding: 10px 16px;
            text-decoration: none;
            font-size: 18px;
            opacity: 1;
            transition: 0.3s;
        }

        .topnav a:hover:not(.active) {
            color: #AC8A65;
            transition: 0.5s;
        }

        .topnav a:hover {
            opacity: 0.6;
        }

        h3 {


            font-size: 17px
        }

        h1 {
            font-size: 35px;
            margin: 20px;
            color: black;
            text-decoration: none;
        }

        .home-input-container {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            max-width: 600px;
            background-color: #AC8A65;
            padding: 20px;
            border-radius: 32px;
        }

        .home-container1 {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            background-color: #F7F4F2;
            border-radius: 22px;
        }

        .home-textinput {
            flex: 1;
            color: var(--dl-color-grays-gray40);
            border-width: 0px;
            padding: 10px;
            border-radius: 32px;
            text-align: center;
        }

        .home-button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 20px;
            border-radius: 32px;
            text-align: center;
            color: black;
            font-size: 18px;
            padding: 10px 20px;
            transition: 0.3s;

        }

        .home-button:hover:not(.active) {
            color: #AC8A65;
            transition: 0.5s;
        }

        .plist {
            font-weight: normal;
        }

        .home-footer {
            left: -16px;
            width: 100%;
            bottom: -387px;
            display: flex;
            position: absolute;
            max-width: var(--dl-size-size-maxwidth);

            justify-content: space-between;
        }

        .navbar-brand {
            text-decoration: none;
            border-bottom: none;
            color: inherit;
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            padding-top: 100px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.4);


        }

        .modal-content {
            background-color: #F7F4F2;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 50%;
            border-radius: 32px;
        }


        .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }

        h2 {

            text-align: center;
            padding-bottom: 20px;

        }

        .projectDetails {


            color: inherit;

        }

        .projectDetails:hover:not(.active) {
            color: white;
            transition: 0.5s;
        }

        .date {

            display: flex;

            align-items: center;
            margin-top: 5px;
            margin-bottom: 5px;

            justify-content: space-between;
        }
    </style>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
        data-tag="font" />
</head>

<header id="main-header">
    <h1><a class="navbar-brand" href="<?php echo e(url('/')); ?>">
            Bike shop
        </a> </h1>

    <div id="topnav" class="topnav">
        <div class="">
            <?php if(Route::has('login')): ?>
                <div class="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    <?php if(auth()->guard()->check()): ?>
                       
                        <a href="<?php echo e(url('/home')); ?>"
                            class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Account</a>

                        <a href="<?php echo e(url('/basket')); ?>"
                        class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Basket</a>
                    <?php else: ?>
                        <a href="<?php echo e(route('login')); ?>"
                            class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log
                            in</a>


                        <?php if(Route::has('register')): ?>
                            <a href="<?php echo e(route('register')); ?>"
                                class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</a>
                        <?php endif; ?>


                    <?php endif; ?>
                </div>
            <?php endif; ?>




        </div>
    </div>
</header>




    <div class="home-input-container">
        <h2>bikes</h2>

        

        <table id="list-table">



                
            <?php if(count($bikes) > 0): ?>
            <tr>
                <th> Pruduct Name</th>
                <th> Description</th>
                <th> Price</th>
                <th> Stock Quantity  </th>
                <th> Category </tr>
            <?php endif; ?>

        <tbody>




            </thead>
            <?php $__empty_1 = true; $__currentLoopData = $bikes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $bike): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>

            <form action=" <?php echo e(route('addBasket')); ?>" method="POST">
                <?php echo csrf_field(); ?>
                <tr>
                    <th class="plist"><?php echo e($bike->productname); ?>  <input type="hidden" id="price" name="price" value="<?php echo e($bike->price); ?>">  <button type="submit" name="bikeaddbasket"
                        value="<?php echo e($bike->bikeid); ?>" style="width:110px; border-radius: 32px;margin-top:15px">
                        Add  to basket</button> <input id="quantity" min="0" style= "padding:1px " type="number"  name="quantity"  > </th>
                    <th class="plist"><?php echo e($bike->description); ?> </th>
                    <th class="plist" ><?php echo e($bike->price); ?> </th>
                    <th class="plist"><?php echo e($bike->stockquantity); ?> </th>
                    <th class="plist"><?php echo e($bike->category); ?> </th>
                </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                    <th> No project found. </th>
                <?php endif; ?>
            </form>
            </tbody>

        </table>



    </div>






    </div>






</html>
<?php /**PATH C:\xampp\htdocs\larabank\resources\views//welcome.blade.php ENDPATH**/ ?>