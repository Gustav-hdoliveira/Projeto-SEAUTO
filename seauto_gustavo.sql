-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 19, 2024 at 07:34 PM
-- Server version: 10.6.18-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seauto_gustavo`
--

-- --------------------------------------------------------

--
-- Table structure for table `Chamada`
--

CREATE TABLE `Chamada` (
  `id_chamada` int(11) NOT NULL,
  `cpf` int(11) DEFAULT NULL,
  `id_fonte` int(11) DEFAULT NULL,
  `endereco` varchar(200) DEFAULT NULL,
  `id_tipo_servico` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Fonte_emergencia`
--

CREATE TABLE `Fonte_emergencia` (
  `id_fonte` int(11) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `telefone` varchar(12) NOT NULL,
  `id_tipo_servico` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `TipoServico`
--

CREATE TABLE `TipoServico` (
  `id_tipo_servico` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Usuario`
--

CREATE TABLE `Usuario` (
  `cpf` int(11) NOT NULL,
  `id_usuario` varchar(200) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `telefone` varchar(12) DEFAULT NULL,
  `endereco` varchar(200) DEFAULT NULL,
  `idade` int(11) DEFAULT NULL,
  `condicao_especial` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Chamada`
--
ALTER TABLE `Chamada`
  ADD PRIMARY KEY (`id_chamada`),
  ADD KEY `cpf` (`cpf`),
  ADD KEY `id_tipo_servico` (`id_tipo_servico`),
  ADD KEY `id_fonte` (`id_fonte`);

--
-- Indexes for table `Fonte_emergencia`
--
ALTER TABLE `Fonte_emergencia`
  ADD PRIMARY KEY (`id_fonte`),
  ADD KEY `id_tipo_servico` (`id_tipo_servico`);

--
-- Indexes for table `TipoServico`
--
ALTER TABLE `TipoServico`
  ADD PRIMARY KEY (`id_tipo_servico`);

--
-- Indexes for table `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`cpf`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Chamada`
--
ALTER TABLE `Chamada`
  MODIFY `id_chamada` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Fonte_emergencia`
--
ALTER TABLE `Fonte_emergencia`
  MODIFY `id_fonte` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `TipoServico`
--
ALTER TABLE `TipoServico`
  MODIFY `id_tipo_servico` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Chamada`
--
ALTER TABLE `Chamada`
  ADD CONSTRAINT `Chamada_ibfk_1` FOREIGN KEY (`cpf`) REFERENCES `Usuario` (`cpf`),
  ADD CONSTRAINT `Chamada_ibfk_2` FOREIGN KEY (`id_tipo_servico`) REFERENCES `TipoServico` (`id_tipo_servico`),
  ADD CONSTRAINT `Chamada_ibfk_3` FOREIGN KEY (`id_fonte`) REFERENCES `Fonte_emergencia` (`id_fonte`);

--
-- Constraints for table `Fonte_emergencia`
--
ALTER TABLE `Fonte_emergencia`
  ADD CONSTRAINT `Fonte_emergencia_ibfk_1` FOREIGN KEY (`id_tipo_servico`) REFERENCES `TipoServico` (`id_tipo_servico`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
