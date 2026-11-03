// Builds the menu tabs and panels from MENU (see menu.js).
(function () {
  var tabsEl = document.getElementById('tabs');
  var panelsEl = document.getElementById('panels');
  if (!tabsEl || !panelsEl || typeof MENU === 'undefined') return;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function tag(cls, label) { return el('span', 'tag ' + cls, label); }

  function buildItem(it) {
    var row = el('div', 'item');
    row.appendChild(el('span', 'code', it.code || ''));

    var info = document.createElement('div');
    var name = el('div', 'name', it.name);
    var flags = it.flags || '';
    if (flags.indexOf('s') > -1) name.appendChild(tag('t-s', 'Spicy'));
    if (flags.indexOf('p') > -1) name.appendChild(tag('t-p', 'Peanuts'));
    info.appendChild(name);
    info.appendChild(el('div', 'vi', it.vi));
    row.appendChild(info);

    var prices = String(it.price).split('/');
    var pr = el('div', 'pr', '$' + prices[0]);
    if (prices.length > 1) pr.appendChild(el('small', null, 'large $' + prices[1]));
    row.appendChild(pr);
    return row;
  }

  var tabs = [], panels = [];

  MENU.forEach(function (section, i) {
    var btn = el('button', null, section.title);
    btn.type = 'button';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    tabsEl.appendChild(btn);
    tabs.push(btn);

    var panel = el('div', 'panel');
    panel.setAttribute('role', 'tabpanel');
    panel.hidden = i !== 0;
    if (section.note) panel.appendChild(el('p', 'note', section.note));
    var list = el('div', 'items');
    section.items.forEach(function (it) { list.appendChild(buildItem(it)); });
    panel.appendChild(list);
    panelsEl.appendChild(panel);
    panels.push(panel);

    btn.addEventListener('click', function () {
      tabs.forEach(function (t, j) {
        t.setAttribute('aria-selected', j === i ? 'true' : 'false');
        panels[j].hidden = j !== i;
      });
    });
  });
})();
