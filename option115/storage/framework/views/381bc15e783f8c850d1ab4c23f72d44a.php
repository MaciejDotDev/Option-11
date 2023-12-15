<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale()), false); ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="<?php echo e(csrf_token(), false); ?>">

    <title><?php echo e(config('app.name', 'Laravel'), false); ?></title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
    <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/sass/app.scss', 'resources/js/app.js']); ?>
</head>

<body>
    <style>
        body {
  margin: 0;
  box-sizing: border-box;
  background-color: #17191b;
}

/* Navbar Styling */
.nav-container {
  display: flex;
  justify-content: space-between;
}

.nav-links {
  font-family: 'Koulen', sans-serif;
}

.nav-link:hover {
  background: #0d0a0a;
  border-radius: 5px;
}

.nav-logo {
  font-family: 'Koulen', sans-serif;
}

.kraken-logo {
  margin-left: 1.5rem;
  max-width: 6vw;
}

.basket-icon {
  max-width: 2.5rem;
}

/* ------- END of Navbar Styling ------- */

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.smaller-img {
  width: 100%;
  height: auto;
}

.image-container {
  position: relative;
  width: 100%;
}

.image-text {
  font-family: 'Koulen', sans-serif;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;

  font-size: 5vw;
}

.image-text span:first-child {
  text-decoration: underline;
}

.image-text span:last-child {
  font-weight: bold;
  background: linear-gradient(
    90deg,
    rgb(255, 0, 38),
    rgb(158, 36, 44),
    rgb(53, 0, 53)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.categories h2 {
  font-family: 'Koulen', sans-serif;
}

.shadow-text {
  text-shadow: 10px 5px 1px #333;
}

.ctg-image {
  max-width: 26rem;
  margin: 2rem auto;
  font-family: 'Koulen', sans-serif;
  transition: 0.3s ease-in-out;
}

.ctg-image:hover {
  transform: scale(1.1);
  transition: 0.3s ease-in-out;
}

.categories h2:hover {
  text-shadow: 20px 5px 1px #870101;
  transition: 0.3s ease-in-out;
}

/* Decrease category placeholder image sizes for mobile versions */
@media (max-width: 767px) {
  .ctg-image {
    max-width: 16rem;
    margin: 2rem auto;
  }
}

/* ---------- Login Form ---------- */

    </style>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="<?php echo e(url('/'), false); ?>">
                    <?php echo e(config('app.name', 'Laravel'), false); ?>

                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="<?php echo e(__('Toggle navigation'), false); ?>">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                        <?php if(auth()->guard()->guest()): ?>
                            <?php if(Route::has('login')): ?>
                                <li class="nav-item">
                                    <a class="nav-link" href="<?php echo e(route('login'), false); ?>"><?php echo e(__('Login'), false); ?></a>
                                </li>
                            <?php endif; ?>

                            <?php if(Route::has('register')): ?>
                                <li class="nav-item">
                                    <a class="nav-link" href="<?php echo e(route('register'), false); ?>"><?php echo e(__('Register'), false); ?></a>
                                </li>
                            <?php endif; ?>
                        <?php else: ?>
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    <?php echo e(Auth::user()->name, false); ?>

                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="<?php echo e(route('logout'), false); ?>"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        <?php echo e(__('Logout'), false); ?>

                                    </a>

                                    <form id="logout-form" action="<?php echo e(route('logout'), false); ?>" method="POST" class="d-none">
                                        <?php echo csrf_field(); ?>
                                    </form>
                                </div>
                            </li>
                        <?php endif; ?>
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            <?php echo $__env->yieldContent('content'); ?>
        </main>
    </div>
</body>
</html>
<?php /**PATH C:\xampp\htdocs\option115\resources\views/layouts/app.blade.php ENDPATH**/ ?>