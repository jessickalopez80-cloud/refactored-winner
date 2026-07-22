import { Link } from "@tanstack/react-router";
import { getProductsByCategory, getCategoryInfo, type CategoryId } from "~/data/products";

const colorMap: Record<
  CategoryId,
  {
    bg: string;
    badge: string;
    btn: string;
    hover: string;
    border: string;
    gradient: string;
  }
> = {
  shows: {
    bg: "bg-amber-50",
    badge: "bg-amber-100 text-amber-700",
    btn: "bg-amber-600 hover:bg-amber-700",
    hover: "group-hover:text-amber-700",
    border: "border-amber-200",
    gradient: "from-amber-500 to-amber-700",
  },
  clothes: {
    bg: "bg-rose-50",
    badge: "bg-rose-100 text-rose-700",
    btn: "bg-rose-600 hover:bg-rose-700",
    hover: "group-hover:text-rose-700",
    border: "border-rose-200",
    gradient: "from-rose-500 to-rose-700",
  },
  household: {
    bg: "bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
    btn: "bg-emerald-600 hover:bg-emerald-700",
    hover: "group-hover:text-emerald-700",
    border: "border-emerald-200",
    gradient: "from-emerald-500 to-emerald-700",
  },
};

export function CategoryPage({ category }: { category: CategoryId }) {
  const info = getCategoryInfo(category);
  const products = getProductsByCategory(category);
  const colors = colorMap[category];

  return (
    <main>
      {/* Hero banner */}
      <section
        className={`bg-gradient-to-br ${colors.bg} border-b border-stone-200 py-14 sm:py-20`}
      >
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span
            className={`inline-block rounded-full px-4 py-1 text-sm font-semibold ${colors.badge}`}
          >
            {info.emoji} {info.name}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            {info.description}
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-stone-600">
            {products.length} curated {info.name.toLowerCase()} finds waiting for
            you.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-stone-500">
              Showing {products.length} product
              {products.length !== 1 ? "s" : ""}
            </p>
            <Link
              to="/"
              className="text-sm font-medium text-stone-500 hover:text-stone-700 transition-colors"
            >
              ← Back to home
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
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
                  <h2 className="text-sm font-semibold leading-snug text-stone-800 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-xs text-stone-500 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-stone-900">
                      {product.price}
                    </span>
                    <span
                      className={`flex items-center gap-1 text-sm font-medium text-stone-500 transition-colors ${colors.hover}`}
                    >
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
    </main>
  );
}
