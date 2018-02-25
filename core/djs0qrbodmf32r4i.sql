-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
-- Generation Time: Feb 25, 2018 at 11:51 AM
-- Server version: 5.7.19-log
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
-- Database: `djs0qrbodmf32r4i`
--

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `note_id` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `note_id`, `image`) VALUES
(1, 1, 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'),
(2, 1, 'https://images.pexels.com/photos/34592/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb');

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `link` text NOT NULL,
  `price` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `name`, `link`, `price`, `subject_id`, `description`, `image`) VALUES
(1, 'ver impotant lesson 1', 'public/notes/Games.pdf', 50, 1, 'very hard', 'https://images.pexels.com/photos/158771/notebook-pen-table-blank-158771.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'),
(2, 'LESSON To remember', 'http://pages.uoregon.edu/moursund/Books/Games/Games.pdf', 50, 1, 'Very gode for you to get a lesson like trhat ', 'https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'),
(3, 'not the game', 'http://pages.uoregon.edu/moursund/Books/Games/Games.pdf', 50, 1, 'Very gode for you to get a lesson like trhat ', 'https://images.pexels.com/photos/159874/notebook-pen-pencil-education-159874.jpeg?w=940&h=650&auto=compress&cs=tinysrgb');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `note_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `note_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1);

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `university_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `university_id`) VALUES
(1, 'math', 1),
(2, 'mechanics', 1),
(3, 'mechanics', 1),
(4, 'mechanics', 1),
(5, 'mechanics', 1),
(6, 'mechanics', 1),
(7, 'mechanics', 1),
(8, 'mechanics', 1),
(9, 'mechanics', 1),
(10, 'mechanics', 1),
(11, 'mechanics', 1),
(12, 'mechanics', 1),
(13, 'mechanics', 1),
(14, 'mechanics', 1),
(15, 'mechanics', 1);

-- --------------------------------------------------------

--
-- Table structure for table `universities`
--

CREATE TABLE `universities` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `universities`
--

INSERT INTO `universities` (`id`, `name`, `image`) VALUES
(1, 'university 1 ', 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'),
(2, 'university 2', 'https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'),
(3, 'university 2', 'https://images.pexels.com/photos/220351/pexels-photo-220351.jpeg?w=940&h=650&auto=compress&cs=tinysrgb');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `universities`
--
ALTER TABLE `universities`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `universities`
--
ALTER TABLE `universities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
