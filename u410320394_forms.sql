-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 21, 2022 at 01:23 PM
-- Server version: 10.5.12-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u410320394_forms`
--

-- --------------------------------------------------------

--
-- Table structure for table `porter`
--

CREATE TABLE `porter` (
  `id` int(11) NOT NULL,
  `uid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_address1` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_code1` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `work_sought` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dob1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ni_number` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel1` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eligible_uk` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `permit_expiry` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passport` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passport_expiry` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account_number` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_contact_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_contact_relation` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_contact_number` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_contact_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `crime` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `crime_detail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign1` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diabetes` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `epilepsy` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blackouts` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discomfort` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `moving` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `looking` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `outdoor` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enclosed1` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `head_height` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eyesight` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lifting` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accident` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `back` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `feet` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hernia` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bp` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `heart` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hearing` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dizziness` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `drugs` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alcohol` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date2` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_address2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `report_to1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_time1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_role2` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hourly_rate2` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dress1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `medical2` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pregnant2` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_name1` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_number1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_address1` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign3` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date3` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name3` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address3` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel3` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_date` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign4` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date4` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name5` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agency1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign5` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date5` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trainer_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trainer_sign` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `publicareacleaner`
--

CREATE TABLE `publicareacleaner` (
  `id` int(11) NOT NULL,
  `uid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` int(11) NOT NULL,
  `first_name1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_address1` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_code1` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `work_sought` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_birth` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ni_number1` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eligible_uk` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `permit_expiry` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passport` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passport_expiry` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_code` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account_number` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_contact_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_contact_relation` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_contact_number` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_contact_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `crime` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `crime_detail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diabetes` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `epilepsy` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blackouts` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discomfort` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `moving` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `looking` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `outdoor` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `enclosed1` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `head_height` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `eyesight` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `lifting` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `accident` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `back` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `feet` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `hernia` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `bp` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `heart` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `hearing` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `dizziness` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `drugs` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `alcohol` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `sign2` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date2` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone2` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_address2` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel2` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `report_to1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_time1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_role2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hourly_rate2` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dress1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'BLACK POLO SHIRT, BLACK TROUSER, BLCAK SHOES',
  `medical1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pregnant` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_name1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_number1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_address1` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign3` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date3` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name3` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address3` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel3` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_date` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign4` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date4` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name5` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agency1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign5` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date5` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trainer_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trainer_sign` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sia_door_supervisor`
--

CREATE TABLE `sia_door_supervisor` (
  `id` int(11) NOT NULL,
  `uid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_address` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal_code` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `region` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `marital_status` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_birth` date NOT NULL,
  `place_birth` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_birth` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sia_license` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sia_badge_number` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sia_badge_expiry` date NOT NULL,
  `bank_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank_account_number` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank_statement_date` date NOT NULL,
  `valid_passport` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uk_full_time` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brp` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `criminal_convictions` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `international_student` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `own_vehicle` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `driving_license` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `driving_license_number` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `driving_endorsements` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kin_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kin_phone` int(20) NOT NULL,
  `kin_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kin_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kin_relationship` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `university_address` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `university_start_date` date NOT NULL,
  `university_finish_date` date NOT NULL,
  `college_address` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `college_start_date` date NOT NULL,
  `college_finish_date` date NOT NULL,
  `school_address` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `school_start_date` date NOT NULL,
  `school_finish_date` date NOT NULL,
  `changed_nationality` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `changed_nationality_detail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `changed_surname` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `changed_surname_detail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `current_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `current_address_date` date NOT NULL,
  `p1_full_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p1_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p1_phone` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p1_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p1_occupation` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p1_relationship` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p1_period` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p2_full_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p2_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p2_phone` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p2_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p2_occupation` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p2_relationship` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p2_period` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eligible_uk` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uk_document` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_eligible` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_private` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_confirm` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_understand` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_print` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_date` date NOT NULL,
  `ccj` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ccj_detail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iva` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iva_detail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bankrupt` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bankrupt_detail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diabetes` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `epilepsy` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blackouts` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discomfort` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `moving` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `looking` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `outdoor` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enclosed1` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `head_height` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eyesight` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lifting` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accident` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `back` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `feet` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hernia` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bp` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `heart` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hearing` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dizziness` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `drugs` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alcohol` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hr_name1` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hr_name2` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hr_date` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_passport` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_picture` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_national_insurance_letter` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_proof_address` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_brp1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_brp2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_badge1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_badge2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `declaration1` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sia_door_supervisor`
--

INSERT INTO `sia_door_supervisor` (`id`, `uid`, `first_name`, `last_name`, `home_address`, `postal_code`, `region`, `city`, `phone`, `email`, `gender`, `marital_status`, `date_birth`, `place_birth`, `country_birth`, `sia_license`, `sia_badge_number`, `sia_badge_expiry`, `bank_name`, `bank_account_number`, `sort_code`, `bank_statement_date`, `valid_passport`, `uk_full_time`, `brp`, `criminal_convictions`, `international_student`, `own_vehicle`, `driving_license`, `driving_license_number`, `driving_endorsements`, `kin_name`, `kin_phone`, `kin_email`, `kin_address`, `kin_relationship`, `university_address`, `university_start_date`, `university_finish_date`, `college_address`, `college_start_date`, `college_finish_date`, `school_address`, `school_start_date`, `school_finish_date`, `changed_nationality`, `changed_nationality_detail`, `changed_surname`, `changed_surname_detail`, `current_address`, `current_address_date`, `p1_full_name`, `p1_address`, `p1_phone`, `p1_email`, `p1_occupation`, `p1_relationship`, `p1_period`, `p2_full_name`, `p2_address`, `p2_phone`, `p2_email`, `p2_occupation`, `p2_relationship`, `p2_period`, `eligible_uk`, `uk_document`, `rehab_eligible`, `rehab_private`, `rehab_confirm`, `rehab_understand`, `rehab_name`, `rehab_print`, `rehab_date`, `ccj`, `ccj_detail`, `iva`, `iva_detail`, `bankrupt`, `bankrupt_detail`, `diabetes`, `epilepsy`, `blackouts`, `discomfort`, `moving`, `looking`, `outdoor`, `enclosed1`, `head_height`, `eyesight`, `lifting`, `accident`, `back`, `feet`, `hernia`, `bp`, `heart`, `hearing`, `dizziness`, `drugs`, `alcohol`, `hr_name1`, `hr_name2`, `hr_date`, `file_passport`, `file_picture`, `file_national_insurance_letter`, `file_proof_address`, `file_brp1`, `file_brp2`, `file_badge1`, `file_badge2`, `declaration1`, `created`) VALUES
(4, '0', 'Gohar', 'ul Islam', 'A123 BLOCK A NORTH PAKISTAN', '76700', 'SINDH', 'KARACHI', '12345', 'cc@gmail.com', 'male', 'married', '0000-00-00', 'KARACHI', 'bangladesh', '123', '123', '0000-00-00', 'abc', '123', '123', '0000-00-00', 'true', 'true', 'true', 'true', 'true', 'true', 'true', '1345313', 'true', 'MUZZAMMIL AHMED', 2147483647, 'DUMMY@AOL.COM', 'A213 BLOCK J NORTH NAZIMABAD KARACHI', 'Friend', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(46, '0', 'Gohar', 'ul Islam', 'A123 BLOCK A NORTH NAZIMABAD KARACHI 76700 SINDH PAKISTAN', '76700', 'SINDH', 'KARACHI', '+923350244179', 'gg@bb.com', 'male', 'married', '2022-09-01', 'KARACHI', 'pakistan', '1234567890', '1234567890', '0000-00-00', 'abc', 'abc', '12345', '0000-00-00', 'true', 'false', 'true', 'false', 'true', 'false', 'true', '1345313', 'true', 'MUZZAMMIL AHMED', 2147483647, 'DUMMY@AOL.COM', 'A213 BLOCK J NORTH NAZIMABAD KARACHI', 'Friend', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(47, '0', 'Gohar', 'ul Islam', 'A123 BLOCK A NORTH NAZIMABAD KARACHI 76700 SINDH PAKISTAN', '76700', 'SINDH', 'KARACHI', '+923350244179', 'gg@bb.com', 'male', 'married', '2022-09-01', 'KARACHI', 'pakistan', '123', '123', '2022-08-28', 'abc', '123', '12345', '2022-09-28', 'true', 'true', 'true', 'true', 'true', 'true', 'true', '1345313', 'true', 'MUZZAMMIL AHMED', 2147483647, 'DUMMY@AOL.COM', 'A213 BLOCK J NORTH NAZIMABAD KARACHI', 'Friend', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(48, '0', 'Gohar', 'ul Islam', 'A123 BLOCK A NORTH PAKISTAN', '76700', 'SINDH', 'KARACHI', '+923350244179', 'gg@bb.com', 'male', 'married', '2022-09-28', 'KARACHI', 'pakistan', '123', '123', '2022-09-01', 'abc', 'abc', '12345', '2022-10-01', 'true', 'false', 'true', 'false', 'true', 'false', 'true', '1345313', 'false', 'MUZZAMMIL AHMED', 2147483647, 'dummy@aol.com', 'A213 BLOCK J NORTH NAZIMABAD KARACHI', 'Friend', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(49, '0', 'Gohar', '', '', '', '', '', '', '', '', '', '1970-01-01', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(50, '0', 'Gohar', '', '', '', '', '', '', '', '', '', '2022-09-01', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(51, '0', 'Gohar', '', '', '', '', '', '', '', '', '', '1970-01-01', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(52, '0', 'Gohar', '', '', '', '', '', '', '', '', '', '1970-01-01', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(53, 'sia-627969', 'Gohar', 'ul Islam', '', '', '', '', '', '', '', '', '1970-01-01', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(54, 'sia-147459', 'Gohar', 'ul Islam', '', '', '', '', '', '', '', '', '1970-01-01', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(55, 'sia-128523', '', '', '', '', '', '', '', '', '', '', '1970-01-01', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(56, 'sia-751498', '', '', '', '', '', '', '', '', '', '', '1970-01-01', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(57, 'sia-958565', '', '', '', '', '', '', '', '', '', '', '1970-01-01', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(58, 'sia-885652', 'Gohar', 'ul Islam', '', '', '', '', '', '', '', '', '1970-01-01', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(59, 'sia-768919', '', '', '', '', '', '', '', '', '', '', '1970-01-01', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(60, 'sia-984401', '', '', '', '', '', '', '', '', '', '', '1970-01-01', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(61, 'sia-737779', '', '', '', '', '', '', '', '', '', '', '2022-10-08', '', '', '', '', '2022-10-08', '', '', '', '2022-10-08', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(62, 'sia-483390', '', '', '', '', '', '', '', '', '', '', '2022-10-08', '', '', '', '', '2022-10-08', '', '', '', '2022-10-08', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(63, 'sia-835389', '', '', '', '', '', '', '', '', '', '', '2022-10-08', '', '', '', '', '0000-00-00', '', '', '', '0000-00-00', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '', 'false', '', 0, '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00'),
(64, 'sia-726833', 'Gohar', 'ul Islam', 'A123 BLOCK A NORTH NAZIMABAD KARACHI 76700 SINDH PAKISTAN', '76700', 'SINDH', 'KARACHI', '+923350244179', 'gg@bb.com', 'male', 'married', '2022-01-01', 'KARACHI', 'pakistan', '1234567890', '1234567890', '2022-10-10', 'abc', '123456789785412', '123', '2022-10-10', 'true', 'true', 'true', 'true', 'true', 'true', 'true', '1234567890', 'true', 'MUZZAMMIL AHMED', 2147483647, 'DUMMY@AOL.COM', 'A213 BLOCK J NORTH NAZIMABAD KARACHI', 'Friend', 'NED University of Technology', '0000-00-00', '0000-00-00', 'Govt. College for Nazimabad Karachi', '0000-00-00', '0000-00-00', 'Little Folks Secondary School', '0000-00-00', '0000-00-00', 'true', 'Z100 Block A North Nazimabad Karachi', 'true', 'Z100 Block A North Nazimabad Karachi', 'Z100 Block A North Nazimabad Karachi', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'true', 'Visa', 'true', 'Z100 Block A North Nazimabad Karachi', 'true', 'true', '', 'aaa', '0000-00-00', 'true', 'Z100 Block A North Nazimabad Karachi', 'true', 'Z100 Block A North Nazimabad Karachi', 'true', 'Z100 Block A North Nazimabad Karachi', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'irfan', 'irfan', 'Mon Oct 10 2022 00:00:00 GMT+0500 (Pakistan Standard Time)', '849023-img.png', '324865-img.png', '407713-img.png', '231353-img.png', '653976-img.png', '261827-img.png', '728717-img.png', '897206-img.png', '', '0000-00-00 00:00:00'),
(65, 'sia-728917', 'Gohar', 'ul Islam', 'A123 BLOCK A NORTH NAZIMABAD KARACHI 76700 SINDH PAKISTAN', '76700', 'SINDH', 'KARACHI', '+923350244179', 'gg@bb.com', 'male', 'married', '1970-01-01', 'KARACHI', 'bangladesh', '1234567890', '1234567890', '2022-11-19', 'abc', '123456789785412', '123', '2022-11-19', 'true', 'false', 'true', 'false', 'true', 'false', 'true', '1345313', 'true', 'MUZZAMMIL AHMED', 2147483647, 'DUMMY@AOL.COM', 'A213 BLOCK J NORTH NAZIMABAD KARACHI', 'Friend', 'NED University of Technology', '0000-00-00', '0000-00-00', 'Govt. College for Nazimabad Karachi', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', 'true', 'I love this country.', 'true', 'I love this surname', 'Z100 Block A North Nazimabad Karachi', '0000-00-00', 'aaa', 'Z100 Block A North Nazimabad Karachi', '+923001233458', 'zzz@iii.com', 'pilot', 'friend', '2 years', 'bbb', 'Z100 Block A North Nazimabad Karachi', '987654321', 'zzz@uuu.com', 'painter', 'friend', '2 years', 'true', 'Passport', 'false', 'Z100 Block A North Nazimabad Karachi', 'true', 'true', 'aaa', 'aaa', '0000-00-00', 'true', 'Z100 Block A North Nazimabad Karachi', 'true', 'Z100 Block A North Nazimabad Karachi', 'true', 'Z100 Block A North Nazimabad Karachi', 'false', 'false', 'false', 'false', 'false', 'false', 'true', 'true', 'true', 'false', 'true', 'true', 'true', 'false', 'true', 'true', 'true', 'false', 'true', 'true', 'true', 'irfan', 'irfan', 'Mon Oct 10 2022 05:00:00 GMT+0500 (Pakistan Standard Time)', '959471-redux1.jpg', '633893-redux1.jpg', '502860-redux1.jpg', '953855-redux1.jpg', '836642-redux1.jpg', '371345-redux1.jpg', '179111-redux1.jpg', '3617-redux1.jpg', 'true', '0000-00-00 00:00:00'),
(66, 'sia-733835', 'Gohar', 'ul Islam', 'A123 BLOCK A NORTH NAZIMABAD KARACHI 76700 SINDH PAKISTAN', '76700', 'SINDH', 'KARACHI', '+923350244179', 'gg@bb.com', 'male', 'married', '1970-01-01', 'KARACHI', 'bangladesh', '1234567890', '1234567890', '2022-11-19', 'abc', '123456789785412', '123', '2022-11-19', 'true', 'false', 'true', 'false', 'true', 'false', 'true', '1345313', 'true', 'MUZZAMMIL AHMED', 2147483647, 'DUMMY@AOL.COM', 'A213 BLOCK J NORTH NAZIMABAD KARACHI', 'Friend', 'NED University of Technology', '0000-00-00', '0000-00-00', 'Govt. College for Nazimabad Karachi', '0000-00-00', '0000-00-00', '', '0000-00-00', '0000-00-00', 'true', 'I love this country.', 'true', 'I love this surname', 'Z100 Block A North Nazimabad Karachi', '0000-00-00', 'aaa', 'Z100 Block A North Nazimabad Karachi', '+923001233458', 'zzz@iii.com', 'pilot', 'friend', '2 years', 'bbb', 'Z100 Block A North Nazimabad Karachi', '987654321', 'zzz@uuu.com', 'painter', 'friend', '2 years', 'true', 'Passport', 'false', 'Z100 Block A North Nazimabad Karachi', 'true', 'true', 'aaa', 'aaa', '0000-00-00', 'true', 'Z100 Block A North Nazimabad Karachi', 'true', 'Z100 Block A North Nazimabad Karachi', 'true', 'Z100 Block A North Nazimabad Karachi', 'false', 'false', 'false', 'false', 'false', 'false', 'true', 'true', 'true', 'false', 'true', 'true', 'true', 'false', 'true', 'true', 'true', 'false', 'true', 'true', 'true', 'irfan', 'irfan', 'Mon Oct 10 2022 05:00:00 GMT+0500 (Pakistan Standard Time)', '347530-redux1.jpg', '349613-redux1.jpg', '762666-redux1.jpg', '63886-redux1.jpg', '630008-redux1.jpg', '792641-redux1.jpg', '569108-redux1.jpg', '118081-redux1.jpg', 'true', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sia_door_supervisor_address_history`
--

