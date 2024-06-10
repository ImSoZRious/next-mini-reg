CREATE TABLE IF NOT EXISTS "reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"courseNo" varchar(256) NOT NULL,
	"content" text NOT NULL
);
