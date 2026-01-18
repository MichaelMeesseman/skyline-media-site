export const metadata = { title: "Book" };

// TODO: Replace with your public Aryeo order link (NOT the admin dashboard URL)
const ARYEO_PUBLIC_ORDER_URL = "https://skyline-media-2.aryeo.com/order-forms/019b9451-e260-7189-9042-ce42cdbac56d
";

export default function BookPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Book a Shoot</h1>
      <p className="max-w-2xl text-neutral-700">
        Use our order system to select services, schedule, and manage delivery. If the link below asks you to sign in,
        you pasted an admin link — replace it with the public order link from Aryeo.
      </p>

      <a
        href={ARYEO_PUBLIC_ORDER_URL}
        className="inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
        target="_blank"
        rel="noreferrer"
      >
        Open Order Form
      </a>

      <div className="rounded-2xl border p-6 text-sm text-neutral-700">
        <div className="font-semibold">Where to find your public Aryeo order link</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Log into Aryeo</li>
          <li>Find “Order Form / Booking Page / Public Link” in settings</li>
          <li>Copy the public URL and replace ARYEO_PUBLIC_ORDER_URL in this file</li>
        </ol>
      </div>
    </div>
  );
}
