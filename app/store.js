// Store directory: how to link out to each store.
// Links go to the store's own search for the exact product, so the button
// always opens matching products at that store. No tracking parameters.

export const STORES = {
  Amazon: {
    label: 'Amazon',
    searchUrl: (q) => `https://www.amazon.com/s?k=${encodeURIComponent(q)}`,
  },
  'Best Buy': {
    label: 'Best Buy',
    searchUrl: (q) => `https://www.bestbuy.com/site/searchpage.jsp?st=${encodeURIComponent(q)}`,
  },
  Walmart: {
    label: 'Walmart',
    searchUrl: (q) => `https://www.walmart.com/search?q=${encodeURIComponent(q)}`,
  },
  Target: {
    label: 'Target',
    searchUrl: (q) => `https://www.target.com/s?searchTerm=${encodeURIComponent(q)}`,
  },
  Costco: {
    label: 'Costco',
    searchUrl: (q) => `https://www.costco.com/CatalogSearch?dept=All&keyword=${encodeURIComponent(q)}`,
  },
  'Kohl’s': {
    label: 'Kohl’s',
    searchUrl: (q) => `https://www.kohls.com/search.jsp?search=${encodeURIComponent(q)}`,
  },
  'Disney+': {
    label: 'Disney+',
    searchUrl: () => 'https://www.disneyplus.com/',
  },
};

export function storeLink(deal) {
  const store = STORES[deal.store];
  if (!store) return '#/';
  return store.searchUrl(deal.query || deal.name);
}

export function storeNames() {
  return Object.keys(STORES);
}
