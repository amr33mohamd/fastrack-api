-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: 178.62.17.251
-- Generation Time: Dec 06, 2017 at 10:51 PM
-- Server version: 5.7.20-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_meta`
--

CREATE TABLE `admin_meta` (
  `name` varchar(50) NOT NULL,
  `value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin_meta`
--

INSERT INTO `admin_meta` (`name`, `value`) VALUES
('paypal_email', '');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `author_name` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `sub_category_id` int(11) NOT NULL,
  `link` text NOT NULL,
  `downloads` int(11) NOT NULL DEFAULT '0',
  `price` int(11) NOT NULL DEFAULT '0',
  `image` text NOT NULL,
  `descc` text NOT NULL,
  `auther_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `author_name`, `category_id`, `sub_category_id`, `link`, `downloads`, `price`, `image`, `descc`, `auther_name`) VALUES
(1, 'Some book', 'Ahmed Hassan', 1, 1, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(2, 'Some book', 'Ahmed Hassan', 1, 1, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(3, 'Some book', 'Ahmed Hassan', 1, 1, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(4, 'Some book', 'Ahmed Hassan', 1, 2, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(5, 'Some book', 'Ahmed Hassan', 1, 2, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(6, 'Some book', 'Ahmed Hassan', 1, 2, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(7, 'Some book', 'Ahmed Hassan', 1, 3, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(8, 'Some book', 'Ahmed Hassan', 1, 3, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(9, 'Some book', 'Ahmed Hassan', 1, 3, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(10, 'Some book', 'Ahmed Hassan', 2, 4, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(11, 'Some book', 'Ahmed Hassan', 2, 4, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(12, 'Some book', 'Ahmed Hassan', 2, 4, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(13, 'Some book', 'Ahmed Hassan', 2, 5, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(14, 'Some book', 'Ahmed Hassan', 2, 5, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(15, 'Some book', 'Ahmed Hassan', 2, 5, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(16, 'Some book', 'Ahmed Hassan', 2, 6, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(17, 'Some book', 'Ahmed Hassan', 2, 6, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(18, 'Some book', 'Ahmed Hassan', 2, 6, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(19, 'Some book', 'Ahmed Hassan', 3, 7, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(20, 'Some book', 'Ahmed Hassan', 3, 7, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(21, 'Some book', 'Ahmed Hassan', 3, 7, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(22, 'Some book', 'Ahmed Hassan', 3, 8, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(23, 'Some book', 'Ahmed Hassan', 3, 8, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(24, 'Some book', 'Ahmed Hassan', 3, 8, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(25, 'Some book', 'Ahmed Hassan', 3, 9, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(26, 'Some book', 'Ahmed Hassan', 3, 9, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(27, 'Some book', 'Ahmed Hassan', 3, 9, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(28, 'Some book', 'Ahmed Hassan', 4, 10, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(29, 'Some book', 'Ahmed Hassan', 4, 10, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(30, 'Some book', 'Ahmed Hassan', 4, 10, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(31, 'Some book', 'Ahmed Hassan', 4, 11, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(32, 'Some book', 'Ahmed Hassan', 4, 11, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(33, 'Some book', 'Ahmed Hassan', 4, 11, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(34, 'Some book', 'Ahmed Hassan', 4, 12, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(35, 'Some book', 'Ahmed Hassan', 4, 12, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(36, 'Some book', 'Ahmed Hassan', 4, 12, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(37, 'Some book', 'Ahmed Hassan', 5, 13, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(38, 'Some book', 'Ahmed Hassan', 5, 13, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(39, 'Some book', 'Ahmed Hassan', 5, 13, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(40, 'Some book', 'Ahmed Hassan', 5, 14, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(41, 'Some book', 'Ahmed Hassan', 5, 14, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(42, 'Some book', 'Ahmed Hassan', 5, 14, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(43, 'Some book', 'Ahmed Hassan', 5, 15, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(44, 'Some book', 'Ahmed Hassan', 5, 15, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(45, 'Some book', 'Ahmed Hassan', 5, 15, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(46, 'Some book', 'Ahmed Hassan', 6, 16, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(47, 'Some book', 'Ahmed Hassan', 6, 16, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(48, 'Some book', 'Ahmed Hassan', 6, 16, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(49, 'Some book', 'Ahmed Hassan', 6, 17, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(50, 'Some book', 'Ahmed Hassan', 6, 17, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(51, 'Some book', 'Ahmed Hassan', 6, 17, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(52, 'Some book', 'Ahmed Hassan', 6, 18, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(53, 'Some book', 'Ahmed Hassan', 6, 18, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', ''),
(54, 'Some book', 'Ahmed Hassan', 6, 18, '', 0, 0, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 'description', '');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(4, 'العقيدة و الفرق'),
(6, 'الفقه وأصول الفقه'),
(7, 'الحديث'),
(8, 'التفسير');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `username` varchar(35) NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `book_id`, `user_id`, `username`, `comment`) VALUES
(1, 1, 1, 'Aubrey', 'This is a comment'),
(2, 2, 1, 'Aubrey', 'This is a comment'),
(3, 3, 1, 'Aubrey', 'This is a comment'),
(4, 4, 1, 'Aubrey', 'This is a comment'),
(5, 5, 1, 'Aubrey', 'This is a comment'),
(6, 6, 1, 'Aubrey', 'This is a comment'),
(7, 7, 1, 'Aubrey', 'This is a comment'),
(8, 8, 1, 'Aubrey', 'This is a comment'),
(9, 9, 1, 'Aubrey', 'This is a comment'),
(10, 10, 1, 'Aubrey', 'This is a comment'),
(11, 11, 1, 'Aubrey', 'This is a comment'),
(12, 12, 1, 'Aubrey', 'This is a comment'),
(13, 13, 1, 'Aubrey', 'This is a comment'),
(14, 14, 1, 'Aubrey', 'This is a comment'),
(15, 15, 1, 'Aubrey', 'This is a comment'),
(16, 16, 1, 'Aubrey', 'This is a comment'),
(17, 17, 1, 'Aubrey', 'This is a comment'),
(18, 18, 1, 'Aubrey', 'This is a comment'),
(19, 19, 1, 'Aubrey', 'This is a comment'),
(20, 20, 1, 'Aubrey', 'This is a comment'),
(21, 21, 1, 'Aubrey', 'This is a comment'),
(22, 22, 1, 'Aubrey', 'This is a comment'),
(23, 23, 1, 'Aubrey', 'This is a comment'),
(24, 24, 1, 'Aubrey', 'This is a comment'),
(25, 25, 1, 'Aubrey', 'This is a comment'),
(26, 26, 1, 'Aubrey', 'This is a comment'),
(27, 27, 1, 'Aubrey', 'This is a comment'),
(28, 28, 1, 'Aubrey', 'This is a comment'),
(29, 29, 1, 'Aubrey', 'This is a comment'),
(30, 30, 1, 'Aubrey', 'This is a comment'),
(31, 31, 1, 'Aubrey', 'This is a comment'),
(32, 32, 1, 'Aubrey', 'This is a comment'),
(33, 33, 1, 'Aubrey', 'This is a comment'),
(34, 34, 1, 'Aubrey', 'This is a comment'),
(35, 35, 1, 'Aubrey', 'This is a comment'),
(36, 36, 1, 'Aubrey', 'This is a comment'),
(37, 37, 1, 'Aubrey', 'This is a comment'),
(38, 38, 1, 'Aubrey', 'This is a comment'),
(39, 39, 1, 'Aubrey', 'This is a comment'),
(40, 40, 1, 'Aubrey', 'This is a comment'),
(41, 41, 1, 'Aubrey', 'This is a comment'),
(42, 42, 1, 'Aubrey', 'This is a comment'),
(43, 43, 1, 'Aubrey', 'This is a comment'),
(44, 44, 1, 'Aubrey', 'This is a comment'),
(45, 45, 1, 'Aubrey', 'This is a comment'),
(46, 46, 1, 'Aubrey', 'This is a comment'),
(47, 47, 1, 'Aubrey', 'This is a comment'),
(48, 48, 1, 'Aubrey', 'This is a comment'),
(49, 49, 1, 'Aubrey', 'This is a comment'),
(50, 50, 1, 'Aubrey', 'This is a comment'),
(51, 51, 1, 'Aubrey', 'This is a comment'),
(52, 52, 1, 'Aubrey', 'This is a comment'),
(53, 53, 1, 'Aubrey', 'This is a comment'),
(54, 54, 1, 'Aubrey', 'This is a comment'),
(55, 1, 2, 'Graham', 'This is another comment'),
(56, 2, 2, 'Graham', 'This is another comment'),
(57, 3, 2, 'Graham', 'This is another comment'),
(58, 4, 2, 'Graham', 'This is another comment'),
(59, 5, 2, 'Graham', 'This is another comment'),
(60, 6, 2, 'Graham', 'This is another comment'),
(61, 7, 2, 'Graham', 'This is another comment'),
(62, 8, 2, 'Graham', 'This is another comment'),
(63, 9, 2, 'Graham', 'This is another comment'),
(64, 10, 2, 'Graham', 'This is another comment'),
(65, 11, 2, 'Graham', 'This is another comment'),
(66, 12, 2, 'Graham', 'This is another comment'),
(67, 13, 2, 'Graham', 'This is another comment'),
(68, 14, 2, 'Graham', 'This is another comment'),
(69, 15, 2, 'Graham', 'This is another comment'),
(70, 16, 2, 'Graham', 'This is another comment'),
(71, 17, 2, 'Graham', 'This is another comment'),
(72, 18, 2, 'Graham', 'This is another comment'),
(73, 19, 2, 'Graham', 'This is another comment'),
(74, 20, 2, 'Graham', 'This is another comment'),
(75, 21, 2, 'Graham', 'This is another comment'),
(76, 22, 2, 'Graham', 'This is another comment'),
(77, 23, 2, 'Graham', 'This is another comment'),
(78, 24, 2, 'Graham', 'This is another comment'),
(79, 25, 2, 'Graham', 'This is another comment'),
(80, 26, 2, 'Graham', 'This is another comment'),
(81, 27, 2, 'Graham', 'This is another comment'),
(82, 28, 2, 'Graham', 'This is another comment'),
(83, 29, 2, 'Graham', 'This is another comment'),
(84, 30, 2, 'Graham', 'This is another comment'),
(85, 31, 2, 'Graham', 'This is another comment'),
(86, 32, 2, 'Graham', 'This is another comment'),
(87, 33, 2, 'Graham', 'This is another comment'),
(88, 34, 2, 'Graham', 'This is another comment'),
(89, 35, 2, 'Graham', 'This is another comment'),
(90, 36, 2, 'Graham', 'This is another comment'),
(91, 37, 2, 'Graham', 'This is another comment'),
(92, 38, 2, 'Graham', 'This is another comment'),
(93, 39, 2, 'Graham', 'This is another comment'),
(94, 40, 2, 'Graham', 'This is another comment'),
(95, 41, 2, 'Graham', 'This is another comment'),
(96, 42, 2, 'Graham', 'This is another comment'),
(97, 43, 2, 'Graham', 'This is another comment'),
(98, 44, 2, 'Graham', 'This is another comment'),
(99, 45, 2, 'Graham', 'This is another comment'),
(100, 46, 2, 'Graham', 'This is another comment'),
(101, 47, 2, 'Graham', 'This is another comment'),
(102, 48, 2, 'Graham', 'This is another comment'),
(103, 49, 2, 'Graham', 'This is another comment'),
(104, 50, 2, 'Graham', 'This is another comment'),
(105, 51, 2, 'Graham', 'This is another comment'),
(106, 52, 2, 'Graham', 'This is another comment'),
(107, 53, 2, 'Graham', 'This is another comment'),
(108, 54, 2, 'Graham', 'This is another comment');

-- --------------------------------------------------------

--
-- Table structure for table `my_library`
--

CREATE TABLE `my_library` (
  `id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `my_library`
--

INSERT INTO `my_library` (`id`, `book_id`, `user_id`) VALUES
(1, 3, 1),
(2, 4, 1),
(3, 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `method` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `book_id`, `method`, `status`) VALUES
(1, 1, 3, 1, 2),
(2, 1, 4, 0, 1),
(3, 1, 5, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `screenshots`
--

CREATE TABLE `screenshots` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `book_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `screenshots`
--

INSERT INTO `screenshots` (`id`, `name`, `book_id`) VALUES
(1, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 1),
(2, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 2),
(3, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 3),
(4, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 4),
(5, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 5),
(6, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 6),
(7, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 7),
(8, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 8),
(9, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 9),
(10, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 10),
(11, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 11),
(12, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 12),
(13, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 13),
(14, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 14),
(15, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 15),
(16, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 16),
(17, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 17),
(18, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 18),
(19, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 19),
(20, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 20),
(21, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 21),
(22, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 22),
(23, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 23),
(24, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 24),
(25, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 25),
(26, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 26),
(27, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 27),
(28, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 28),
(29, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 29),
(30, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 30),
(31, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 31),
(32, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 32),
(33, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 33),
(34, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 34),
(35, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 35),
(36, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 36),
(37, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 37),
(38, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 38),
(39, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 39),
(40, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 40),
(41, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 41),
(42, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 42),
(43, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 43),
(44, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 44),
(45, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 45),
(46, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 46),
(47, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 47),
(48, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 48),
(49, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 49),
(50, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 50),
(51, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 51),
(52, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 52),
(53, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 53),
(54, 'https://orig00.deviantart.net/9da8/f/2010/332/8/5/islamic_book_cover_by_sherif_designer-d33s4kd.jpg', 54),
(55, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 1),
(56, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 2),
(57, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 3),
(58, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 4),
(59, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 5),
(60, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 6),
(61, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 7),
(62, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 8),
(63, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 9),
(64, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 10),
(65, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 11),
(66, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 12),
(67, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 13),
(68, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 14),
(69, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 15),
(70, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 16),
(71, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 17),
(72, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 18),
(73, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 19),
(74, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 20),
(75, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 21),
(76, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 22),
(77, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 23),
(78, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 24),
(79, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 25),
(80, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 26),
(81, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 27),
(82, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 28),
(83, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 29),
(84, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 30),
(85, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 31),
(86, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 32),
(87, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 33),
(88, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 34),
(89, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 35),
(90, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 36),
(91, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 37),
(92, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 38),
(93, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 39),
(94, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 40),
(95, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 41),
(96, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 42),
(97, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 43),
(98, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 44),
(99, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 45),
(100, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 46),
(101, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 47),
(102, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 48),
(103, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 49),
(104, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 50),
(105, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 51),
(106, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 52),
(107, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 53),
(108, 'http://i2.wp.com/musliminc.com/wp-content/uploads/2016/06/Muhammad.jpg', 54);

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `parent_category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `currency` int(11) NOT NULL,
  `rule` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `country`, `address`, `currency`, `rule`) VALUES
(1, 'admin', 'admin', 'admin', 'Egypt', '8 Mile', 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `my_library`
--
ALTER TABLE `my_library`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `screenshots`
--
ALTER TABLE `screenshots`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
--
-- AUTO_INCREMENT for table `my_library`
--
ALTER TABLE `my_library`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `screenshots`
--
ALTER TABLE `screenshots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
