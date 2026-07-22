import { Link, createFileRoute } from "@tanstack/react-router";
import { categories, getProductsByCategory } from "~/data/products";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700">
              Curated finds, delivered daily
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Discover your next{" "}
              <span className="bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
                favorite thing
              </span>
            </h1>
            <p className="mt-4 text-lg text-stone-600 sm:mt-6 sm:text-xl">
              We hunt across shows, fashion, and home decor so you don't have to.
              Browse, click, shop — it's that simple.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/shows"
                className="rounded-full bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-amber-700 hover:shadow-md"
              >
                Browse Shows
              </Link>
              <Link
                to="/clothes"
                className="rounded-full bg-rose-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-rose-700 hover:shadow-md"
              >
                Shop Clothes
              </Link>
              <Link
                to="/household"
                className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
              >
                Explore Home
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl" />
      </section>

      {/* ── Category Feature Sections ── */}
      {categories.map((cat) => {
        const catProducts = getProductsByCategory(cat.id).slice(0, 3);
        const hoverColor =
          cat.id === "shows"
            ? "hover:bg-amber-50"
            : cat.id === "clothes"
              ? "hover:bg-rose-50"
              : "hover:bg-emerald-50";
        const badgeColor =
          cat.id === "shows"
            ? "bg-amber-100 text-amber-700"
            : cat.id === "clothes"
              ? "bg-rose-100 text-rose-700"
              : "bg-emerald-100 text-emerald-700";
        const btnColor =
          cat.id === "shows"
            ? "bg-amber-600 hover:bg-amber-700"
            : cat.id === "clothes"
              ? "bg-rose-600 hover:bg-rose-700"
              : "bg-emerald-600 hover:bg-emerald-700";

        return (
          <section
            key={cat.id}
            className={`border-b border-stone-100 py-16 sm:py-20 ${hoverColor} transition-colors`}
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              {/* Category header */}
              <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${badgeColor}`}
                  >
                    {cat.emoji} {cat.name}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                    {cat.description}
                  </h2>
                </div>
                <Link
                  to={`/${cat.id}`}
                  className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold text-white transition-all shadow-sm hover:shadow-md ${btnColor}`}
                >
                  View All {cat.name} →
                </Link>
              </div>

              {/* Product cards */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {catProducts.map((product) => (
                  <a
                    key={product.id}
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      {product.badge && (
                        <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-stone-700 shadow-sm">
                          {product.badge}
                        </span>
                      )}
                      <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-stone-600 shadow-sm backdrop-blur-sm">
                        {product.store}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-2 p-4">
                      <h3 className="text-sm font-semibold leading-snug text-stone-800 group-hover:text-amber-700 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-stone-900">
                          {product.price}
                        </span>
                        <span className="flex items-center gap-1 text-sm font-medium text-amber-600 transition-colors group-hover:text-amber-700">
                          Shop Now
                          <span className="text-lg leading-none">→</span>
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Bottom CTA ── */}
      <section className="bg-gradient-to-r from-amber-600 to-rose-600 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start discovering today
          </h2>
          <p className="mx-auto mt-3 max-w-md text-lg text-white/80">
            Every product is just a click away. Find something you love and shop
            directly from the source.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/shows"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-amber-700 transition-all hover:bg-stone-100 hover:shadow-md"
            >
              Browse All Categories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
