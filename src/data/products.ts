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

export type CategoryId = (typeof categories)[number]["id",
  // ══════ WAVE 2: 75 New Products (25 per category) ══════
  
  // ── SHOWS 11-35 ──
  // Kids: Encanto, Bluey, Minecraft, Paw Patrol, Super Mario
  {
    id: "show-11", name: "Encanto Mirabel Singing Doll", category: "shows", price: "$24.99", store: "Disney",
    description: "Disney Encanto Mirabel Madrigal doll that sings and speaks phrases from the movie. Colorful dress with embroidery details.",
    image: "https://m.media-amazon.com/images/I/71NqhRTfi5L._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0CDXZMZRJ?tag=triplefindsho-20", badge: "Kids Favorite",
  },
  {
    id: "show-12", name: "Bluey Ultimate Playhouse Playset", category: "shows", price: "$39.99", store: "Bluey Store",
    description: "Bluey's Ultimate Playhouse with furniture, figures, and working lights. 2.5-foot playset with 15+ accessories for ages 3+.",
    image: "https://m.media-amazon.com/images/I/81jKhHplKZL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07KWQ8JY4?tag=triplefindsho-20", badge: "Bestseller",
  },
  {
    id: "show-13", name: "Minecraft Diamond Sword Toy", category: "shows", price: "$19.99", store: "Minecraft Shop",
    description: "Life-size Minecraft diamond sword with pixelated design. Lightweight foam construction safe for play and cosplay.",
    image: "https://m.media-amazon.com/images/I/81Lzv4xfUzL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B08TWNSMMF?tag=triplefindsho-20", badge: "New",
  },
  {
    id: "show-14", name: "Paw Patrol Movie Liberty Plush", category: "shows", price: "$14.99", store: "Nickelodeon",
    description: "Paw Patrol The Movie Liberty plush toy, 10 inches. Soft cuddly dachshund with trademark pink uniform details.",
    image: "https://m.media-amazon.com/images/I/718AhvAtdzL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07KXJT152?tag=triplefindsho-20", badge: "Popular",
  },
  {
    id: "show-15", name: "Super Mario Bowser's Castle LEGO", category: "shows", price: "$99.99", store: "LEGO",
    description: "LEGO Super Mario Bowser's Castle expansion set with interactive features. 1,000+ pieces for ages 8+.",
    image: "https://m.media-amazon.com/images/I/81yDHVkvYhL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FKJX6YTM?tag=triplefindsho-20", badge: "LEGO",
  },
  // Teens/Young Adults: Attack on Titan, Demon Slayer, Fortnite, K-pop, Marvel/DC
  {
    id: "show-16", name: "Attack on Titan Levi Ackerman Figure", category: "shows", price: "$44.99", store: "Banpresto",
    description: "Attack on Titan Levi figure with ODM gear and dual blades. Highly detailed anime collectible.",
    image: "https://m.media-amazon.com/images/I/71WTWrZl1fL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B08YN8VBC9?tag=triplefindsho-20", badge: "Anime Hit",
  },
  {
    id: "show-17", name: "Demon Slayer Rengoku Figure", category: "shows", price: "$34.99", store: "Anime Heroes",
    description: "Demon Slayer Kyojuro Rengoku figure with flame effect base. Premium sculpt capturing the Flame Hashira.",
    image: "https://m.media-amazon.com/images/I/71IAcnEJMdL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FMS9D14R?tag=triplefindsho-20", badge: "Anime Hit",
  },
  {
    id: "show-18", name: "Fortnite Peely Backpack Hanger", category: "shows", price: "$12.99", store: "Epic Games",
    description: "Fortnite Peely backpack clip-on with moveable arms. Official Epic Games merch.",
    image: "https://m.media-amazon.com/images/I/71xpCkTbiHL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FMS8D34Q?tag=triplefindsho-20", badge: "Fortnite",
  },
  {
    id: "show-19", name: "BTS Dynamite Collectible Figurine Set", category: "shows", price: "$49.99", store: "HYBE",
    description: "Official BTS Dynamite era mini figurine set with all 7 members in retro stage outfits.",
    image: "https://m.media-amazon.com/images/I/71oQKRvTovL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FMS9D14R?tag=triplefindsho-20", badge: "K-Pop",
  },
  {
    id: "show-20", name: "DC Comics Batman Cowl Replica", category: "shows", price: "$79.99", store: "DC Collectibles",
    description: "Full-size wearable Batman cowl replica. Premium display piece with stand included.",
    image: "https://m.media-amazon.com/images/I/81FIL9vnjEL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FSTBB93P?tag=triplefindsho-20", badge: "Collector",
  },
  // Adults 30-45: The Office, Friends, Breaking Bad, Game of Thrones, Star Wars
  {
    id: "show-21", name: "The Office Dunder Mifflin Notebook Set", category: "shows", price: "$16.99", store: "NBC Store",
    description: "Set of 3 Dunder Mifflin notebooks with classic logo. Hard cover, 120 pages. That's what she said.",
    image: "https://m.media-amazon.com/images/I/81GVFL1lkXL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0DQ6ND4Q2?tag=triplefindsho-20", badge: "Fan Favorite",
  },
  {
    id: "show-22", name: "Friends Central Perk Coffee Mug Set", category: "shows", price: "$24.99", store: "WB Shop",
    description: "Set of 4 Friends Central Perk ceramic mugs with iconic quotes. Microwave and dishwasher safe.",
    image: "https://m.media-amazon.com/images/I/71JcUp26uxL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0DQ6MMKYC?tag=triplefindsho-20", badge: "Bestseller",
  },
  {
    id: "show-23", name: "Breaking Bad Los Pollos Hermanos Apron", category: "shows", price: "$22.99", store: "AMC Shop",
    description: "Los Pollos Hermanos restaurant apron from Breaking Bad. Adjustable strap, front pocket.",
    image: "https://m.media-amazon.com/images/I/71ou7utklEL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B081QWJ39V?tag=triplefindsho-20", badge: "Cult Classic",
  },
  {
    id: "show-24", name: "Game of Thrones Dragon Egg Set", category: "shows", price: "$34.99", store: "HBO Shop",
    description: "Set of 3 resin dragon eggs (Drogon, Rhaegal, Viserion) in display box. Mother of Dragons approved.",
    image: "https://m.media-amazon.com/images/I/71LhQW7T3bL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BQNZ6RG9?tag=triplefindsho-20", badge: "Collector",
  },
  {
    id: "show-25", name: "Star Wars Mandalorian Helmet Replica", category: "shows", price: "$119.99", store: "Hasbro",
    description: "Black Series Mandalorian Din Djarin electronic helmet with LED rangefinder. This is the way.",
    image: "https://m.media-amazon.com/images/I/61AVurQmjvL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0D3N1ZKN3?tag=triplefindsho-20", badge: "Premium",
  },
  // Older 45+: Elvis, Beatles, I Love Lucy, Westerns, Classic Rock
  {
    id: "show-26", name: "Elvis Presley Aloha from Hawaii Vinyl", category: "shows", price: "$24.99", store: "Legacy Recordings",
    description: "Elvis Aloha from Hawaii 180-gram vinyl reissue. Classic 1973 concert album remastered.",
    image: "https://m.media-amazon.com/images/I/7173TPNaAJL._AC_SX679_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FJPW8JXH?tag=triplefindsho-20", badge: "Classic",
  },
  {
    id: "show-27", name: "The Beatles Yellow Submarine Wall Art", category: "shows", price: "$29.99", store: "Music Legends",
    description: "The Beatles Yellow Submarine movie poster on stretched canvas. 16x24 inches, ready to hang.",
    image: "https://m.media-amazon.com/images/I/61qRv7DhEUL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B081SVT88S?tag=triplefindsho-20", badge: "Classic",
  },
  {
    id: "show-28", name: "I Love Lucy Complete Series DVD", category: "shows", price: "$59.99", store: "CBS",
    description: "I Love Lucy complete series — all 6 seasons, 194 episodes. Includes colorized specials.",
    image: "https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SX385_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BV257YG8?tag=triplefindsho-20", badge: "Classic TV",
  },
  {
    id: "show-29", name: "John Wayne The Searchers Movie Poster", category: "shows", price: "$19.99", store: "Movie Posters Inc",
    description: "Classic The Searchers movie poster print with John Wayne. 24x36 inches on premium paper.",
    image: "https://m.media-amazon.com/images/I/713rU0vObML._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FM86F584?tag=triplefindsho-20", badge: "Western",
  },
  {
    id: "show-30", name: "Classic Rock Vinyl Storage Crate", category: "shows", price: "$34.99", store: "Vinyl Storage Co",
    description: "Vintage wooden record storage crate with band artwork. Holds 75+ vinyl albums.",
    image: "https://m.media-amazon.com/images/I/91WjFvjNfBL._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B08639NHQ5?tag=triplefindsho-20", badge: "Vinyl",
  },
  // Mixed: Board games, Funko Pops, LEGO adults, Puzzles, Drones
  {
    id: "show-31", name: "Catan Board Game 5th Edition", category: "shows", price: "$43.99", store: "Catan Studio",
    description: "Settlers of Catan 5th edition. Trade, build, settle. The classic strategy game for 3-4 players ages 10+.",
    image: "https://m.media-amazon.com/images/I/61ECONzfd-L._AC_SX425_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BS9GP4MD?tag=triplefindsho-20", badge: "Family Fun",
  },
  {
    id: "show-32", name: "Funko Pop! Harry Potter 5-Pack", category: "shows", price: "$54.99", store: "Funko",
    description: "Funko Pop! Harry Potter 5-pack: Harry, Hermione, Ron, Dumbledore, Hagrid. Vinyl figures in window boxes.",
    image: "https://m.media-amazon.com/images/I/71V1A3qG78L._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B09H6VRM5X?tag=triplefindsho-20", badge: "Collectible",
  },
  {
    id: "show-33", name: "LEGO Botanical Orchid for Adults", category: "shows", price: "$49.99", store: "LEGO",
    description: "LEGO Botanical Collection orchid, 608 pieces. Stunning decorative plant. No watering needed.",
    image: "https://m.media-amazon.com/images/I/81BBPnL+DfL._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FT86LD8D?tag=triplefindsho-20", badge: "Adult LEGO",
  },
  {
    id: "show-34", name: "Ravensburger 1000-Piece Disney Puzzle", category: "shows", price: "$19.99", store: "Ravensburger",
    description: "1000-piece Disney collector's puzzle with classic characters. Premium soft-click technology.",
    image: "https://m.media-amazon.com/images/I/81OS0nA0ukL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B01C3LW2KO?tag=triplefindsho-20", badge: "Family Fun",
  },
  {
    id: "show-35", name: "DJI Mini 3 Drone with 4K Camera", category: "shows", price: "$329.99", store: "DJI",
    description: "DJI Mini 3 lightweight drone under 249g. 4K camera, 38-min flight. No FAA registration needed.",
    image: "https://m.media-amazon.com/images/I/81b3I+4QmEL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0DFG311CH?tag=triplefindsho-20", badge: "Premium Tech",
  },

  // ── CLOTHES 11-35 ──
  // Kids: graphic tees, light-up sneakers, character hoodies, sunglasses, watch
  {
    id: "cloth-11", name: "Kids Graphic Dinosaur T-Shirt", category: "clothes", price: "$12.99", store: "Trend Tees",
    description: "Fun dinosaur graphic tee for kids ages 4-12. 100% cotton, vibrant print, tagless neck for comfort.",
    image: "https://m.media-amazon.com/images/I/61qRv7DhEUL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B081SVT88S?tag=triplefindsho-20", badge: "Kids Pick",
  },
  {
    id: "cloth-12", name: "Light-Up LED Kids Sneakers", category: "clothes", price: "$29.99", store: "KidStride",
    description: "LED light-up sneakers for kids with 7 color modes. USB rechargeable, non-slip sole. Sizes toddler to big kid.",
    image: "https://m.media-amazon.com/images/I/71V1A3qG78L._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B09H6VRM5X?tag=triplefindsho-20", badge: "Fun",
  },
  {
    id: "cloth-13", name: "Marvel Spider-Man Character Hoodie", category: "clothes", price: "$26.99", store: "Hero Threads",
    description: "Officially licensed Spider-Man zip hoodie for kids. 3D web shooters on sleeves, soft fleece lining.",
    image: "https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SX385_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BV257YG8?tag=triplefindsho-20", badge: "Marvel",
  },
  {
    id: "cloth-14", name: "Kids Polarized Sunglasses UV400", category: "clothes", price: "$11.99", store: "Sun Kids",
    description: "Flexible polarized sunglasses for kids ages 3-10. UV400 protection, bendable frame, multiple colors.",
    image: "https://m.media-amazon.com/images/I/81b3I+4QmEL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0DFG311CH?tag=triplefindsho-20", badge: "Essential",
  },
  {
    id: "cloth-15", name: "Kids Digital Sport Watch", category: "clothes", price: "$14.99", store: "Time Teacher",
    description: "Water-resistant digital watch for kids with alarm, stopwatch, and backlight. Soft silicone strap, 7 color options.",
    image: "https://m.media-amazon.com/images/I/81A-oTiK7bL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B000FGDE70?tag=triplefindsho-20", badge: "Gift Idea",
  },
  // Teens: oversized hoodies, crop tops, bucket hats, platform sneakers, phone cases
  {
    id: "cloth-16", name: "Oversized Aesthetic Hoodie", category: "clothes", price: "$32.99", store: "Teen Vogue",
    description: "Trendy oversized hoodie with vintage wash. Drop shoulder, kangaroo pocket. Perfect streetwear aesthetic for teens.",
    image: "https://m.media-amazon.com/images/I/713rU0vObML._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FM86F584?tag=triplefindsho-20", badge: "Trending",
  },
  {
    id: "cloth-17", name: "Ribbed Knit Crop Top 2-Pack", category: "clothes", price: "$18.99", store: "Y2K Style",
    description: "2-pack ribbed knit crop tops in neutral tones. Stretchy soft fabric, square neckline. Essential teen staple.",
    image: "https://m.media-amazon.com/images/I/91WjFvjNfBL._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B08639NHQ5?tag=triplefindsho-20", badge: "Y2K",
  },
  {
    id: "cloth-18", name: "Reversible Bucket Hat", category: "clothes", price: "$15.99", store: "Street Style",
    description: "Trendy reversible bucket hat with 2-in-1 design. Cotton twill, one size fits most. Packable and crushable.",
    image: "https://m.media-amazon.com/images/I/61ECONzfd-L._AC_SX425_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BS9GP4MD?tag=triplefindsho-20", badge: "Trending",
  },
  {
    id: "cloth-19", name: "Platform Chunky Sneakers", category: "clothes", price: "$44.99", store: "Urban Sole",
    description: "Platform chunky sneakers with 2-inch sole. Breathable mesh and faux leather upper. Retro 90s vibe.",
    image: "https://m.media-amazon.com/images/I/81BBPnL+DfL._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FT86LD8D?tag=triplefindsho-20", badge: "Trending",
  },
  {
    id: "cloth-20", name: "iPhone Magnetic Clear Case", category: "clothes", price: "$16.99", store: "Case Mate",
    description: "Crystal clear magnetic iPhone case with MagSafe compatibility. Military-grade drop protection, anti-yellowing.",
    image: "https://m.media-amazon.com/images/I/81OS0nA0ukL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B01C3LW2KO?tag=triplefindsho-20", badge: "Essential",
  },
  // Adults 30-45: blazers, Chelsea boots, tote bags, athleisure, smart watches
  {
    id: "cloth-21", name: "Women's Knit Blazer Jacket", category: "clothes", price: "$44.99", store: "Work Chic",
    description: "Versatile open-front knit blazer. Pairs with jeans or dresses. Wrinkle-resistant travel fabric.",
    image: "https://m.media-amazon.com/images/I/61qRv7DhEUL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B081SVT88S?tag=triplefindsho-20", badge: "Work Essential",
  },
  {
    id: "cloth-22", name: "Men's Chelsea Boots", category: "clothes", price: "$69.99", store: "Urban Gentleman",
    description: "Classic leather Chelsea boots with elastic side panels. Pull-tab for easy on/off. Rubber sole for all-day comfort.",
    image: "https://m.media-amazon.com/images/I/71V1A3qG78L._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B09H6VRM5X?tag=triplefindsho-20", badge: "Smart",
  },
  {
    id: "cloth-23", name: "Canvas Tote Bag with Zipper", category: "clothes", price: "$22.99", store: "Eco Carry",
    description: "Large canvas tote with zipper closure and inner pockets. Heavy-duty cotton, fits laptop and groceries.",
    image: "https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SX385_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BV257YG8?tag=triplefindsho-20", badge: "Eco",
  },
  {
    id: "cloth-24", name: "Women's Athleisure Jumpsuit", category: "clothes", price: "$38.99", store: "FlexFit",
    description: "One-piece athleisure jumpsuit with zip front and pockets. Buttery-soft fabric for gym-to-street style.",
    image: "https://m.media-amazon.com/images/I/713rU0vObML._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FM86F584?tag=triplefindsho-20", badge: "Athleisure",
  },
  {
    id: "cloth-25", name: "Smart Watch Fitness Tracker", category: "clothes", price: "$49.99", store: "TechFit",
    description: "Smartwatch with heart rate, SpO2, sleep tracking, and 14-day battery. 1.8" AMOLED display, IP68 waterproof.",
    image: "https://m.media-amazon.com/images/I/81A-oTiK7bL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B000FGDE70?tag=triplefindsho-20", badge: "Tech",
  },
  // Older 45+: walking shoes, reading glasses, cardigans, sun hats, leather belts
  {
    id: "cloth-26", name: "Skechers Arch Fit Walking Shoes", category: "clothes", price: "$69.99", store: "Skechers",
    description: "Skechers Arch Fit podiatrist-designed walking shoes with removable insole. Slip-on with stretch fit.",
    image: "https://m.media-amazon.com/images/I/91WjFvjNfBL._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B08639NHQ5?tag=triplefindsho-20", badge: "Comfort",
  },
  {
    id: "cloth-27", name: "Blue Light Reading Glasses 3-Pack", category: "clothes", price: "$15.99", store: "Eye Care",
    description: "3-pack blue light blocking reading glasses. Spring hinges, multiple strengths. Reduces digital eye strain.",
    image: "https://m.media-amazon.com/images/I/61ECONzfd-L._AC_SX425_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BS9GP4MD?tag=triplefindsho-20", badge: "Bestseller",
  },
  {
    id: "cloth-28", name: "Women's Long Cardigan with Pockets", category: "clothes", price: "$34.99", store: "Cozy Knits",
    description: "Open-front long cardigan with deep side pockets. Soft knit, drapes beautifully. Perfect layering piece.",
    image: "https://m.media-amazon.com/images/I/81BBPnL+DfL._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FT86LD8D?tag=triplefindsho-20", badge: "Cozy",
  },
  {
    id: "cloth-29", name: "Wide-Brim Sun Hat UPF 50+", category: "clothes", price: "$19.99", store: "Sun Smart",
    description: "Packable wide-brim sun hat with UPF 50+ protection. Adjustable chin strap, sweat-wicking band. Garden and beach ready.",
    image: "https://m.media-amazon.com/images/I/81OS0nA0ukL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B01C3LW2KO?tag=triplefindsho-20", badge: "Sun Safe",
  },
  {
    id: "cloth-30", name: "Full-Grain Leather Dress Belt", category: "clothes", price: "$29.99", store: "Leather Works",
    description: "Genuine full-grain leather belt with brushed nickel buckle. 35mm width. Classic dress and casual style.",
    image: "https://m.media-amazon.com/images/I/81b3I+4QmEL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0DFG311CH?tag=triplefindsho-20", badge: "Quality",
  },
  // Accessories: scarves, wallets, jewelry, ties, umbrellas
  {
    id: "cloth-31", name: "Cashmere Feel Winter Scarf", category: "clothes", price: "$18.99", store: "Warm & Cozy",
    description: "Ultra-soft cashmere-feel winter scarf in classic plaid. 72 inches long, warm without bulk. Unisex style.",
    image: "https://m.media-amazon.com/images/I/61qRv7DhEUL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B081SVT88S?tag=triplefindsho-20", badge: "Winter",
  },
  {
    id: "cloth-32", name: "RFID Blocking Leather Wallet", category: "clothes", price: "$19.99", store: "Safe Carry",
    description: "Slim RFID-blocking genuine leather bifold wallet. 6 card slots, ID window, and cash compartment.",
    image: "https://m.media-amazon.com/images/I/71V1A3qG78L._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B09H6VRM5X?tag=triplefindsho-20", badge: "Essential",
  },
  {
    id: "cloth-33", name: "Crystal Teardrop Earring Set", category: "clothes", price: "$14.99", store: "Gem Boutique",
    description: "Set of 6 pairs of crystal teardrop earrings in assorted colors. Hypoallergenic posts. Elegant gift box included.",
    image: "https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SX385_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BV257YG8?tag=triplefindsho-20", badge: "Gift Idea",
  },
  {
    id: "cloth-34", name: "Men's Silk Patterned Tie Set", category: "clothes", price: "$24.99", store: "Tie Bar",
    description: "Set of 3 silk-blend patterned ties in classic stripes, dots, and paisley. 3.25-inch width, wrinkle-resistant.",
    image: "https://m.media-amazon.com/images/I/713rU0vObML._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FM86F584?tag=triplefindsho-20", badge: "Professional",
  },
  {
    id: "cloth-35", name: "Windproof Travel Umbrella", category: "clothes", price: "$17.99", store: "Rain Shield",
    description: "Compact windproof umbrella with auto open/close. Double-vented canopy, Teflon coated. Fits in bag or car door.",
    image: "https://m.media-amazon.com/images/I/91WjFvjNfBL._AC_SY500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B08639NHQ5?tag=triplefindsho-20", badge: "Travel",
  },

  // ── HOUSEHOLD 11-35 ──
  // Kids: night lights, lunch boxes, growth chart, bookshelf, toy organizers
  {
    id: "house-11", name: "Unicorn Night Light for Kids", category: "household", price: "$16.99", store: "Dream Glow",
    description: "Soft silicone unicorn night light with 7 colors and dimmable tap control. Rechargeable, 20-hour battery. Safe for toddlers.",
    image: "https://m.media-amazon.com/images/I/71Zqkmw7XlL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0CKMH9RFZ?tag=triplefindsho-20", badge: "Kids Love",
  },
  {
    id: "house-12", name: "Bento Box Kids Lunch Container", category: "household", price: "$22.99", store: "LunchBots",
    description: "5-compartment bento-style kids lunch box with leakproof seals. BPA-free, dishwasher safe. Fits standard lunch bags.",
    image: "https://m.media-amazon.com/images/I/71XGQmOqDgL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07QFVYQC5?tag=triplefindsho-20", badge: "School Essential",
  },
  {
    id: "house-13", name: "Wooden Kids Growth Chart Ruler", category: "household", price: "$24.99", store: "Nursery Decor",
    description: "Handcrafted wooden growth chart ruler, 6 feet tall. Personalized with child's name. Easy wall mount included.",
    image: "https://m.media-amazon.com/images/I/71jG5a5BizL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0GFCZTRKL?tag=triplefindsho-20", badge: "Keepsake",
  },
  {
    id: "house-14", name: "Kids Bookshelf with Reading Nook", category: "household", price: "$49.99", store: "Little Reader",
    description: "Front-facing kids bookshelf displaying 20+ books. Low height perfect for toddlers. Includes cozy cushion.",
    image: "https://m.media-amazon.com/images/I/71KSc3GqR-L._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B01L6OCXAS?tag=triplefindsho-20", badge: "Montessori",
  },
  {
    id: "house-15", name: "Toy Storage Organizer with Bins", category: "household", price: "$34.99", store: "Tidy Tots",
    description: "Colorful toy organizer with 9 removable plastic bins. Sturdy wooden frame. Perfect for LEGO, dolls, and craft supplies.",
    image: "https://m.media-amazon.com/images/I/81JSQkYj3vL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B09QLJ65LF?tag=triplefindsho-20", badge: "Organized",
  },
  // Teens/College: LED lights, desk organizers, mini fridge, bean bag, lap desk
  {
    id: "house-16", name: "Smart LED Strip Lights 32ft", category: "household", price: "$17.99", store: "Govee",
    description: "32ft smart LED strip lights with app and voice control. Music sync, 16M colors, timer. Perfect dorm room upgrade.",
    image: "https://m.media-amazon.com/images/I/71Vq1X0GKrL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0G4LV352H?tag=triplefindsho-20", badge: "Dorm Essential",
  },
  {
    id: "house-17", name: "Rotating Desk Organizer Carousel", category: "household", price: "$22.99", store: "Study Mate",
    description: "360-degree rotating desk organizer with 6 compartments. Holds pens, markers, phone, sticky notes. Maximizes desk space.",
    image: "https://m.media-amazon.com/images/I/71sYc3x3CCL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0893GQKGN?tag=triplefindsho-20", badge: "Study Essential",
  },
  {
    id: "house-18", name: "Mini Fridge 4L Skincare Cooler", category: "household", price: "$39.99", store: "Cooluli",
    description: "Compact 4-liter mini fridge for skincare, drinks, and snacks. AC/DC power, portable. Fits 6 soda cans.",
    image: "https://m.media-amazon.com/images/I/81s3Y8w7VlL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07RY59C3W?tag=triplefindsho-20", badge: "Dorm Essential",
  },
  {
    id: "house-19", name: "Memory Foam Bean Bag Chair", category: "household", price: "$59.99", store: "Chill Sack",
    description: "3-foot memory foam bean bag chair with machine-washable cover. Perfect for gaming, reading, or dorm lounging.",
    image: "https://m.media-amazon.com/images/I/81VZ6Y5q5lL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07SL2RKJK?tag=triplefindsho-20", badge: "Cozy",
  },
  {
    id: "house-20", name: "Lap Desk with Device Ledge", category: "household", price: "$24.99", store: "Study Mate",
    description: "Bamboo lap desk with device ledge and wrist pad. Fits up to 15.6" laptop. Built-in phone slot. Perfect for bed or couch.",
    image: "https://m.media-amazon.com/images/I/71aXoq5P5qL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BM9LPS47?tag=triplefindsho-20", badge: "Study Aid",
  },
  // Adults 30-45: air fryer, robot vacuum, standing desk, wine glasses, tool set
  {
    id: "house-21", name: "Ninja Air Fryer Max XL 5.5 Qt", category: "household", price: "$119.99", store: "Ninja",
    description: "Ninja Air Fryer Max XL with 5.5-quart capacity. 7 cooking functions, rapid air circulation. Family-sized meals fast.",
    image: "https://m.media-amazon.com/images/I/71Zqkmw7XlL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0CKMH9RFZ?tag=triplefindsho-20", badge: "Kitchen Essential",
  },
  {
    id: "house-22", name: "Robot Vacuum with Lidar Navigation", category: "household", price: "$199.99", store: "Roborock",
    description: "Smart robot vacuum with precise lidar mapping and 2500Pa suction. App-controlled zones, 150-min runtime.",
    image: "https://m.media-amazon.com/images/I/71XGQmOqDgL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07QFVYQC5?tag=triplefindsho-20", badge: "Smart Home",
  },
  {
    id: "house-23", name: "Electric Standing Desk 48-inch", category: "household", price: "$229.99", store: "FlexiSpot",
    description: "48-inch electric height-adjustable standing desk with memory controller. Smooth lift, cable management tray included.",
    image: "https://m.media-amazon.com/images/I/71jG5a5BizL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0GFCZTRKL?tag=triplefindsho-20", badge: "Office Upgrade",
  },
  {
    id: "house-24", name: "Crystal Wine Glasses Set of 6", category: "household", price: "$34.99", store: "Toast & Co",
    description: "Set of 6 hand-blown crystal wine glasses. Elegant stem design, 15 oz capacity. Dishwasher safe, lead-free crystal.",
    image: "https://m.media-amazon.com/images/I/71KSc3GqR-L._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B01L6OCXAS?tag=triplefindsho-20", badge: "Entertaining",
  },
  {
    id: "house-25", name: "Home Tool Set 130-Piece", category: "household", price: "$49.99", store: "DEWALT",
    description: "Complete 130-piece home tool set with ratchet, sockets, screwdrivers, pliers, and hammer. Sturdy carrying case.",
    image: "https://m.media-amazon.com/images/I/81JSQkYj3vL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B09QLJ65LF?tag=triplefindsho-20", badge: "Essential",
  },
  // Older 45+: electric kettle, heated blanket, magnifying lamp, pill organizer, non-slip mats
  {
    id: "house-26", name: "Electric Gooseneck Kettle", category: "household", price: "$39.99", store: "Brew Perfect",
    description: "1L electric gooseneck kettle with precise temperature control. Quick boil, auto shut-off. Perfect pour-over coffee.",
    image: "https://m.media-amazon.com/images/I/71Vq1X0GKrL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0G4LV352H?tag=triplefindsho-20", badge: "Kitchen",
  },
  {
    id: "house-27", name: "Heated Sherpa Throw Blanket", category: "household", price: "$39.99", store: "Sunbeam",
    description: "Electric heated throw blanket with 6 heat settings and 4-hour auto-off. Ultra-soft sherpa, machine washable. 50x60 inches.",
    image: "https://m.media-amazon.com/images/I/71sYc3x3CCL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0893GQKGN?tag=triplefindsho-20", badge: "Cozy",
  },
  {
    id: "house-28", name: "LED Magnifying Floor Lamp", category: "household", price: "$69.99", store: "Brightech",
    description: "5-diopter magnifying floor lamp with adjustable swing arm and bright LED. Perfect for reading, crafts, and hobbies.",
    image: "https://m.media-amazon.com/images/I/81s3Y8w7VlL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07RY59C3W?tag=triplefindsho-20", badge: "Vision Aid",
  },
  {
    id: "house-29", name: "Monthly Pill Organizer AM/PM", category: "household", price: "$19.99", store: "Ezy Dose",
    description: "28-day AM/PM pill organizer with large compartments and easy-open lids. Color-coded for morning and evening doses.",
    image: "https://m.media-amazon.com/images/I/81VZ6Y5q5lL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07SL2RKJK?tag=triplefindsho-20", badge: "Health",
  },
  {
    id: "house-30", name: "Non-Slip Bathroom Rug Set 2-Piece", category: "household", price: "$24.99", store: "Gorilla Grip",
    description: "2-piece bathroom rug set with non-slip backing. Ultra-absorbent chenille, quick-dry. Machine washable.",
    image: "https://m.media-amazon.com/images/I/71aXoq5P5qL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BM9LPS47?tag=triplefindsho-20", badge: "Safety",
  },
  // Gifts/General: picture frames, diffuser, cookbook, welcome mat, herb garden
  {
    id: "house-31", name: "Digital Picture Frame 10-inch WiFi", category: "household", price: "$59.99", store: "Frameo",
    description: "10.1-inch WiFi digital picture frame with IPS touchscreen. Share photos instantly via app. Perfect gift for grandparents.",
    image: "https://m.media-amazon.com/images/I/71Zqkmw7XlL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0CKMH9RFZ?tag=triplefindsho-20", badge: "Gift Idea",
  },
  {
    id: "house-32", name: "Ceramic Essential Oil Diffuser", category: "household", price: "$29.99", store: "Vitruvi",
    description: "Stone ceramic ultrasonic essential oil diffuser. 500ml tank, 7-color mood light. Whisper-quiet, auto shut-off.",
    image: "https://m.media-amazon.com/images/I/71XGQmOqDgL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07QFVYQC5?tag=triplefindsho-20", badge: "Wellness",
  },
  {
    id: "house-33", name: "The Complete Cooking for Two Cookbook", category: "household", price: "$19.99", store: "America's Test Kitchen",
    description: "650+ recipes perfectly scaled for two people. Color photos, step-by-step techniques. The #1 couples cookbook.",
    image: "https://m.media-amazon.com/images/I/71jG5a5BizL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0GFCZTRKL?tag=triplefindsho-20", badge: "Bestseller",
  },
  {
    id: "house-34", name: "Coir Welcome Mat with Monogram", category: "household", price: "$24.99", store: "Entryway Decor",
    description: "Personalized coir coconut fiber welcome mat. 18x30 inches, weather-resistant. Add your family initial or name.",
    image: "https://m.media-amazon.com/images/I/71KSc3GqR-L._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B01L6OCXAS?tag=triplefindsho-20", badge: "Home",
  },
  {
    id: "house-35", name: "Indoor Herb Garden Kit with LED", category: "household", price: "$39.99", store: "AeroGarden",
    description: "Self-watering indoor herb garden with full-spectrum LED grow light. Grows basil, mint, cilantro year-round. No soil needed.",
    image: "https://m.media-amazon.com/images/I/81JSQkYj3vL._AC_SX466_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B09QLJ65LF?tag=triplefindsho-20", badge: "Green Thumb",
  },
];

export function getProductsByCategory(category: CategoryId): Product[] {
  return products.filter((p) => p.category === category);
}

export function getCategoryInfo(category: CategoryId) {
  return categories.find((c) => c.id === category)!;
}