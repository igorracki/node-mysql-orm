-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Wersja serwera:               5.7.19 - MySQL Community Server (GPL)
-- Serwer OS:                    Win64
-- HeidiSQL Wersja:              9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Zrzut struktury bazy danych nodedb
DROP DATABASE IF EXISTS `nodedb`;
CREATE DATABASE IF NOT EXISTS `nodedb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `nodedb`;

-- Zrzut struktury tabela nodedb.cars
DROP TABLE IF EXISTS `cars`;
CREATE TABLE IF NOT EXISTS `cars` (
  `id` int(11) NOT NULL,
  `make` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `engine` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Zrzucanie danych dla tabeli nodedb.cars: ~4 rows (około)
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` (`id`, `make`, `model`, `engine`) VALUES
	(1, 'opel', 'astra', 1.4),
	(2, 'opel', 'insignia', 2),
	(3, 'peugeot', '580sw', 1.6),
	(4, 'volvo', 's40', 1.6),
	(5, 'Updated at: Sat Jun 23 2018 15:21:26 GMT+0100 (GMT+01:00)', 'insertedModel', 1.8),
	(6, 'insertedMake', 'insertedModel', 1.8),
	(7, 'insertedMake', 'insertedModel', 1.8),
	(8, 'insertedMake', 'insertedModel', 1.8),
	(10, 'insertedMake', 'insertedModel', 1.8);
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
