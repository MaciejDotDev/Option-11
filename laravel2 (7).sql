-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2023 at 04:41 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel2`
--

-- --------------------------------------------------------

--
-- Table structure for table `accessories`
--

CREATE TABLE `accessories` (
  `accessoryid` int(200) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `description` varchar(255) NOT NULL,
  `imageURL` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `stockquantity` int(11) NOT NULL,
  `size` char(255) NOT NULL,
  `colour` char(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `accessories`
--

INSERT INTO `accessories` (`accessoryid`, `productname`, `price`, `description`, `imageURL`, `category`, `stockquantity`, `size`, `colour`, `created_at`, `updated_at`) VALUES
(1, 'Helmet', 49.99, 'A helmet to protect your head.', 'helmet.jpg', 'Helmet', 10, 'Medium', 'Black', NULL, NULL),
(2, 'Helmet', 49.99, 'A helmet to protect your head.', 'helmet.jpg', 'Helmet', 10, 'Large', 'Black', NULL, NULL),
(3, 'Helmet', 49.99, 'A helmet to protect your head.', 'helmet.jpg', 'Helmet', 10, 'Small', 'Black', NULL, NULL),
(4, 'Knee Pads', 29.99, 'Knee pads to protect your knees.', 'knee_pads.jpg', 'Knee Pads', 10, 'Medium', 'Black', NULL, NULL),
(5, 'Knee Pads', 29.99, 'Knee pads to protect your knees.', 'knee_pads.jpg', 'Knee Pads', 10, 'Large', 'Black', NULL, NULL),
(6, 'Knee Pads', 29.99, 'Knee pads to protect your knees.', 'knee_pads.jpg', 'Knee Pads', 10, 'Small', 'Black', NULL, NULL),
(7, 'Gloves', 19.99, 'Gloves to protect your hands.', 'gloves.jpg', 'Gloves', 10, 'Medium', 'Black', NULL, NULL),
(8, 'Gloves', 19.99, 'Gloves to protect your hands.', 'gloves.jpg', 'Gloves', 10, 'Large', 'Black', NULL, NULL),
(9, 'Gloves', 19.99, 'Gloves to protect your hands.', 'gloves.jpg', 'Gloves', 10, 'Small', 'Black', NULL, NULL),
(10, 'Water Bottle', 9.99, 'A water bottle to keep you hydrated.', 'water_bottle.jpg', 'Water Bottle', 10, 'Medium', 'Black', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `addressid` int(11) NOT NULL,
  `postcode` varchar(9) NOT NULL,
  `country` varchar(15) NOT NULL,
  `city` varchar(15) NOT NULL,
  `street` varchar(15) NOT NULL,
  `house_no` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `baskets`
--

CREATE TABLE `baskets` (
  `basketid` int(200) NOT NULL,
  `userid` int(200) NOT NULL,
  `bikeid` int(200) DEFAULT NULL,
  `accessoryid` int(200) DEFAULT NULL,
  `clothingid` int(200) DEFAULT NULL,
  `bikepartsid` int(200) DEFAULT NULL,
  `repairkitsid` int(200) DEFAULT NULL,
  `quantity` int(200) DEFAULT NULL,
  `totalprice` decimal(8,2) NOT NULL,
  `Creation_Date/Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` enum('open','completed') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `baskets`
--

INSERT INTO `baskets` (`basketid`, `userid`, `bikeid`, `accessoryid`, `clothingid`, `bikepartsid`, `repairkitsid`, `quantity`, `totalprice`, `Creation_Date/Time`, `status`) VALUES
(22, 6, 3, NULL, NULL, NULL, NULL, 4, 2400.00, '2023-12-08 21:23:46', 'open'),
(49, 15, 3, NULL, NULL, NULL, NULL, 3, 1799.97, '2023-12-10 12:30:28', 'open'),
(50, 15, 8, NULL, NULL, NULL, NULL, 5, 1999.95, '2023-12-10 15:17:31', 'open'),
(51, 15, 10, NULL, NULL, NULL, NULL, 5, 999.95, '2023-12-10 15:17:38', 'open');

-- --------------------------------------------------------

--
-- Table structure for table `bikeparts`
--

CREATE TABLE `bikeparts` (
  `bikepartsid` int(200) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `stockquantity` int(11) NOT NULL,
  `imageURL` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `CompatibleWithType` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bikeparts`
