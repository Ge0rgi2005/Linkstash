import { desc } from "drizzle-orm";
import { db } from "@/db";
import { bookmarks } from "@/db/schema";

export async function getBookmarks() {
  return db.select().from(bookmarks).orderBy(desc(bookmarks.createdAt));
}
