import Script from "next/script";

export default function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Agent Inquiry</h1>
      <p className="text-neutral-700">
        Reach out for pricing, coverage, or partnership opportunities.
      </p>

      {/* HubSpot Form */}
      <Script
        src="https://js-na2.hsforms.net/forms/embed/244294065.js"
        strategy="afterInteractive"
      />

      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="d76f565c-d8db-4cef-8a44-985016260436"
        data-portal-id="244294065"
      />
    </div>
  );
}
