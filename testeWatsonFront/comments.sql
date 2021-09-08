CREATE TABLE `comments_table` (
  `id` int(11) NOT NULL,
  `comentario` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `comments_table` (`id`, `comentario`) VALUES
(1, 'Esse é um comentario de teste'),
(2, 'Banana Bacana');

ALTER TABLE `comments_table`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `comments_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;