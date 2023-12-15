<?php
    require_once "vendor\stripe\stripe-php\init.php";

    $stripeDetails = array(
        "secretKey" => "sk_test_51OGl1yAN0zGPirIISOG72yfyGeMDLJKCfCOZbYPbmxB0aitGtkHvjXCuEDrAW43JScd2WI0HDvLJuHsCaP9RaPVH005FC6dBaY",
        "publishableKey" => "pk_test_51OGl1yAN0zGPirIIlsm101A2NWgEe5IGcP7z4RJFq0LJDEj68DYa2A8G64lGB7YIwmd0eAXdcx1rUHEyg6nr4fr300Frae5tAJ"
    );

    \Stripe\Stripe::setApiKey($stripeDetails["secretKey"]);
?>