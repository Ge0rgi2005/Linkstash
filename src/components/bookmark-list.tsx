import { deleteBookmark } from "@/app/actions";
import { getBookmarks } from "@/db/queries";

export default async function BookmarkList() {
  const items = await getBookmarks();

  if (items.length === 0) {
    return (
      <p className="mt-8 text-stone-500">
        Nothing saved yet. Add your first link above.
      </p>
    );
  }

  return (
    <ul className="mt-8 divide-y divide-stone-200">
      {items.map((b) => {
        let host = b.url;
        try {
          host = new URL(b.url).hostname.replace(/^www\./, "");
        } catch {}
        return (
          <li key={b.id} className="flex items-center justify-between gap-4 py-3">
            <div className="min-w-0">
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block truncate font-medium text-teal-800 hover:underline"
              >
                {b.title}
              </a>
              <span className="block truncate text-sm text-stone-500">{host}</span>
            </div>
            <form action={deleteBookmark.bind(null, b.id)}>
              <button className="text-sm text-stone-500 hover:text-red-700">
                Delete
              </button>
            </form>
          </li>
        );
      })}
    </ul>
  );
}