--

INSERT INTO `bikeparts` (`bikepartsid`, `productname`, `description`, `price`, `stockquantity`, `imageURL`, `category`, `color`, `size`, `CompatibleWithType`, `created_at`, `updated_at`) VALUES
(44, 'Mountain Bike Seat', 'Comfortable seat for mountain bikes', 49.99, 100, 'mountain_bike_seat.jpg', 'Accessories', 'Black', 'Medium', 'Mountain Bikes', '2023-12-09 22:03:03', '2023-12-09 22:03:03'),
(45, 'Brake Set', 'High-performance brake set for bikes', 29.99, 50, 'brake_set.jpg', 'Accessories', 'Silver', 'Universal', 'All Bikes', '2023-12-09 22:03:03', '2023-12-09 22:03:03'),
(46, 'Aluminum Frame', 'Lightweight aluminum frame for bikes', 99.99, 30, 'aluminum_frame.jpg', 'Parts', 'Silver', 'Large', 'All Bikes', '2023-12-09 22:03:03', '2023-12-09 22:03:03'),
(47, 'Wheel Rim', 'Durable wheel rim for bikes', 19.99, 80, 'wheel_rim.jpg', 'Parts', 'Black', 'Universal', 'All Bikes', '2023-12-09 22:03:03', '2023-12-09 22:03:03'),
(48, 'Saddle', 'Comfortable saddle for bikes', 39.99, 60, 'bike_saddle.jpg', 'Accessories', 'Brown', 'Medium', 'All Bikes', '2023-12-09 22:03:03', '2023-12-09 22:03:03');

-- --------------------------------------------------------

--
-- Table structure for table `bikes`
--

