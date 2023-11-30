<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale()), false); ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel Package Tutorial</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <!-- Styles -->
    
    <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/js/manifest.js','resources/js/vendor.js' ,'resources/sass/app.scss', 'resources/js/app.js']); ?>
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
<div id="app"></div>
</body>
</html><?php /**PATH C:\xampp\htdocs\option115\resources\views//welcome.blade.php ENDPATH**/ ?>