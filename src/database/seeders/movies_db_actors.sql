-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: movies_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actors`
--

DROP TABLE IF EXISTS `actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `rating` decimal(3,1) DEFAULT NULL,
  `favorite_movie_id` int(10) unsigned DEFAULT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `actors_favorite_movie_id_foreign` (`favorite_movie_id`),
  CONSTRAINT `actors_favorite_movie_id_foreign` FOREIGN KEY (`favorite_movie_id`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors`
--

LOCK TABLES `actors` WRITE;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
INSERT INTO `actors` VALUES (1,NULL,NULL,'Sam','Worthington',7.5,1,NULL),(2,NULL,NULL,'Zoe','Saldana',5.5,2,NULL),(3,NULL,NULL,'Sigourney','Weaver',9.7,NULL,NULL),(4,NULL,NULL,'Leonardo','Di Caprio',3.5,4,NULL),(5,NULL,NULL,'Kate','Winslet',1.5,5,NULL),(6,NULL,NULL,'Billy','Zane',7.5,6,NULL),(7,NULL,NULL,'Mark','Hamill',6.5,7,NULL),(8,NULL,NULL,'Harrison','Ford',7.5,8,NULL),(9,NULL,NULL,'Carrie','Fisher',7.5,9,NULL),(10,NULL,NULL,'Sam','Neill',2.5,10,NULL),(11,NULL,NULL,'Laura','Dern',7.5,11,NULL),(12,NULL,NULL,'Jeff','Goldblum',4.5,NULL,NULL),(13,NULL,NULL,'Daniel','Radcliffe',7.5,13,NULL),(14,NULL,NULL,'Emma','Watson',2.5,14,NULL),(15,NULL,NULL,'Rupert','Grint',6.2,15,NULL),(16,NULL,NULL,'Shia','LaBeouf',9.5,16,NULL),(17,NULL,NULL,'Rosie','Huntington-Whiteley',1.5,17,NULL),(18,NULL,NULL,'Matthew','Broderick',6.1,18,NULL),(19,NULL,NULL,'James','Earl Jones',7.5,19,NULL),(20,NULL,NULL,'Jeremy','Irons',7.2,20,NULL),(21,NULL,NULL,'Johnny','Depp',1.5,21,NULL),(22,NULL,NULL,'Helena','Bonham Carter',7.5,1,NULL),(23,NULL,NULL,'Mia','Wasikowska',7.5,2,NULL),(24,NULL,NULL,'Albert','Brooks',2.5,3,NULL),(25,NULL,NULL,'Ellen','DeGeneres',2.6,4,NULL),(26,NULL,NULL,'Alexander','Gould',7.5,5,NULL),(27,NULL,NULL,'Tom','Hanks',4.4,6,NULL),(28,NULL,NULL,'Tim','Allen',7.5,7,NULL),(29,NULL,NULL,'Sean','Penn',9.2,8,NULL),(30,NULL,NULL,'Adam','Sandler',3.1,9,NULL),(31,NULL,NULL,'Renee','Zellweger',9.5,10,NULL),(32,NULL,NULL,'Emilia','Clarke',8.2,11,NULL),(33,NULL,NULL,'Peter','Dinklage',2.3,12,NULL),(34,NULL,NULL,'Kit','Harington',2.4,NULL,NULL),(35,NULL,NULL,'Jared','Padalecki',2.8,14,NULL),(36,NULL,NULL,'Jensen','Ackles',5.5,15,NULL),(37,NULL,NULL,'Jim','Beaver',2.6,16,NULL),(38,NULL,NULL,'Andrew','Lincoln',3.3,17,NULL),(39,NULL,NULL,'Jon','Bernthal',2.9,NULL,NULL),(40,NULL,NULL,'Sarah','Callies',2.4,19,NULL),(41,NULL,NULL,'Jim','Caviezel',1.9,20,NULL),(42,NULL,NULL,'Taraji','Henson',5.9,21,NULL),(43,NULL,NULL,'Kevin','Chapman',2.9,1,NULL),(44,NULL,NULL,'Johnny','Galecki',2.3,2,NULL),(45,NULL,NULL,'Jim','Parsons',6.9,3,NULL),(46,NULL,NULL,'Kaley','Cuoco',2.3,4,NULL),(47,NULL,NULL,'Bryan','Cranston',7.9,NULL,NULL),(48,NULL,NULL,'Aaron','Paul',5.9,6,NULL),(49,NULL,NULL,'Anna','Gunn',3.1,7,NULL);
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-11  8:26:32