CREATE TABLE `bikes` (
  `bikeid` int(100) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `stockquantity` int(100) NOT NULL,
  `imageURL` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bikes`
--

INSERT INTO `bikes` (`bikeid`, `productname`, `description`, `price`, `stockquantity`, `imageURL`, `category`) VALUES
(3, 'Mountain Bike XR', 'High-performance mountain bike', 599.99, 26, 'mountain_bike_xr.jpg', 'Mountain Bikes'),
(4, 'City Cruiser', 'Comfortable city cruiser bike', 349.99, 25, 'city_cruiser.jpg', 'City Bikes'),
(5, 'Road Racer 2000', 'Sleek road racing bike', 899.99, 25, 'road_racer_2000.jpg', 'Road Bikes'),
(6, 'Mountain Bike', 'A sturdy mountain bike for off-road adventures.', 499.99, 6, 'mountain_bike.jpg', 'Mountain'),
(7, 'Road Bike', 'A lightweight road bike for speed.', 599.99, 10, 'road_bike.jpg', 'Road'),
(8, 'Hybrid Bike', 'A hybrid bike for both on and off-road.', 399.99, -4, 'hybrid_bike.jpg', 'Hybrid'),
(9, 'Electric Bike', 'An electric bike for those who want to go further.', 799.99, 1, 'electric_bike.jpg', 'Electric'),
(10, 'Kids Bike', 'A kids bike for those who want to start young.', 199.99, -9, 'kids_bike.jpg', 'Kids');

-- --------------------------------------------------------

--
-- Table structure for table `clothes`
--

CREATE TABLE `clothes` (
  `clothingid` int(100) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `stockquantity` int(100) NOT NULL,
  `imageURL` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clothes`
--

INSERT INTO `clothes` (`clothingid`, `productname`, `description`, `price`, `stockquantity`, `imageURL`, `category`) VALUES
(2, 'Cycling Jersey', 'A comfortable cycling jersey for bikers.', 29.99, 50, 'jersey_image.jpg', 'Jerseys'),
(3, 'Cycling Shorts', 'Breathable and padded cycling shorts.', 34.99, 40, 'shorts_image.jpg', 'Shorts'),
(4, 'Cycling Jacket', 'Water-resistant jacket for biking in different weather conditions.', 59.99, 30, 'jacket_image.jpg', 'Jackets'),
(5, 'Cycling Pants', 'Durable and flexible pants for long rides.', 39.99, 35, 'pants_image.jpg', 'Pants');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(6, '2023_12_05_225419_bikes_table', 1),
(10, '2014_10_12_100000_create_password_reset_tokens_table', 2),
(11, '2019_08_19_000000_create_failed_jobs_table', 2),
(12, '2019_12_14_000001_create_personal_access_tokens_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `ordersid` int(200) NOT NULL,
  `userid` int(200) NOT NULL,
  `basketid` int(200) DEFAULT NULL,
  `paymentid` int(200) DEFAULT NULL,
  `addressid` int(200) DEFAULT NULL,
  `totalprice` decimal(8,2) NOT NULL,
  `Creation_Date/Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` enum('paid','dispatched','delivered') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`ordersid`, `userid`, `basketid`, `paymentid`, `addressid`, `totalprice`, `Creation_Date/Time`, `status`) VALUES
(49, 15, 49, NULL, NULL, 1799.97, '2023-12-10 15:05:02', 'paid'),
(50, 15, 49, 10, NULL, 1799.97, '2023-12-10 15:17:03', 'paid'),
(51, 15, 49, 10, NULL, 4799.87, '2023-12-10 15:17:53', 'paid'),
(52, 15, 50, 10, NULL, 4799.87, '2023-12-10 15:17:53', 'paid'),
(53, 15, 51, 10, NULL, 4799.87, '2023-12-10 15:17:53', 'paid');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL,
  `cardNumber` varchar(255) DEFAULT NULL,
  `expiryDate` varchar(255) DEFAULT NULL,
  `cvv` varchar(255) DEFAULT NULL,
  `userid` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`payment_id`, `cardNumber`, `expiryDate`, `cvv`, `userid`, `created_at`) VALUES
