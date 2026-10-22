import { Suspense } from "react";
import AddBookmarkForm from "@/components/add-bookmark-form";
import BookmarkList from "@/components/bookmark-list";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-6 py-14">
      <h1 className="mb-1 text-4xl font-bold tracking-tight">Linkstash</h1>
      <p className="mb-8 text-stone-600">Save links now, find them later.</p>
      <AddBookmarkForm />
      {/* Data is fetched inside Suspense, as required by Cache Components */}
      <Suspense fallback={<p className="mt-8 text-stone-500">Loading links…</p>}>
        <BookmarkList />
      </Suspense>
    </main>
  );
}
