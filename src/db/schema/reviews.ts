import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  courseNo: varchar('courseNo', { length: 256 }).notNull(),
  content: text('content').notNull(),
});