(10, 'eyJpdiI6IlNpdnM5Yk5IWWVrcTlMb3FlbzBGeGc9PSIsInZhbHVlIjoiMWxka2hPNm1xMmdMa3REZ0t1dWZHWjdjNllHYkQ4UGFRTDJWRlRBenJUTT0iLCJtYWMiOiI3YWRlMmY1NmFlYTUzYWJjMjA3YmVlOGMxZDlkYjVmY2U4OTY1ZGZhYWQ0NGJkYTYwYTNiYzI2MTM0N2FiMTlhIiwidGFnIjoiIn0=', 'eyJpdiI6IjVtdkhCcnMrVkJuL05sUVN0ZjdVTkE9PSIsInZhbHVlIjoianV6dzhoMkNHMUFuTVI1aTZOdXc4UT09IiwibWFjIjoiMmM3MWE3M2QyMzc2NWIwMDJhODg1ZTdiNDdlNTU4MWQ3ZWFjNDhhMDE5YzBiYjFkOTgzNTFmYWY1NWMxZjdiZSIsInRhZyI6IiJ9', 'eyJpdiI6IndteWJPWW50Qzc3M0ZLRStJckFOeFE9PSIsInZhbHVlIjoiQlBoUENpWHlPSEl3MXRoWThTVG5OUT09IiwibWFjIjoiMzViMGM3ZDk1MzA0ZjNiNGE4ZTA3YWQ5NTIyOWE2OTdiNjc5YzRjY2ViN2FmYmI4YzEzMDcwYjk0MWJiOWM2YyIsInRhZyI6IiJ9', 15, '2023-12-10 15:05:02'),
(11, 'eyJpdiI6IjBQdGUyeUc1RVhWVjAvQVNxQ2VJQnc9PSIsInZhbHVlIjoidnVnS1QvdXViRDBIVFFISkxjaCtXUzBBZWpqOUpMbTNJYXpGZjlraDZ5bz0iLCJtYWMiOiI3ZDVmZTE1ZjVmYjdiMmIyZDkzNjViNGRmNmE2NDdiOThhODMwMDAwYTY1YjgxNDVkMmZiYWVjZWI3MzRlN2ExIiwidGFnIjoiIn0=', 'eyJpdiI6ImJXTVJRZWtEelpYaGIreHo1Y0JqalE9PSIsInZhbHVlIjoibXBTZVpBbDJkZUcycnVXVEJQWlZudz09IiwibWFjIjoiY2JiZGQ4MTg2ZDM5ZTY3YjRlOTkyMDE3N2RmNGJmMmIyYmI2ZjdiNjc3YmNjZjYwY2U1ZDQ2Njc5NzMzYmM2ZCIsInRhZyI6IiJ9', 'eyJpdiI6Ii9qbXRwcTlEM1Z1V1VBN1kxdCtTWVE9PSIsInZhbHVlIjoiOVEybStJL1E3blV4QnVmV1lIcysyQT09IiwibWFjIjoiNTdkMzA3ZjhhZGIwZDhhMmI4OTU1ZGY3N2E2M2UwMDJjN2YwM2FmOTI2MmE1NmVhZjVlYjQ0YjgzODcwYzI4ZiIsInRhZyI6IiJ9', 15, '2023-12-10 15:17:02'),
(12, 'eyJpdiI6ImpWQlZ2ZnAzelBkazlJVndQaU1UZ3c9PSIsInZhbHVlIjoiZkJxS0QwL2VESlA2UElnejQvWXEzMVcxaURaR3piNUo3ZG1rck44ZFNPcz0iLCJtYWMiOiJhYjFiNTQ0ZDc4NGFjYTkyMzA1YTgyYzg4ZTVjMjk5MDM1MDJiYTE3MmFkNGJlNjY3YjNmNDExMGYwODQ0MjFlIiwidGFnIjoiIn0=', 'eyJpdiI6IkYzSFMxbVppTiswQ0JxZWpOMllKQlE9PSIsInZhbHVlIjoiVUd3OFJLYzhsYncxcXg1dDdqSCtZQT09IiwibWFjIjoiZDNhNmQwMTQzOGQ1MmU3Y2VlZTZmMDFkMDAwYmVmZTY1NDM4Mjk2MDAyYmFmNTE0ZTYxZGQ1YThjMzVhYzBiMyIsInRhZyI6IiJ9', 'eyJpdiI6IjU3OGZpY1F4T3pJRU9uQkhscVV4ekE9PSIsInZhbHVlIjoiZFZIYzFXR1VsdDgrajFxODdvOTlvQT09IiwibWFjIjoiYTY5NTVkZDVjZWM3YWUzMDRkNDdmZjE1NTdmYzliOWUxOWY5OThmMzJkMTkxNzlhODI0MzUxZWNlYTE3NWVlZCIsInRhZyI6IiJ9', 15, '2023-12-10 15:17:53');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `repairkits`
--

