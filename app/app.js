// Bargain Beacon wiring: hash routing (#/, #/deal/<id>, #/compare),
// the search box, the filter controls and the sort control.
// State lives in one object; every change re-renders the list.

import { DEALS, META } from './data.js';
import { filterDeals, sortDeals, categoriesOf } from './filters.js';
import { renderList, renderDetail, renderCompare } from './views.js';

const state = { q: '', cat: 'All', store: 'All', minPct: 0, verdict: 'All', sort: 'verdict' };

const $ = (sel) => document.querySelector(sel);

function buildControls() {
  const catSel = $('#cat');
  for (const c of categoriesOf(DEALS)) {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = `${c} (${DEALS.filter((d) => d.cat === c).length})`;
    catSel.appendChild(opt);
  }
  const storeSel = $('#store');
  for (const s of [...new Set(DEALS.map((d) => d.store))].sort()) {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = `${s} (${DEALS.filter((d) => d.store === s).length})`;
    storeSel.appendChild(opt);
  }
}

function currentList() {
  return sortDeals(filterDeals(DEALS, state), state.sort);
}

function render() {
  const hash = location.hash || '#/';
  const view = $('#view');
  if (hash.startsWith('#/deal/')) {
    view.innerHTML = renderDetail(hash.slice(7));
    document.title = 'Deal detail · Bargain Beacon';
    return;
  }
  if (hash === '#/compare') {
    view.innerHTML = renderCompare();
    document.title = 'Compare stores · Bargain Beacon';
    return;
  }
  view.innerHTML = renderList(currentList());
  document.title = 'Bargain Beacon — Black Friday Deal Finder';
}

function wire() {
  $('#q').addEventListener('input', (e) => {
    state.q = e.target.value;
    render();
  });
  $('#cat').addEventListener('change', (e) => {
    state.cat = e.target.value;
    render();
  });
  $('#store').addEventListener('change', (e) => {
    state.store = e.target.value;
    render();
  });
  $('#minPct').addEventListener('change', (e) => {
    state.minPct = Number(e.target.value);
    render();
  });
  $('#verdict').addEventListener('change', (e) => {
    state.verdict = e.target.value;
    render();
  });
  $('#sort').addEventListener('change', (e) => {
    state.sort = e.target.value;
    render();
  });
  $('#clear').addEventListener('click', () => {
    Object.assign(state, { q: '', cat: 'All', store: 'All', minPct: 0, verdict: 'All', sort: 'verdict' });
    $('#q').value = '';
    $('#cat').value = 'All';
    $('#store').value = 'All';
    $('#minPct').value = '0';
    $('#verdict').value = 'All';
    $('#sort').value = 'verdict';
    render();
  });
  window.addEventListener('hashchange', render);
}

function fillStats() {
  const el = $('#stats');
  el.innerHTML = `<span><strong>${META.dealCount}</strong> deals</span>
    <span><strong>${META.storeCount}</strong> stores</span>
    <span><strong>${META.categoryCount}</strong> categories</span>
    <span><strong>${META.newLowCount}</strong> new lows</span>
    <span>biggest cut <strong>−${META.biggestCutPct}%</strong></span>`;
}

buildControls();
wire();
fillStats();
render();
