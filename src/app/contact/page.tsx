export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Contact / Newsletter</h1>
      <p className="max-w-2xl text-neutral-700">
        Collect emails for promos and newsletters using a free HubSpot embedded form. Create a form in HubSpot, copy the
        embed snippet, and paste it below.
      </p>

      <div className="rounded-2xl border p-6">
        <div className="text-sm font-semibold">Paste HubSpot form embed here</div>
        <p className="mt-1 text-sm text-neutral-600">
          HubSpot → Forms → Create form → Embed → Copy code.
        </p>

        {/* Paste HubSpot embed script here */}
        <div className="mt-4 rounded-xl border bg-neutral-50 p-4 text-sm text-neutral-700">
          <code>&lt;!-- HubSpot embed goes here --&gt;</code>
        </div>
      </div>
    </div>
  );
}