CREATE TABLE `repairkits` (
  `repairkitsid` int(200) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `stockquantity` int(11) NOT NULL,
  `imageURL` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `CompatibleWithType` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `repairkits`
--

INSERT INTO `repairkits` (`repairkitsid`, `productname`, `description`, `price`, `stockquantity`, `imageURL`, `category`, `CompatibleWithType`, `created_at`, `updated_at`) VALUES
(1, 'Puncture Repair Kit', 'A puncture repair kit for fixing punctures.', 4.99, 10, 'puncture_repair_kit.jpg', 'Repair Kit', 'All', '2023-12-09 20:46:04', '2023-12-09 20:46:04'),
(2, 'Bike Pump', 'A bike pump for pumping up tyres.', 9.99, 10, 'bike_pump.jpg', 'Repair Kit', 'All', '2023-12-09 20:46:05', '2023-12-09 20:46:05'),
(3, 'Bike Multi-Tool', 'A bike multi-tool for fixing your bike.', 14.99, 10, 'bike_multi_tool.jpg', 'Repair Kit', 'All', '2023-12-09 20:46:05', '2023-12-09 20:46:05'),
(4, 'Bike Chain', 'A bike chain for replacing your chain.', 19.99, 10, 'bike_chain.jpg', 'Repair Kit', 'All', '2023-12-09 20:46:05', '2023-12-09 20:46:05'),
(5, 'Bike Reapair Kit medium', 'A bike Repair Kit for all of your puncture repair needs.', 44.99, 10, 'bikerepairkitB.jpg', 'Repair Kit', 'All', '2023-12-09 20:46:05', '2023-12-09 20:46:05'),
(6, 'Bike Reapair Kit large', 'A bike Repair Kit for all of your puncture repair needs.', 59.99, 10, 'bikerepairkitC.jpg', 'Repair Kit', 'All', '2023-12-09 20:46:05', '2023-12-09 20:46:05'),
(7, 'Bike Reapair Kit small', 'A bike Repair Kit for all of your puncture repair needs.', 29.99, 10, 'bikerepairkitA.jpg', 'Repair Kit', 'All', '2023-12-09 20:46:05', '2023-12-09 20:46:05');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(200) NOT NULL,
  `firstname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phonenumber` varchar(12) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `addressid` int(11) DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `firstname`, `lastname`, `email`, `email_verified_at`, `phonenumber`, `password`, `addressid`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'ewfssd', 'fsdfsd', 'xekada4965@rdluxe.com', NULL, '123456789', '$2y$12$ZtcU1N9ZJwrUPZ0xrEd4k.c60YbAKNLLQRKF6X5UOYEU55RXQJ/Hq', NULL, NULL, '2023-11-13 12:55:34', '2023-11-13 12:55:34'),
