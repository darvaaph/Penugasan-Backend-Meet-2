CREATE TABLE `kategori` (
	`id` text PRIMARY KEY NOT NULL,
	`nama_kategori` text NOT NULL,
	`created_at` text
);
--> statement-breakpoint
CREATE TABLE `menu` (
	`id` text PRIMARY KEY NOT NULL,
	`kategori_id` text NOT NULL,
	`nama_menu` text NOT NULL,
	`harga` integer NOT NULL,
	`stok` integer DEFAULT 0 NOT NULL,
	`created_at` text,
	FOREIGN KEY (`kategori_id`) REFERENCES `kategori`(`id`) ON UPDATE no action ON DELETE no action
);
