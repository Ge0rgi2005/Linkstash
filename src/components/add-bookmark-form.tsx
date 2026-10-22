"use client";

import { useActionState, useEffect, useRef } from "react";
import { addBookmark, type FormState } from "@/app/actions";

const initial: FormState = {};

export default function AddBookmarkForm() {
  const [state, formAction, pending] = useActionState(addBookmark, initial);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state]);

  const field =
    "rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/30";

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-3">
      <input name="title" placeholder="Title" className={field} required />
      <input
        name="url"
        placeholder="https://example.com"
        className={field}
        required
      />
      <button
        disabled={pending}
        className="rounded-lg bg-teal-800 px-4 py-2 font-medium text-white hover:bg-teal-900 disabled:opacity-50"
      >
        {pending ? "Saving…" : "Save link"}
      </button>
      {state.error && (
        <p role="alert" className="text-sm text-red-700">
          {state.error}
        </p>
      )}
    </form>
  );
}
