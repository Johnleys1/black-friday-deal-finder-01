// Rendering: deal cards, the deal detail page and the cross-store
// comparison page. All markup is built here; app.js only wires events.

import { DEALS, META, sameProductGroups } from './data.js';
import { discountPct, saveAmount, money } from './filters.js';
import { storeLink } from './store.js';

const VERDICT_TEXT = {
  'NEW LOW': 'New low — cheapest we have seen',
  STRONG: 'Strong price — a real cut',
  ROUTINE: 'Routine sale — a modest cut',
  INFLATED: 'Inflated was-price — read the note',
};

export function esc(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export function verdictClass(v) {
  return { 'NEW LOW': '', STRONG: ' strong', ROUTINE: ' routine', INFLATED: ' inflated' }[v] || '';
}

export function dealCard(d) {
  const pct = discountPct(d);
  const unit = d.unit ? ` ${esc(d.unit)}` : '';
  return `
  <article class="card verdict-${d.verdict.toLowerCase().replace(' ', '-')}" data-id="${esc(d.id)}">
    <div class="card-top">
      <span class="badge${verdictClass(d.verdict)}">${esc(d.verdict)}</span>
      <span class="pct">−${pct}%</span>
    </div>
    <h3><a href="#/deal/${esc(d.id)}">${esc(d.name)}</a></h3>
    <p class="meta-line">${esc(d.brand)} · ${esc(d.cat)} · ${esc(d.store)}</p>
    <p class="prices"><span class="sale">${money(d.sale)}${unit}</span>
      <span class="usual">${money(d.usual)}${unit}</span>
      <span class="save">save ${money(saveAmount(d))}</span></p>
    <p class="evidence">${esc(d.evidence)}</p>
    <p class="source">Source: ${esc(d.source)} · checked ${esc(META.checkedDay)}</p>
    <div class="card-actions">
      <a class="btn" href="${esc(storeLink(d))}" target="_blank" rel="noopener">View at ${esc(d.store)} ↗</a>
      <a class="btn ghost" href="#/deal/${esc(d.id)}">Details</a>
    </div>
  </article>`;
}

export function renderList(deals) {
  if (!deals.length) {
    return `<p class="empty">No deals match those filters. Try clearing the search or lowering the minimum discount.</p>`;
  }
  return `<p class="count">${deals.length} deal${deals.length === 1 ? '' : 's'} shown · sorted as chosen above</p>
  <div class="grid">${deals.map(dealCard).join('')}</div>`;
}

export function renderDetail(id) {
  const d = DEALS.find((x) => x.id === id);
  if (!d) return `<p class="empty">That deal is not on the list. <a href="#/">Back to all deals</a>.</p>`;
  const pct = discountPct(d);
  const unit = d.unit ? ` ${esc(d.unit)}` : '';
  const siblings = DEALS.filter((x) => x.name === d.name && x.id !== d.id);
  const sameCat = DEALS.filter((x) => x.cat === d.cat && x.id !== d.id).slice(0, 4);
  return `
  <p class="crumb"><a href="#/">← All deals</a> · ${esc(d.cat)} · ${esc(d.store)}</p>
  <article class="detail">
    <span class="badge big${verdictClass(d.verdict)}">${esc(d.verdict)}</span>
    <h2>${esc(d.name)}</h2>
    <p class="meta-line">${esc(d.brand)} · ${esc(d.cat)}</p>
    <p class="prices big"><span class="sale">${money(d.sale)}${unit}</span>
      <span class="usual">${money(d.usual)}${unit}</span>
      <span class="pct">−${pct}%</span>
      <span class="save">you save ${money(saveAmount(d))}</span></p>
    <p class="verdict-note"><strong>${esc(VERDICT_TEXT[d.verdict])}.</strong> ${esc(d.evidence)}</p>
    <p class="source">Price read from: ${esc(d.source)} · checked ${esc(META.checkedDay)}.
      Prices move all day on Black Friday — confirm the live price at the store before you buy.</p>
    <a class="btn big" href="${esc(storeLink(d))}" target="_blank" rel="noopener">View at ${esc(d.store)} ↗</a>
    ${siblings.length ? `<h3>Same product at other stores</h3>
    <div class="grid">${siblings.map(dealCard).join('')}</div>` : ''}
    <h3>More in ${esc(d.cat)}</h3>
    <div class="grid">${sameCat.map(dealCard).join('')}</div>
  </article>`;
}

export function renderCompare() {
  const groups = sameProductGroups();
  const rows = groups
    .map((g) => {
      const best = [...g].sort((a, b) => a.sale - b.sale)[0];
      return `<section class="compare-group">
      <h3>${esc(g[0].name)}</h3>
      <table class="compare-table">
        <thead><tr><th>Store</th><th>Sale price</th><th>Usual price</th><th>Off</th><th>Verdict</th><th></th></tr></thead>
        <tbody>${g
          .map(
            (d) => `<tr class="${d.id === best.id ? 'best-row' : ''}">
              <td>${esc(d.store)}${d.id === best.id ? ' ★ cheapest' : ''}</td>
              <td>${money(d.sale)}</td><td>${money(d.usual)}</td>
              <td>−${discountPct(d)}%</td><td>${esc(d.verdict)}</td>
              <td><a href="${esc(storeLink(d))}" target="_blank" rel="noopener">View ↗</a></td>
            </tr>`,
          )
          .join('')}</tbody>
      </table>
      <p class="evidence">${esc(best.evidence)}</p>
    </section>`;
    })
    .join('');
  return `<h2>Same product, different stores</h2>
  <p class="intro">Three products we found at two or more stores. The cheapest row is marked — a
  “deal” at one store is often the everyday price at another.</p>${rows}`;
}
