export const metadata = { title: "Portfolio" };

export default function PortfolioIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Portfolio</h1>
      <p className="max-w-2xl text-neutral-700">
        Shoots and case studies. (Next: we’ll wire this to /content/portfolio so you can add pages by dropping a file.)
      </p>
      <div className="rounded-2xl border p-6 text-sm text-neutral-700">
        To add shoots: create files in <strong>content/portfolio</strong> and we’ll generate pages from them.
      </div>
    </div>
  );
}
