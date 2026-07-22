export interface Product {
  id: string;
  name: string;
  category: "shows" | "clothes" | "household";
  price: string;
  store: string;
  description: string;
  image: string;
  affiliateUrl: string;
  badge?: string;
}

export const products: Product[] = [
  // ── Shows (Entertainment/Merch) ──
  {
    id: "show-1",
    name: "Stranger Things Eddie Munson Hoodie",
    category: "shows",
    price: "$54.99",
    store: "MerchVerse",
    description:
      "Official Stranger Things season 4 hoodie featuring Eddie Munson's Hellfire Club design. Heavyweight cotton blend for cozy wear.",
    image: "https://m.media-amazon.com/images/I/B1mEhjGJ2nL._CLa%7C2140%2C2000%7CB1YASKw-gAL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX385_.png",
    affiliateUrl: "https://www.amazon.com/dp/B09YZ3Y12X?tag=triplefindsho-20",
    badge: "Bestseller",
  },
  {
    id: "show-2",
    name: "Star Wars Millennium Falcon Lego Set",
    category: "shows",
    price: "$169.99",
    store: "Toy Galaxy",
    description:
      "Build the fastest hunk of junk in the galaxy! 1,354-piece Lego set with detailed interior and minifigures.",
    image: "https://m.media-amazon.com/images/I/81nIauS111L._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B075SDMMMV?tag=triplefindsho-20",
  },
  {
    id: "show-3",
    name: "Marvel Spider-Man Comic T-Shirt",
    category: "shows",
    price: "$29.99",
    store: "Hero Threads",
    description:
      "Classic Spider-Man comic panel tee. 100% organic cotton with vibrant screen-printed artwork.",
    image: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C71IYV07ZUlL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX385_.png",
    affiliateUrl: "https://www.amazon.com/dp/B0DQRFVNKK?tag=triplefindsho-20",
    badge: "Sale",
  },
  {
    id: "show-4",
    name: "Harry Potter Hogwarts House Scarf",
    category: "shows",
    price: "$34.99",
    store: "Wizarding Wares",
    description:
      "Officially licensed Hogwarts scarf in your choice of house colors. Knitted acrylic, perfect for cozy reading sessions.",
    image: "https://m.media-amazon.com/images/I/61WJ7fZH4iL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FR941YPM?tag=triplefindsho-20",
  },
  {
    id: "show-5",
    name: "Legend of Zelda Master Sword Replica",
    category: "shows",
    price: "$89.99",
    store: "Game Loot",
    description:
      "26-inch Master Sword replica with detailed hilt and display stand. A must-have for any Zelda fan's collection.",
    image: "https://m.media-amazon.com/images/I/61q2BdW9bkL._AC_SY741_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B00SJPBRQE?tag=triplefindsho-20",
    badge: "New",
  },
  {
    id: "show-6",
    name: "Xbox Wireless Gaming Controller",
    category: "shows",
    price: "$64.99",
    store: "GameStop",
    description:
      "Official Xbox wireless controller with textured grip, Bluetooth, and USB-C connectivity. Works on console, PC, and cloud devices.",
    image: "https://m.media-amazon.com/images/I/61MepKvTfNL._SX425_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0F1HX3WXX?tag=triplefindsho-20",
    badge: "Bestseller",
  },
  {
    id: "show-7",
    name: "Pokemon Kanto Plush 3-Pack",
    category: "shows",
    price: "$34.99",
    store: "Pokemon Center",
    description:
      "Official Pokemon plush 3-pack featuring Charmander, Squirtle, and Bulbasaur. Each 8-inch plush is ultrasoft and collectible.",
    image: "https://m.media-amazon.com/images/I/713BA4AXexL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0F4GNRTTQ?tag=triplefindsho-20",
  },
  {
    id: "show-8",
    name: "Logitech G321 Wireless Gaming Headset",
    category: "shows",
    price: "$79.99",
    store: "Logitech G",
    description:
      "Lightweight wireless Bluetooth gaming headset with 16kHz boom mic and 20+ hour battery. Compatible with PC, PS5, and Switch.",
    image: "https://m.media-amazon.com/images/I/71yLbvA4jrL._AC_SX425_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FFM18D66?tag=triplefindsho-20",
    badge: "Trending",
  },
  {
    id: "show-9",
    name: "One Piece Roronoa Zoro Action Figure",
    category: "shows",
    price: "$39.99",
    store: "Anime Heroes",
    description:
      "ANIME HEROES Roronoa Zoro Three Sword Style action figure. Highly detailed collectible with multiple points of articulation.",
    image: "https://m.media-amazon.com/images/I/61AVurQmjvL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0D3N1ZKN3?tag=triplefindsho-20",
    badge: "New",
  },
  {
    id: "show-10",
    name: "Marvel Legends Emperor Doom Figure",
    category: "shows",
    price: "$24.99",
    store: "Hasbro",
    description:
      "Marvel Legends Series Emperor Doom from Fantastic Four comics. 6-inch scale collectible action figure with premium detailing.",
    image: "https://m.media-amazon.com/images/I/7173TPNaAJL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FJPW8JXH?tag=triplefindsho-20",
  },

  // ── Clothes ──
  {
    id: "cloth-1",
    name: "Slim Fit Denim Jacket",
    category: "clothes",
    price: "$78.00",
    store: "Urban Outpost",
    description:
      "Classic slim-fit denim jacket in medium wash. Features button front, chest pockets, and adjustable waist tabs.",
    image: "https://m.media-amazon.com/images/I/61qRv7DhEUL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B081SVT88S?tag=triplefindsho-20",
    badge: "Trending",
  },
  {
    id: "cloth-2",
    name: "Casual Linen Shirt",
    category: "clothes",
    price: "$45.00",
    store: "Coastal Threads",
    description:
      "Breathable linen shirt perfect for warm weather. Relaxed fit with a classic collar and chest pocket.",
    image: "https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SX385_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BV257YG8?tag=triplefindsho-20",
  },
  {
    id: "cloth-3",
    name: "Leather Crossbody Bag",
    category: "clothes",
    price: "$62.00",
    store: "Vintage Leather Co.",
    description:
      "Genuine leather crossbody bag with adjustable strap and multiple compartments. Ages beautifully over time.",
    image: "https://m.media-amazon.com/images/I/713rU0vObML._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FM86F584?tag=triplefindsho-20",
    badge: "Popular",
  },
  {
    id: "cloth-4",
    name: "Chunky Knit Wool Sweater",
    category: "clothes",
    price: "$89.00",
    store: "Cozy Knits",
    description:
      "Oversized chunky knit sweater in oatmeal heather. Made from soft merino wool blend.",
    image: "https://m.media-amazon.com/images/I/91WjFvjNfBL._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B08639NHQ5?tag=triplefindsho-20",
  },
  {
    id: "cloth-5",
    name: "High-Waisted Cargo Pants",
    category: "clothes",
    price: "$54.00",
    store: "Street Style Shop",
    description:
      "Utility-inspired cargo pants with a high-rise waist and relaxed leg. Twill cotton with six pockets.",
    image: "https://m.media-amazon.com/images/I/61ECONzfd-L._AC_SX425_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BS9GP4MD?tag=triplefindsho-20",
  },
  {
    id: "cloth-6",
    name: "Running Shoes for Men",
    category: "clothes",
    price: "$79.99",
    store: "Sneaker Spot",
    description:
      "Lightweight and breathable running shoes with responsive cushioning. Perfect for daily training and casual wear.",
    image: "https://m.media-amazon.com/images/I/71V1A3qG78L._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B09H6VRM5X?tag=triplefindsho-20",
    badge: "Bestseller",
  },
  {
    id: "cloth-7",
    name: "Women's Summer Sundress",
    category: "clothes",
    price: "$36.99",
    store: "Fashion Finds",
    description:
      "Casual ruffle sleeve V-neck sundress with pockets. Lightweight and flowy — perfect for warm weather outings.",
    image: "https://m.media-amazon.com/images/I/81BBPnL+DfL._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FT86LD8D?tag=triplefindsho-20",
    badge: "New",
  },
  {
    id: "cloth-8",
    name: "Carhartt Men's Watch Cap Beanie",
    category: "clothes",
    price: "$19.99",
    store: "Carhartt",
    description:
      "Classic acrylic watch cap beanie by Carhartt. Double-layer knit for warmth, ribbed cuff, and one-size-fits-most design.",
    image: "https://m.media-amazon.com/images/I/81OS0nA0ukL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B01C3LW2KO?tag=triplefindsho-20",
  },
  {
    id: "cloth-9",
    name: "Polarized Sports Sunglasses",
    category: "clothes",
    price: "$24.99",
    store: "Sun Gear",
    description:
      "4-pack polarized sports sunglasses with UV protection. Lightweight and durable for fishing, driving, and outdoor activities.",
    image: "https://m.media-amazon.com/images/I/81b3I+4QmEL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0DFG311CH?tag=triplefindsho-20",
    badge: "Sale",
  },
  {
    id: "cloth-10",
    name: "Timex Expedition Analog-Digital Watch",
    category: "clothes",
    price: "$44.00",
    store: "Timex",
    description:
      "Rugged analog-digital combo watch with Indiglo night-light, 50m water resistance, and date display. Built for adventure.",
    image: "https://m.media-amazon.com/images/I/81A-oTiK7bL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B000FGDE70?tag=triplefindsho-20",
    badge: "Popular",
  },

  // ── Household Items ──
  {
    id: "house-1",
    name: "Scented Candle Set",
    category: "household",
    price: "$32.00",
    store: "Hearth & Home",
    description:
      "Set of 3 soy wax candles in amber jar. Scents: Vanilla Bean, Cedar & Sage, Lavender Honey. 30-hour burn time each.",
    image: "https://m.media-amazon.com/images/I/71Zqkmw7XlL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0CKMH9RFZ?tag=triplefindsho-20",
    badge: "Gift Idea",
  },
  {
    id: "house-2",
    name: "Minimalist Wall Clock",
    category: "household",
    price: "$44.00",
    store: "Modern Nest",
    description:
      "Sleek 12-inch wall clock with silent sweep movement. Matte black frame with white face and minimalist numerals.",
    image: "https://m.media-amazon.com/images/I/71XGQmOqDgL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07QFVYQC5?tag=triplefindsho-20",
  },
  {
    id: "house-3",
    name: "Bamboo Cutting Board Set",
    category: "household",
    price: "$28.00",
    store: "EcoKitchen",
    description:
      "Set of 3 organic bamboo cutting boards in graduated sizes. Knife-friendly, antimicrobial, and easy to clean.",
    image: "https://m.media-amazon.com/images/I/71jG5a5BizL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0GFCZTRKL?tag=triplefindsho-20",
    badge: "Eco",
  },
  {
    id: "house-4",
    name: "Ceramic Pour-Over Coffee Set",
    category: "household",
    price: "$39.00",
    store: "Brew Lab",
    description:
      "Handcrafted ceramic dripper with double-wall carafe. Includes reusable stainless steel filter.",
    image: "https://m.media-amazon.com/images/I/71KSc3GqR-L._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B01L6OCXAS?tag=triplefindsho-20",
  },
  {
    id: "house-5",
    name: "Woven Throw Blanket",
    category: "household",
    price: "$55.00",
    store: "Hearth & Home",
    description:
      "Handwoven cotton throw blanket with fringe details. Lightweight enough for year-round use.",
    image: "https://m.media-amazon.com/images/I/81JSQkYj3vL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B09QLJ65LF?tag=triplefindsho-20",
    badge: "Bestseller",
  },
  {
    id: "house-6",
    name: "15-Piece Kitchen Knife Set",
    category: "household",
    price: "$59.99",
    store: "Astercook",
    description:
      "Complete 15-piece knife set with built-in sharpener block. German stainless steel with anti-rust coating and dishwasher-safe blades.",
    image: "https://m.media-amazon.com/images/I/71Vq1X0GKrL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0G4LV352H?tag=triplefindsho-20",
    badge: "Trending",
  },
  {
    id: "house-7",
    name: "Ceramic Plant Pot Set",
    category: "household",
    price: "$34.99",
    store: "Gepege",
    description:
      "Set of 2 beaded ceramic planters with drainage holes and saucers. Modern design for succulents, orchids, and indoor plants.",
    image: "https://m.media-amazon.com/images/I/71sYc3x3CCL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0893GQKGN?tag=triplefindsho-20",
  },
  {
    id: "house-8",
    name: "Organic Cotton Queen Sheet Set",
    category: "household",
    price: "$49.99",
    store: "Lane Linen",
    description:
      "4-piece queen sheet set in 100% organic cotton percale. Crisp, cool, and breathable — perfect for hot sleepers year-round.",
    image: "https://m.media-amazon.com/images/I/81s3Y8w7VlL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07RY59C3W?tag=triplefindsho-20",
    badge: "Eco",
  },
  {
    id: "house-9",
    name: "Bath Towel Set",
    category: "household",
    price: "$38.99",
    store: "Home Comforts",
    description:
      "Set of 6 premium cotton bath towels. Soft, highly absorbent, and quick-drying. Available in multiple colors.",
    image: "https://m.media-amazon.com/images/I/81VZ6Y5q5lL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07SL2RKJK?tag=triplefindsho-20",
    badge: "Bestseller",
  },
  {
    id: "house-10",
    name: "Vintage Glass Coffee Mug Set",
    category: "household",
    price: "$29.99",
    store: "LANDNEOO",
    description:
      "Set of 4 vintage embossed glass coffee mugs with bamboo lids and spoons. Perfect for coffee, tea, or overnight oats.",
    image: "https://m.media-amazon.com/images/I/71aXoq5P5qL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BM9LPS47?tag=triplefindsho-20",
    badge: "Gift Idea",
  },
];

export const categories = [
  {
    id: "shows" as const,
    name: "Shows",
    description: "Movie, TV, and gaming merch — from collectibles to apparel",
    emoji: "🎬",
    color: "amber",
  },
  {
    id: "clothes" as const,
    name: "Clothes",
    description: "Fashion picks — apparel, accessories, and footwear",
    emoji: "👕",
    color: "rose",
  },
  {
    id: "household" as const,
    name: "Household",
    description: "Home decor, kitchen essentials, and lifestyle goods",
    emoji: "🏠",
    color: "emerald",
  },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export function getProductsByCategory(category: CategoryId): Product[] {
  return products.filter((p) => p.category === category);
}

export function getCategoryInfo(category: CategoryId) {
  return categories.find((c) => c.id === category)!;
}