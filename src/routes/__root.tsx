import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Triple Find – Curated Finds in Shows, Clothes & Home" },
      {
        name: "description",
        content:
          "Discover curated products across shows, clothes, and household items. Your next find is just a click away.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔍</text></svg>",
      },
    ],
    scripts: [
      {
        src: "https://plausible.io/js/script.js",
        defer: true,
        "data-domain": "5e1181668ae4a38d426450cb4480999f.ctonew.app",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="text-6xl">🔍</span>
      <h1 className="text-2xl font-bold tracking-tight">Page not found</h1>
      <p className="text-gray-500">This page doesn't exist yet.</p>
      <Link
        to="/"
        className="rounded-full bg-amber-600 px-5 py-2 text-sm font-medium text-white hover:bg-amber-700 transition-colors"
      >
        Back to home
      </Link>
    </div>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-stone-50 text-stone-800">
        {/* Navigation */}
        <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-lg font-bold tracking-tight text-amber-700"
            >
              <span className="text-xl">✦</span>
              Triple Find
            </Link>
            <div className="flex items-center gap-1 sm:gap-2">
              <Link
                to="/shows"
                className="rounded-full px-3 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:bg-amber-50 hover:text-amber-700"
                activeProps={{ className: "bg-amber-100 text-amber-800" }}
              >
                Shows
              </Link>
              <Link
                to="/clothes"
                className="rounded-full px-3 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:bg-rose-50 hover:text-rose-700"
                activeProps={{ className: "bg-rose-100 text-rose-800" }}
              >
                Clothes
              </Link>
              <Link
                to="/household"
                className="rounded-full px-3 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                activeProps={{ className: "bg-emerald-100 text-emerald-800" }}
              >
                Household
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="border-t border-stone-200 bg-white py-8 text-center text-sm text-stone-400">
          <p className="mb-1 font-medium text-stone-600">✦ Triple Find</p>
          <p>Curated finds across shows, clothes &amp; home.</p>
          <p className="mt-3">
            As an Amazon Associate we earn from qualifying purchases.
          </p>
        </footer>

        <Scripts />
      </body>
    </html>
  );
}
