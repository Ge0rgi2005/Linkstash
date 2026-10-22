"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/db";
import { bookmarks } from "@/db/schema";

const BookmarkSchema = z.object({
  title: z.string().trim().min(1, "Enter a title.").max(100, "Title is too long (100 characters max)."),
  url: z.string().trim().url("Enter a full link, starting with https://"),
});

export type FormState = { error?: string; success?: boolean };

export async function addBookmark(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = BookmarkSchema.safeParse({
    title: formData.get("title"),
    url: formData.get("url"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  try {
    await db.insert(bookmarks).values(parsed.data);
  } catch (e) {
    console.error(e);
    return { error: "Couldn't save the link. Check your database connection." };
  }

  revalidatePath("/");
  return { success: true };
}

export async function deleteBookmark(id: number) {
  await db.delete(bookmarks).where(eq(bookmarks.id, id));
  revalidatePath("/");
}
