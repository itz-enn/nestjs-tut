-- DropForeignKey
ALTER TABLE `bookmark` DROP FOREIGN KEY `Bookmark_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Bookmark` ADD CONSTRAINT `Bookmark_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
