"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl p-8">
      <p className="mb-2">Something went wrong loading your links.</p>
      <button onClick={reset} className="underline">
        Try again
      </button>
    </div>
  );
}
