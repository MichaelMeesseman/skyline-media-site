export const metadata = { title: "Blog" };

export default function BlogIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="max-w-2xl text-neutral-700">
        Posts about video lead generation, neighborhood spotlights, and listing marketing. (Next: we’ll wire this to /content/blog.)
      </p>
      <div className="rounded-2xl border p-6 text-sm text-neutral-700">
        To add posts: create files in <strong>content/blog</strong> and we’ll generate pages from them.
      </div>
    </div>
  );
}
