import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Skyline Media | Nationwide Real Estate Media",
    template: "%s | Skyline Media",
  },
  description:
    "Nationwide real estate photography, video, drone, floor plans, and Zillow-ready deliverables. Consistent quality across markets.",
  metadataBase: new URL("https://skylinemediapro.com"),
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm text-neutral-700 hover:text-neutral-900 hover:underline">
      {children}
    </a>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900">
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-4">
            <a href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Skyline Media" width={36} height={36} priority />
              <div className="leading-tight">
                <div className="font-semibold tracking-tight">Skyline Media</div>
                <div className="text-xs text-neutral-600">Nationwide real estate media</div>
              </div>
            </a>

            <nav className="hidden items-center gap-5 md:flex">
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/zillow-showcase">Zillow Showcase</NavLink>
              <NavLink href="/locations">Locations</NavLink>
              <NavLink href="/portfolio">Portfolio</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <a href="/book" className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white">
                Book
              </a>
            </nav>

            <a href="/book" className="md:hidden rounded-md bg-black px-4 py-2 text-sm font-semibold text-white">
              Book
            </a>
          </div>
        </header>

        <main className="mx-auto max-w-6xl p-4">{children}</main>

        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl p-6 text-sm text-neutral-600">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <span>© {new Date().getFullYear()} Skyline Media. All rights reserved.</span>
              <span className="text-xs">Built for speed on Vercel.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
