// Filtering, searching and sorting for the deal list.
// Pure functions over the DEALS array — no DOM here, so the rules are
// testable on their own.

export const VERDICT_RANK = { 'NEW LOW': 0, STRONG: 1, ROUTINE: 2, INFLATED: 3 };

export function discountPct(deal) {
  if (!deal.usual || deal.usual <= 0) return 0;
  return Math.round((1 - deal.sale / deal.usual) * 100);
}

export function saveAmount(deal) {
  return Math.max(0, deal.usual - deal.sale);
}

export function money(n) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function filterDeals(deals, state) {
  const q = (state.q || '').trim().toLowerCase();
  return deals.filter((d) => {
    if (state.cat && state.cat !== 'All' && d.cat !== state.cat) return false;
    if (state.store && state.store !== 'All' && d.store !== state.store) return false;
    if (state.minPct && discountPct(d) < state.minPct) return false;
    if (state.verdict && state.verdict !== 'All' && d.verdict !== state.verdict) return false;
    if (q) {
      const hay = `${d.name} ${d.brand} ${d.cat} ${d.store} ${d.verdict}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function sortDeals(deals, sort) {
  const list = [...deals];
  switch (sort) {
    case 'verdict':
      return list.sort(
        (a, b) =>
          VERDICT_RANK[a.verdict] - VERDICT_RANK[b.verdict] ||
          discountPct(b) - discountPct(a),
      );
    case 'discount':
      return list.sort((a, b) => discountPct(b) - discountPct(a) || b.sale - a.sale);
    case 'saving':
      return list.sort((a, b) => saveAmount(b) - saveAmount(a));
    case 'price-low':
      return list.sort((a, b) => a.sale - b.sale);
    case 'price-high':
      return list.sort((a, b) => b.sale - a.sale);
    default:
      return list;
  }
}

export function categoriesOf(deals) {
  return [...new Set(deals.map((d) => d.cat))].sort();
}
