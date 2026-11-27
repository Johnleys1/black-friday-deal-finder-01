// Bargain Beacon deal data — every deal below was read by the builder on
// 27 Nov 2026 from the named source (a store page or a deals roundup that
// names the store). "checked" is the day this file's prices were verified.
// Sale and usual prices are USD; "unit" is "each" unless noted.
// verdict: NEW LOW | STRONG | ROUTINE | INFLATED (see verdicts in views.js)

export const META = {
  checkedDay: '27 Nov 2026',
  dealCount: 50,
  storeCount: 7,
  categoryCount: 10,
  newLowCount: 17,
  biggestCutPct: 68,
  note: 'Prices move all day on Black Friday. Confirm the live price at the store before you buy.',
};

export const DEALS = [
  // ---- Audio ----
  { id: 'airpods-pro-3-amazon', name: 'Apple AirPods Pro 3 with Active Noise Cancellation', brand: 'Apple', cat: 'Audio', store: 'Amazon', sale: 149, usual: 249, source: 'Black Friday Deals Diary 2026 (trendthread.space), 27 Nov', verdict: 'NEW LOW', evidence: 'Lowest price ever — dropped from $169 overnight to $149 today.', query: 'Apple AirPods Pro 3' },
  { id: 'airpods-pro-3-target', name: 'Apple AirPods Pro 3 with Active Noise Cancellation', brand: 'Apple', cat: 'Audio', store: 'Target', sale: 169.99, usual: 249, source: 'Best Black Friday deals live now (mcgraw-media.com), 24 Nov', verdict: 'STRONG', evidence: 'Same earbuds, $21 more than Amazon’s $149 — still $79 under list.', query: 'Apple AirPods Pro 3' },
  { id: 'airpods-pro-3-bestbuy', name: 'Apple AirPods Pro 3 with Active Noise Cancellation', brand: 'Apple', cat: 'Audio', store: 'Best Buy', sale: 180, usual: 249, source: 'Black Friday Deals Diary 2026 (trendthread.space), 27 Nov', verdict: 'ROUTINE', evidence: 'Best Buy lists $180; Amazon’s $149 beats it by $31.', query: 'Apple AirPods Pro 3' },
  { id: 'sony-xm5-bestbuy', name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones', brand: 'Sony', cat: 'Audio', store: 'Best Buy', sale: 169, usual: 399, source: 'Black Friday Deals 2026 (beebulletin.com), 24 Nov', verdict: 'NEW LOW', evidence: 'Best Buy doorbuster; $230 under list, the cheapest XM5 of the season.', query: 'Sony WH-1000XM5 headphones' },
  { id: 'bose-qc-amazon', name: 'Bose QuietComfort Headphones', brand: 'Bose', cat: 'Audio', store: 'Amazon', sale: 169, usual: 359, source: 'Yahoo Shopping Black Friday roundup, 22 Nov', verdict: 'NEW LOW', evidence: 'Editors call it “just about as low as it gets” for this model.', query: 'Bose QuietComfort Headphones' },
  { id: 'beats-studio-pro-amazon', name: 'Beats Studio Pro Over-Ear Headphones', brand: 'Beats', cat: 'Audio', store: 'Amazon', sale: 149, usual: 299, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: 'Half price on a current flagship over-ear.', query: 'Beats Studio Pro headphones' },
  { id: 'beats-solo-4-amazon', name: 'Beats Solo 4 On-Ear Headphones', brand: 'Beats', cat: 'Audio', store: 'Amazon', sale: 100, usual: 200, source: 'Yahoo Shopping Black Friday roundup, 22 Nov', verdict: 'STRONG', evidence: 'Half price; the $200 list holds all year.', query: 'Beats Solo 4 headphones' },
  { id: 'echo-show-5-amazon', name: 'Amazon Echo Show 5 (newest model)', brand: 'Amazon', cat: 'Audio', store: 'Amazon', sale: 54, usual: 99, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: '45% off Amazon’s own smart display.', query: 'Amazon Echo Show 5' },
  { id: 'echo-spot-amazon', name: 'Amazon Echo Spot Smart Alarm Clock', brand: 'Amazon', cat: 'Audio', store: 'Amazon', sale: 44, usual: 109, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: '60% off; the deepest Echo cut in this sale.', query: 'Amazon Echo Spot' },
  { id: 'fire-stick-4k-max-amazon', name: 'Amazon Fire TV Stick 4K Max (newest model)', brand: 'Amazon', cat: 'Audio', store: 'Amazon', sale: 44, usual: 85, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: 'Nearly half price on the newest 4K Max stick.', query: 'Amazon Fire TV Stick 4K Max' },

  // ---- TVs ----
  { id: 'tcl-65-bestbuy', name: 'TCL 65-inch 4K UHD HDR Smart TV with Fire TV (2026)', brand: 'TCL', cat: 'TVs', store: 'Best Buy', sale: 229.99, usual: 469.99, source: 'Black Friday Deals 2026 (beebulletin.com), 24 Nov', verdict: 'NEW LOW', evidence: '$240 off; Best Buy’s doorbuster TV of the day.', query: 'TCL 65 inch 4K Fire TV' },
  { id: 'hisense-98-bestbuy', name: 'Hisense 98-inch QD5 Hi-QLED 4K TV', brand: 'Hisense', cat: 'TVs', store: 'Best Buy', sale: 800, usual: 2500, source: 'Black Friday Deals Diary 2026 (trendthread.space), 27 Nov', verdict: 'NEW LOW', evidence: '68% off a 98-inch set — the biggest TV cut we found.', query: 'Hisense 98 inch QD5 TV' },
  { id: 'samsung-frame-65-amazon', name: 'Samsung 65-inch Class The Frame Art TV (2026)', brand: 'Samsung', cat: 'TVs', store: 'Amazon', sale: 997, usual: 1400, source: 'BuzzFeed Shopping — Amazon Black Friday picks, Nov 2026', verdict: 'STRONG', evidence: 'Best recorded price for the 2026 Frame.', query: 'Samsung 65 inch The Frame TV' },
  { id: 'insignia-50-amazon', name: 'Insignia 50-inch Class F50 Series LED 4K TV', brand: 'Insignia', cat: 'TVs', store: 'Amazon', sale: 149, usual: 300, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: 'Half price on a 50-inch 4K Fire TV.', query: 'Insignia 50 inch F50 Fire TV' },
  { id: 'roku-32-amazon', name: 'Roku 32-inch Select Series Smart TV 2026', brand: 'Roku', cat: 'TVs', store: 'Amazon', sale: 99, usual: 180, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: '45% off a 32-inch smart TV — under $100.', query: 'Roku 32 inch Select Series TV' },
  { id: 'hisense-75-walmart', name: 'Hisense 75-inch Class H5R1 Series 4K UHD HDR Smart Roku TV', brand: 'Hisense', cat: 'TVs', store: 'Walmart', sale: 328, usual: 668, source: 'ComicBook — Walmart Early Black Friday Deals, Nov 2026', verdict: 'STRONG', evidence: '51% off a 75-inch 4K Roku TV at Walmart.', query: 'Hisense 75 inch H5R1 Roku TV' },
  { id: 'hisense-u7-amazon', name: 'Hisense U7 Mini-LED 65-inch 4K TV', brand: 'Hisense', cat: 'TVs', store: 'Amazon', sale: 797.99, usual: 1497.99, source: 'Product Bible — Amazon Black Friday Deals 2026, checked 19 Nov', verdict: 'INFLATED', evidence: 'The was-price is the list price; this TV’s street price was about $998. Still a fair price — not a 47% cut.', query: 'Hisense U7 65 inch Mini-LED TV' },
  { id: 'samsung-u8000h-costco', name: 'Samsung 65-inch U8000H Crystal UHD 4K Smart TV', brand: 'Samsung', cat: 'TVs', store: 'Costco', sale: 300, usual: 538, source: 'WalletHub — Best Things to Buy on Black Friday 2026', verdict: 'STRONG', evidence: 'Costco member price; $238 under the pre-sale price.', query: 'Samsung 65 U8000H Crystal UHD TV' },

  // ---- Computers ----
  { id: 'macbook-air-13-m5-amazon', name: 'Apple MacBook Air 13-inch, M5 chip (2026)', brand: 'Apple', cat: 'Computers', store: 'Amazon', sale: 989, usual: 1299, source: 'Black Friday Deals Diary 2026 (trendthread.space), 27 Nov', verdict: 'NEW LOW', evidence: 'Lowest yet on the M5 Air; $310 under list.', query: 'Apple MacBook Air 13 M5' },
  { id: 'macbook-air-13-bestbuy', name: 'Apple MacBook Air 13-inch Laptop', brand: 'Apple', cat: 'Computers', store: 'Best Buy', sale: 1049, usual: 1299, source: 'Best Buy Black Friday release, 17 Nov', verdict: 'STRONG', evidence: 'Same laptop, $60 more than Amazon’s $989.', query: 'Apple MacBook Air 13 inch laptop' },
  { id: 'macbook-air-15-m5-amazon', name: 'Apple MacBook Air 15-inch, M5 chip (2026)', brand: 'Apple', cat: 'Computers', store: 'Amazon', sale: 1199, usual: 1499, source: 'Black Friday Deals Diary 2026 (trendthread.space), 27 Nov', verdict: 'STRONG', evidence: '20% off the 15-inch M5; top configs carry up to $400 off.', query: 'Apple MacBook Air 15 M5' },
  { id: 'kindle-paperwhite-amazon', name: 'Amazon Kindle Paperwhite (newest model)', brand: 'Amazon', cat: 'Computers', store: 'Amazon', sale: 129.99, usual: 199.99, source: 'Product Bible — Amazon Black Friday Deals 2026, checked 19 Nov', verdict: 'NEW LOW', evidence: '$20 under Prime Day; lowest on this listing.', query: 'Amazon Kindle Paperwhite' },
  { id: 'dell-xps-13-amazon', name: 'Dell XPS 13 Laptop', brand: 'Dell', cat: 'Computers', store: 'Amazon', sale: 899.99, usual: 1299.99, source: 'Product Bible — Amazon Black Friday Deals 2026, checked 19 Nov', verdict: 'NEW LOW', evidence: '365-day low on the XPS 13.', query: 'Dell XPS 13 laptop' },
  { id: 'hp-omnibook-bestbuy', name: 'HP OmniBook 5 — 14-inch 2K OLED Touchscreen Laptop', brand: 'HP', cat: 'Computers', store: 'Best Buy', sale: 449.99, usual: 799.99, source: 'Best Buy Black Friday release, 17 Nov', verdict: 'STRONG', evidence: '$350 off a 2K OLED touchscreen laptop.', query: 'HP OmniBook 5 14 OLED laptop' },
  { id: 'pixel-11-pro-amazon', name: 'Google Pixel 11 Pro — Unlocked', brand: 'Google', cat: 'Computers', store: 'Amazon', sale: 749, usual: 1099, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: '32% off Google’s flagship Pixel.', query: 'Google Pixel 11 Pro unlocked' },
  { id: 'galaxy-s26-fe-bestbuy', name: 'Samsung Galaxy S26 FE, Unlocked', brand: 'Samsung', cat: 'Computers', store: 'Best Buy', sale: 499.99, usual: 699.99, source: 'Best Buy Black Friday release, 17 Nov', verdict: 'STRONG', evidence: '$200 off the Galaxy S26 FE.', query: 'Samsung Galaxy S26 FE' },

  // ---- Wearables ----
  { id: 'apple-watch-s12-amazon', name: 'Apple Watch Series 12 (GPS)', brand: 'Apple', cat: 'Wearables', store: 'Amazon', sale: 299, usual: 399, source: 'Black Friday Deals Diary 2026 (trendthread.space), 27 Nov', verdict: 'STRONG', evidence: 'Starts at $299 — $100 off the new Series 12.', query: 'Apple Watch Series 12' },
  { id: 'apple-watch-se3-amazon', name: 'Apple Watch SE 3 GPS 40mm', brand: 'Apple', cat: 'Wearables', store: 'Amazon', sale: 179, usual: 250, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: '28% off the new SE 3.', query: 'Apple Watch SE 3 40mm' },
  { id: 'oura-ring-5-amazon', name: 'Oura Ring 5 Smart Ring', brand: 'Oura', cat: 'Wearables', store: 'Amazon', sale: 299, usual: 399, source: 'Product Bible — Amazon Black Friday Deals 2026, checked 19 Nov', verdict: 'NEW LOW', evidence: 'Lowest price since its May launch.', query: 'Oura Ring 5' },
  { id: 'galaxy-watch-8-amazon', name: 'Samsung Galaxy Watch 8 40mm', brand: 'Samsung', cat: 'Wearables', store: 'Amazon', sale: 199, usual: 299, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: 'A third off Samsung’s latest watch.', query: 'Samsung Galaxy Watch 8 40mm' },

  // ---- Smart Home ----
  { id: 'ring-doorbell-amazon', name: 'Ring Battery Doorbell 2K (newest model)', brand: 'Ring', cat: 'Smart Home', store: 'Amazon', sale: 38, usual: 100, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'NEW LOW', evidence: '62% off — the deepest smart-home cut we found.', query: 'Ring Battery Doorbell 2K' },
  { id: 'blink-doorbell-amazon', name: 'Blink Battery Doorbell 2K+', brand: 'Blink', cat: 'Smart Home', store: 'Amazon', sale: 30, usual: 70, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: '57% off a 2K battery doorbell.', query: 'Blink Battery Doorbell 2K' },
  { id: 'eufy-solocam-amazon', name: 'eufy Security SoloCam S340 Solar Security Camera', brand: 'eufy', cat: 'Smart Home', store: 'Amazon', sale: 109, usual: 219, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: 'Half price on a solar security camera.', query: 'eufy SoloCam S340' },
  { id: 'roomba-105-amazon', name: 'iRobot Roomba 105 Vac Robot Vacuum', brand: 'iRobot', cat: 'Smart Home', store: 'Amazon', sale: 139, usual: 300, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: '54% off iRobot’s newest vac.', query: 'iRobot Roomba 105 Vac' },
  { id: 'hue-bulb-amazon', name: 'Philips Hue Smart LED A19 Bulb, 2-Pack', brand: 'Philips Hue', cat: 'Smart Home', store: 'Amazon', sale: 71, usual: 99, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'ROUTINE', evidence: 'A solid 28% off Hue — a routine, honest cut.', query: 'Philips Hue A19 bulb 2 pack' },

  // ---- Gaming ----
  { id: 'switch-2-bundle-amazon', name: 'Nintendo Switch 2 + Mario Kart World Bundle', brand: 'Nintendo', cat: 'Gaming', store: 'Amazon', sale: 499.99, usual: 499.99, source: 'Black Friday Deals 2026 (beebulletin.com), 24 Nov', verdict: 'ROUTINE', evidence: 'Bundle at list price. The only saving is vs console + game bought separately ($529.98).', query: 'Nintendo Switch 2 Mario Kart World bundle' },
  { id: 'dualsense-amazon', name: 'PlayStation DualSense Wireless Controller', brand: 'Sony', cat: 'Gaming', store: 'Amazon', sale: 54, usual: 75, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: '28% off the DualSense — a real cut on a first-party pad.', query: 'PlayStation DualSense wireless controller' },
  { id: 'xbox-controller-amazon', name: 'Xbox Wireless Gaming Controller', brand: 'Microsoft', cat: 'Gaming', store: 'Amazon', sale: 49, usual: 70, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'STRONG', evidence: '30% off the Xbox controller.', query: 'Xbox wireless controller' },
  { id: 'fc-27-amazon', name: 'EA SPORTS FC 27 Standard Edition — PlayStation 5', brand: 'EA Sports', cat: 'Gaming', store: 'Amazon', sale: 29, usual: 70, source: 'Redmond Pie — 100+ Best Tech Deals, 27 Nov', verdict: 'NEW LOW', evidence: '59% off a current EA Sports title.', query: 'EA Sports FC 27 PS5' },

  // ---- Kitchen ----
  { id: 'dyson-v9-walmart', name: 'Dyson V9 Motorbar Cordless Vacuum', brand: 'Dyson', cat: 'Kitchen', store: 'Walmart', sale: 270, usual: 600, source: 'Yahoo Shopping Black Friday roundup, 22 Nov', verdict: 'NEW LOW', evidence: 'Over 50% off; Walmart’s headline Dyson.', query: 'Dyson V9 Motorbar cordless vacuum' },
  { id: 'dyson-v9-amazon', name: 'Dyson V9 Motorbar Cordless Vacuum', brand: 'Dyson', cat: 'Kitchen', store: 'Amazon', sale: 269.95, usual: 599.99, source: 'Popular Science — 200+ Amazon Black Friday deals, 24 Nov', verdict: 'NEW LOW', evidence: 'Same vacuum, 5 cents under Walmart’s $270.', query: 'Dyson V9 Motorbar cordless vacuum' },
  { id: 'dyson-v15-amazon', name: 'Dyson V15 Detect Cordless Vacuum', brand: 'Dyson', cat: 'Kitchen', store: 'Amazon', sale: 598.5, usual: 849.99, source: 'Product Bible — Amazon Black Friday Deals 2026, checked 19 Nov', verdict: 'NEW LOW', evidence: 'Lowest price this Amazon listing has had.', query: 'Dyson V15 Detect cordless vacuum' },
  { id: 'shark-navigator-amazon', name: 'Shark Navigator Lift-Away Upright Vacuum', brand: 'Shark', cat: 'Kitchen', store: 'Amazon', sale: 169.99, usual: 299.99, source: 'Popular Science — 200+ Amazon Black Friday deals, 24 Nov', verdict: 'STRONG', evidence: '43% off a Lift-Away upright.', query: 'Shark Navigator Lift-Away vacuum' },
  { id: 'kitchenaid-artisan-amazon', name: 'KitchenAid Artisan 5-Quart Tilt-Head Stand Mixer', brand: 'KitchenAid', cat: 'Kitchen', store: 'Amazon', sale: 349.95, usual: 499.95, source: 'BuzzFeed Shopping — Amazon Black Friday picks, Nov 2026', verdict: 'STRONG', evidence: 'Best price in over a year, in most colors.', query: 'KitchenAid Artisan 5 quart stand mixer' },
  { id: 'kitchenaid-artisan-kohls', name: 'KitchenAid Artisan 5-Quart Tilt-Head Stand Mixer', brand: 'KitchenAid', cat: 'Kitchen', store: 'Kohl’s', sale: 350, usual: 500, source: 'WalletHub — Best Things to Buy on Black Friday 2026', verdict: 'STRONG', evidence: 'Same mixer, same price as Amazon — Kohl’s matches it.', query: 'KitchenAid Artisan 5 quart stand mixer' },
  { id: 'ninja-airfryer-amazon', name: 'Ninja Air Fryer XL', brand: 'Ninja', cat: 'Kitchen', store: 'Amazon', sale: 89.99, usual: 179.99, source: 'Popular Science — 200+ Amazon Black Friday deals, 24 Nov', verdict: 'NEW LOW', evidence: 'Half price on the XL air fryer.', query: 'Ninja Air Fryer XL' },

  // ---- Toys ----
  { id: 'lego-battle-droid-amazon', name: 'LEGO Star Wars Battle Droid with STAP', brand: 'LEGO', cat: 'Toys', store: 'Amazon', sale: 83.99, usual: 139.99, source: 'Popular Science — 200+ Amazon Black Friday deals, 24 Nov', verdict: 'STRONG', evidence: '40% off a LEGO Star Wars set.', query: 'LEGO Star Wars Battle Droid STAP' },
  { id: 'lego-trex-amazon', name: 'LEGO Creator 3-in-1 T. rex', brand: 'LEGO', cat: 'Toys', store: 'Amazon', sale: 41.99, usual: 59.99, source: 'Popular Science — 200+ Amazon Black Friday deals, 24 Nov', verdict: 'STRONG', evidence: '30% off the 3-in-1 T. rex.', query: 'LEGO Creator 3-in-1 T rex' },

  // ---- Home ----
  { id: 'beckham-pillows-amazon', name: 'Beckham Hotel Collection Pillows, Queen (2-Pack)', brand: 'Beckham Hotel Collection', cat: 'Home', store: 'Amazon', sale: 37.87, usual: 59.99, source: 'BuzzFeed Shopping — Amazon Black Friday picks, Nov 2026', verdict: 'NEW LOW', evidence: 'Cheapest all year for the queen set.', query: 'Beckham Hotel Collection pillows queen' },

  // ---- Streaming ----
  { id: 'disney-hulu-bundle', name: 'Disney+ & Hulu Bundle (with ads), 12 months', brand: 'Disney', cat: 'Streaming', store: 'Disney+', sale: 4.99, usual: 12.99, unit: 'per month', source: 'Medium — Black Friday Without the Noise, Nov 2026', verdict: 'NEW LOW', evidence: '62% off for 12 months; ends 30 Nov.', query: 'Disney+ Hulu bundle deal' },
];

// Deals grouped by product name for the cross-store comparison view.
export function sameProductGroups() {
  const byName = new Map();
  for (const d of DEALS) {
    if (!byName.has(d.name)) byName.set(d.name, []);
    byName.get(d.name).push(d);
  }
  return [...byName.values()].filter((g) => g.length > 1);
}