CREATE TABLE `sia_door_supervisor_address_history` (
  `id` int(11) NOT NULL,
  `uid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `previous_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_moved_in` date NOT NULL,
  `date_leaved_out` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sia_door_supervisor_address_history`
--

INSERT INTO `sia_door_supervisor_address_history` (`id`, `uid`, `previous_address`, `date_moved_in`, `date_leaved_out`) VALUES
(1, 'sia-147459', 'aaa', '2022-10-04', '2022-10-07'),
(2, 'sia-128523', '', '0000-00-00', '0000-00-00'),
(3, 'sia-751498', '', '0000-00-00', '0000-00-00'),
(4, 'sia-958565', '', '0000-00-00', '0000-00-00'),
(5, 'sia-885652', '', '0000-00-00', '0000-00-00'),
(6, 'sia-768919', '', '0000-00-00', '0000-00-00'),
(7, 'sia-984401', '', '0000-00-00', '0000-00-00'),
(8, 'sia-737779', '', '0000-00-00', '0000-00-00'),
(9, 'sia-483390', '', '0000-00-00', '0000-00-00'),
(10, 'sia-835389', '', '0000-00-00', '0000-00-00'),
(11, 'sia-513622', 'Z100 Block A North Nazimabad Karachi', '2022-10-09', '2022-10-09'),
(12, 'sia-929446', 'Z100 Block A North Nazimabad Karachi', '2022-10-09', '2022-10-09'),
(13, 'sia-656738', 'enclosed', '2022-10-09', '2022-10-09'),
(14, 'sia-232894', 'enclosed', '2022-10-09', '2022-10-09'),
(15, 'sia-478423', 'enclosed', '2022-10-09', '2022-10-09'),
(16, 'sia-43371', 'Z100 Block A North Nazimabad Karachi', '2022-10-09', '2022-10-09'),
(17, 'sia-965140', 'Z100 Block A North Nazimabad Karachi', '2022-10-09', '2022-10-09'),
(18, 'sia-757369', 'Z100 Block A North Nazimabad Karachi', '2022-10-09', '2022-10-09'),
(19, 'sia-726833', 'Z100 Block A North Nazimabad Karachi', '2022-10-09', '2022-10-09'),
(20, 'sia-728917', 'Z100 Block A North Nazimabad Karachi', '2022-10-10', '2022-10-10'),
(21, 'sia-733835', 'Z100 Block A North Nazimabad Karachi', '2022-10-10', '2022-10-10');

-- --------------------------------------------------------

--
-- Table structure for table `sia_door_supervisor_employment_history`
--

CREATE TABLE `sia_door_supervisor_employment_history` (
  `id` bigint(20) NOT NULL,
  `uid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_started` date NOT NULL,
  `job_finished` date NOT NULL,
  `address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reason_leaving` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_employer` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sia_door_supervisor_employment_history`
--

INSERT INTO `sia_door_supervisor_employment_history` (`id`, `uid`, `company_name`, `job_title`, `job_started`, `job_finished`, `address`, `phone`, `email`, `reason_leaving`, `contact_employer`) VALUES
(16, 'sia-428116', 'dotoxygen', 'senior', '2022-09-24', '2022-09-24', 'aaa', '+111222333', 'aa@bb.com', 'Abc.', '1'),
(17, 'sia-428116', 'livewire group', 'senior', '2022-09-24', '2022-09-30', 'aaa', '+111222333', 'aa@bb.com', 'Abc.', '1'),
(18, 'sia-755681', 'dotoxygen', 'senior', '2022-09-24', '2022-09-24', 'aaa', '+111222333', 'aa@bb.com', 'Abc.', '1'),
(19, 'sia-755681', 'livewire group', 'senior', '2022-09-24', '2022-09-30', 'aaa', '+111222333', 'aa@bb.com', 'Abc.', '1'),
(20, 'sia-300907', 'dotoxygen', 'senior', '2022-09-24', '2022-09-24', 'aaa', '+111222333', 'aa@bb.com', 'Abc.', '1'),
(21, 'sia-300907', 'livewire group', 'senior', '2022-09-24', '2022-09-30', 'aaa', '+111222333', 'aa@bb.com', 'Abc.', '1'),
(22, 'sia-200487', 'dotoxygen', 'senior', '2022-09-24', '2022-09-24', 'aaa', '+111222333', 'aa@bb.com', 'Abc.', '1'),
(23, 'sia-200487', 'livewire group', 'senior', '2022-09-24', '2022-09-30', 'aaa', '+111222333', 'aa@bb.com', 'Abc.', '1'),
(24, 'sia-627969', 'dotoxygen', 'senior', '2022-09-24', '2022-09-24', 'aaa', '+111222333', 'aa@bb.com', 'Abc.', '1'),
(25, 'sia-627969', 'livewire group', 'senior', '2022-09-24', '2022-09-30', 'aaa', '+111222333', 'aa@bb.com', 'Abc.', '1'),
(26, 'sia-147459', 'dotoxygen', '', '0000-00-00', '0000-00-00', 'aaa', '', '', 'Abc.', ''),
(27, 'sia-147459', 'livewire group', '', '0000-00-00', '0000-00-00', 'aaa', '', '', 'Abc.', ''),
(28, 'sia-128523', 'dotoxygen', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(29, 'sia-751498', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(30, 'sia-958565', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(31, 'sia-885652', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(32, 'sia-768919', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(33, 'sia-984401', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(34, 'sia-737779', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(35, 'sia-483390', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(36, 'sia-835389', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(37, 'sia-513622', 'dotoxygen', 'senior fe developer', '2022-09-24', '2022-09-24', 'gulshan e iqbal', '123456789', 'admin@company.com', 'low salary', '1'),
(38, 'sia-929446', 'dotoxygen', 'senior fe developer', '2022-09-24', '2022-09-24', 'gulshan e iqbal', '123456789', 'admin@company.com', 'low salary', '1'),
(39, 'sia-656738', 'dotoxygen', 'senior fe developer', '2022-09-24', '2022-09-24', 'gulshan e iqbal', '+111222333', 'admin@company.com', 'low salary', '1'),
(40, 'sia-232894', 'dotoxygen', 'senior fe developer', '2022-09-24', '2022-09-24', 'gulshan e iqbal', '+111222333', 'admin@company.com', 'low salary', '1'),
(41, 'sia-478423', 'dotoxygen', 'senior fe developer', '2022-09-24', '2022-09-24', 'gulshan e iqbal', '+111222333', 'admin@company.com', 'low salary', '1'),
(42, 'sia-43371', 'dotoxygen', 'senior fe developer', '2022-10-09', '2022-10-09', 'gulshan e iqbal', '+111222333', 'admin@company.com', 'low salary', '1'),
(43, 'sia-965140', 'dotoxygen', 'senior fe developer', '2022-10-09', '2022-10-09', 'gulshan e iqbal', '+111222333', 'admin@company.com', 'low salary', '1'),
(44, 'sia-757369', 'dotoxygen', 'senior fe developer', '2022-10-09', '2022-10-09', 'gulshan e iqbal', '+111222333', 'admin@company.com', 'low salary', '1'),
(45, 'sia-726833', 'dotoxygen', 'senior fe developer', '2022-10-09', '2022-10-09', 'gulshan e iqbal', '+111222333', 'admin@company.com', 'low salary', '1'),
(46, 'sia-295274', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(47, 'sia-545979', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(48, 'sia-829143', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(49, 'sia-313424', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(50, 'sia-276233', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(51, 'sia-747209', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(52, 'sia-568079', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(53, 'sia-770778', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(54, 'sia-42983', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(55, 'sia-392330', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(56, 'sia-768935', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(57, 'sia-816772', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(58, 'sia-728917', 'dotoxygen', 'senior', '2022-11-19', '2022-11-27', 'aaa', '+111222333', 'aa@bb.com', 'low salary', '1'),
(59, 'sia-733835', 'dotoxygen', 'senior', '2022-11-19', '2022-11-27', 'aaa', '+111222333', 'aa@bb.com', 'low salary', '1'),
(60, 'sia-627998', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(61, 'sia-469925', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(62, 'sia-255235', '', '', '0000-00-00', '0000-00-00', '', '', '', '', ''),
(63, 'sia-671470', '', '', '0000-00-00', '0000-00-00', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `sia_door_supervisor_gaps_employment`
--

CREATE TABLE `sia_door_supervisor_gaps_employment` (
  `id` int(11) NOT NULL,
  `uid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reason` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sia_door_supervisor_gaps_employment`
--

INSERT INTO `sia_door_supervisor_gaps_employment` (`id`, `uid`, `reason`, `start_date`, `end_date`) VALUES
(1, 'sia-885652', 'aaa', '2022-09-24', '2022-09-24'),
(2, 'sia-885652', 'bbb', '2022-11-04', '2022-12-02'),
(3, 'sia-768919', 'I was busy.', '2022-10-07', '2022-10-07'),
(4, 'sia-984401', 'I was busy.', '2022-10-07', '2022-10-07'),
(5, 'sia-483390', 'I was busy.', '2022-10-06', '2022-10-07'),
(6, 'sia-513622', 'I was busy.', '2022-10-09', '2022-10-09'),
(7, 'sia-929446', 'I was busy.', '2022-10-09', '2022-10-09'),
(8, 'sia-656738', 'I was busy.', '2022-10-09', '2022-10-09'),
(9, 'sia-232894', 'I was busy.', '2022-10-09', '2022-10-09'),
(10, 'sia-478423', 'I was busy.', '2022-10-09', '2022-10-09'),
(11, 'sia-43371', 'I was busy.', '2022-10-09', '2022-10-09'),
(12, 'sia-965140', 'I was busy.', '2022-10-09', '2022-10-09'),
(13, 'sia-757369', 'I was busy.', '2022-10-09', '2022-10-09'),
(14, 'sia-726833', 'I was busy.', '2022-10-09', '2022-10-09'),
(15, 'sia-728917', 'I was busy.', '2022-11-19', '2022-11-21'),
(16, 'sia-733835', 'I was busy.', '2022-11-19', '2022-11-21');

-- --------------------------------------------------------

--
-- Table structure for table `sia_door_supervisor_self_employment`
--

CREATE TABLE `sia_door_supervisor_self_employment` (
  `id` int(11) NOT NULL,
  `uid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_phone` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sia_door_supervisor_self_employment`
--

INSERT INTO `sia_door_supervisor_self_employment` (`id`, `uid`, `company_name`, `company_address`, `company_phone`, `company_email`) VALUES
(1, 'sia-147459', 'aaa', 'aaa', '123', 'aa@bb.com'),
(2, 'sia-147459', 'bbb', 'bbb', '321', 'aa@bb.com'),
(3, 'sia-128523', '', '', '', ''),
(4, 'sia-751498', '', '', '', ''),
(5, 'sia-958565', '', '', '', ''),
(6, 'sia-885652', '', '', '', ''),
(7, 'sia-768919', '', '', '', ''),
(8, 'sia-984401', '', '', '', ''),
(9, 'sia-737779', '', '', '', ''),
(10, 'sia-483390', '', '', '', ''),
(11, 'sia-835389', '', '', '', ''),
(12, 'sia-513622', 'aaa', 'aaa', '123', 'aa@bb.com'),
(13, 'sia-929446', 'aaa', 'aaa', '123', 'aa@bb.com'),
(14, 'sia-656738', 'aaa', 'aaa', '123', 'aa@bb.com'),
(15, 'sia-232894', 'aaa', 'aaa', '123', 'aa@bb.com'),
(16, 'sia-478423', 'aaa', 'aaa', '123', 'aa@bb.com'),
(17, 'sia-43371', '', '', '', ''),
(18, 'sia-965140', '', '', '', ''),
(19, 'sia-757369', '', '', '', ''),
(20, 'sia-726833', '', '', '', ''),
(21, 'sia-295274', '', '', '', ''),
(22, 'sia-545979', '', '', '', ''),
(23, 'sia-829143', '', '', '', ''),
(24, 'sia-313424', '', '', '', ''),
(25, 'sia-276233', '', '', '', ''),
(26, 'sia-747209', '', '', '', ''),
(27, 'sia-568079', '', '', '', ''),
(28, 'sia-770778', '', '', '', ''),
(29, 'sia-42983', '', '', '', ''),
(30, 'sia-392330', '', '', '', ''),
(31, 'sia-768935', '', '', '', ''),
(32, 'sia-816772', '', '', '', ''),
(33, 'sia-728917', 'aaa', 'aaa', '123', 'aa@bb.com'),
(34, 'sia-733835', 'aaa', 'aaa', '123', 'aa@bb.com'),
(35, 'sia-627998', '', '', '', ''),
(36, 'sia-469925', '', '', '', ''),
(37, 'sia-255235', '', '', '', ''),
(38, 'sia-671470', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uid` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pw` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uid`, `pw`, `created`) VALUES
(1, 'admin', 'admin', '2022-11-10 12:05:53');

-- --------------------------------------------------------

--
-- Table structure for table `waiter`
--

CREATE TABLE `waiter` (
  `id` int(11) NOT NULL,
  `uid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_address1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_code1` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `work_sought` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eligible_uk` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `permit_expiry` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passport` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passport_expiry` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_code` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account_number` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_contact_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_contact_relation` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_contact_number` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_contact_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `crime` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `crime_detail` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign1` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date1` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diabetes` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `epilepsy` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blackouts` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discomfort` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `moving` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `looking` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `outdoor` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enclosed1` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `head_height` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eyesight` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lifting` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accident` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `back` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `feet` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hernia` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bp` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `heart` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hearing` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dizziness` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `drugs` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alcohol` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign2` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name2` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date2` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name2` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname2` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_address2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel2` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `report_to1` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date1` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_time1` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_role2` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hourly_rate2` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dress1` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `medical1` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pregnant` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_name1` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_number1` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emergency_address1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign3` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date3` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name3` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address3` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel3` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_date` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign4` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date4` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name5` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agency1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign5` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date5` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trainer_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trainer_sign` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eligible_uk2` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `select_document` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_eligible` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_private` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_confirm` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_understand` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_name` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rehab_print` int(10) NOT NULL,
  `rehab_date` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ccj` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ccj_detail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iva` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iva_detail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bankcrupt` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bankcrupt_detail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_passport` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_picture` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_national_insurance_letter` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_proof_address` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_brp1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_brp2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_badge1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_badge2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `disclaimer_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `disclaimer_date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gdpr_name1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gdpr_department` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gdpr_date1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gdpr_date2` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gdpr_name2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gdpr_name3` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gdpr_date3` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `screening_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `screening_date_birth` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `screening_place_birth` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `approval_name1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `approval_name2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `approval_date` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agreement_name1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agreement_name2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agreement_name3` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agreement_name4` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agreement_date` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `request_name1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `request_ni_number` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `request_date1` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `request_current_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `request_previous_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `request_name2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `request_date2` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sia_door_supervisor`
--
ALTER TABLE `sia_door_supervisor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sia_door_supervisor_address_history`
--
ALTER TABLE `sia_door_supervisor_address_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sia_door_supervisor_employment_history`
--
ALTER TABLE `sia_door_supervisor_employment_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sia_door_supervisor_gaps_employment`
--
ALTER TABLE `sia_door_supervisor_gaps_employment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sia_door_supervisor_self_employment`
--
ALTER TABLE `sia_door_supervisor_self_employment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `waiter`
--
ALTER TABLE `waiter`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sia_door_supervisor`
--
ALTER TABLE `sia_door_supervisor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `sia_door_supervisor_address_history`
--
ALTER TABLE `sia_door_supervisor_address_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `sia_door_supervisor_employment_history`
--
ALTER TABLE `sia_door_supervisor_employment_history`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `sia_door_supervisor_gaps_employment`
--
ALTER TABLE `sia_door_supervisor_gaps_employment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `sia_door_supervisor_self_employment`
--
ALTER TABLE `sia_door_supervisor_self_employment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `waiter`
--
ALTER TABLE `waiter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