(3, 'sdfdsfds', 'sfsdf', 'xekada4d965@rdluxe.com', NULL, '14432432', '$2y$12$i76h4v31W1dOxK/uIsX8l..iECrAmUfnBXRhm5hZ1X/dGS9PDrOfa', NULL, NULL, '2023-11-13 13:17:56', '2023-11-13 13:17:56'),
(4, 'joe', 'asdas', 'xekada4965dd@rdluxe.com', NULL, '1234567890', '$2y$12$UK24dcH3gIQSTcT1HCg6yOD7fklrTa/ohyTOVoiDji/ft63tE.PxS', NULL, NULL, '2023-11-13 16:02:33', '2023-11-13 16:02:33'),
(5, 'adas', 'dasdas', 'xekada496ee5@rdluxe.com', NULL, '123456789', '$2y$12$2W9ftSEY8R0769OjBzEmPugXUMWTZ/MoVBul7OiliFMeF20ToT7bm', NULL, NULL, '2023-11-14 04:50:17', '2023-11-14 04:50:17'),
(6, 'dasdas', 'dadas', 'xekdddada4965@rdluxe.com', NULL, '212', '$2y$12$L5quXirL01.Ptv.gMH4pX.wsqatbydXvx3YqHft95mJmO7VRJGD2O', NULL, NULL, '2023-11-14 18:58:24', '2023-11-14 18:58:24'),
(7, 'dasda', 'dasda', 'xekadddda4965@rdluxe.com', NULL, '122', '$2y$12$qkTqSj6.Bsxb3veFdh5G5uv4zc.EWdDX7psDo5NrIactEDahWcRhm', NULL, NULL, NULL, NULL),
(8, 'jose', 'asdas', 'rekeneldd654@marksia.com', NULL, '123213', '$2y$12$9WvK6C4HSIuXhBznXNPNx.Dkp60zfWEHgKu9kgTe/cU3dO2V/Yn32', NULL, NULL, NULL, NULL),
(9, '13', '13', 'pawik935cc11@newcupon.com', NULL, '13', '$2y$12$xzLIJ16qKw46EqjUax.tHe4epqbFjD/61XwZBNCQ.l0lVyz2c7gTi', NULL, NULL, NULL, NULL),
(10, 'joe', 'smith', 'pawik9dd3511@newcupon.com', NULL, '123', '$2y$12$jeUnQO9zi.Ydteiewlivs..XgdIPQAPErbAphMePzzPIOZEX7cWPy', NULL, NULL, NULL, NULL),
(15, '12321', '12312', 'pawik93511@newcupon.com', NULL, '12321', '$2y$12$mqAkcpuIhC3sdzXc4w97E.H/rcJAr2LD3QdHpfitjTFX9DgVDSike', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accessories`
--
ALTER TABLE `accessories`
  ADD PRIMARY KEY (`accessoryid`);

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`addressid`);

--
-- Indexes for table `baskets`
--
ALTER TABLE `baskets`
  ADD PRIMARY KEY (`basketid`),
  ADD KEY `accessory_foreign` (`accessoryid`),
  ADD KEY `clothing_foreign` (`clothingid`),
  ADD KEY `bikepartid_foreign` (`bikepartsid`),
  ADD KEY `repairkitsid_foreign` (`repairkitsid`),
  ADD KEY `userid` (`userid`),
  ADD KEY `bikeid` (`bikeid`);

--
-- Indexes for table `bikeparts`
--
ALTER TABLE `bikeparts`
  ADD PRIMARY KEY (`bikepartsid`);

--
-- Indexes for table `bikes`
--
ALTER TABLE `bikes`
  ADD PRIMARY KEY (`bikeid`);

--
-- Indexes for table `clothes`
--
ALTER TABLE `clothes`
  ADD PRIMARY KEY (`clothingid`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ordersid`),
  ADD KEY `basketid_foreign` (`basketid`),
  ADD KEY `paymentid_foreign` (`paymentid`),
  ADD KEY `addressid_foreign` (`addressid`),
  ADD KEY `userid` (`userid`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `user_ibfk_1` (`userid`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `repairkits`
--
ALTER TABLE `repairkits`
  ADD PRIMARY KEY (`repairkitsid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`),
  ADD KEY `fk_user_address` (`addressid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accessories`
--
ALTER TABLE `accessories`
  MODIFY `accessoryid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `addressid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `baskets`
--
ALTER TABLE `baskets`
  MODIFY `basketid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `bikeparts`
--
ALTER TABLE `bikeparts`
  MODIFY `bikepartsid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `bikes`
--
ALTER TABLE `bikes`
  MODIFY `bikeid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `clothes`
--
ALTER TABLE `clothes`
  MODIFY `clothingid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `ordersid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `repairkits`
--
ALTER TABLE `repairkits`
  MODIFY `repairkitsid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `baskets`
--
ALTER TABLE `baskets`
  ADD CONSTRAINT `accessory_foreign` FOREIGN KEY (`accessoryid`) REFERENCES `accessories` (`accessoryid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bike_foreign` FOREIGN KEY (`bikeid`) REFERENCES `bikes` (`bikeid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bikepartid_foreign` FOREIGN KEY (`bikepartsid`) REFERENCES `bikeparts` (`bikepartsid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clothing_foreign` FOREIGN KEY (`clothingid`) REFERENCES `clothes` (`clothingid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `repairkitsid_foreign` FOREIGN KEY (`repairkitsid`) REFERENCES `repairkits` (`repairkitsid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `addressid_foreign1` FOREIGN KEY (`addressid`) REFERENCES `address` (`addressid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `basket_ibfk_11` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `basketid_foreign1` FOREIGN KEY (`basketid`) REFERENCES `baskets` (`basketid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `paymentid_foreign1` FOREIGN KEY (`paymentid`) REFERENCES `payments` (`payment_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_user_address` FOREIGN KEY (`addressid`) REFERENCES `address` (`addressid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
