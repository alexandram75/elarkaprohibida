(function () {
    function init(data) {
    const grid = document.getElementById('shopGrid');
    if (!grid) return;

    const PLACEHOLDER = 'images/dino-placeholder.svg';
    data = data || [];

    const searchInput = document.getElementById('shopSearch');
    const filterSelect = document.getElementById('shopFilter');
    const browse = document.getElementById('shopBrowse');
    const detailPanel = document.getElementById('detailPanel');
    const detailBack = document.getElementById('detailBack');
    const detailImage = document.getElementById('detailImage');
    const detailName = document.getElementById('detailName');
    const detailTag = document.getElementById('detailTag');
    const variantList = document.getElementById('variantList');

    function formatPoints(n) {
        return n.toLocaleString('es-ES') + ' puntos';
    }

    function buildFilterOptions() {
        const values = new Set();
        data.forEach(d => {
            if (d.tag) values.add(d.tag);
            (d.variants || []).forEach(v => { if (v.type) values.add(v.type); });
        });
        [...values].sort().forEach(v => {
            const opt = document.createElement('option');
            opt.value = v;
            opt.textContent = v;
            filterSelect.appendChild(opt);
        });
    }

    function matches(d, term, filter) {
        const nameMatch = d.name.toLowerCase().includes(term);
        if (!filter) return nameMatch;
        const tagMatch = d.tag === filter;
        const variantMatch = (d.variants || []).some(v => v.type === filter);
        return nameMatch && (tagMatch || variantMatch);
    }

    function renderGrid() {
        const term = (searchInput.value || '').toLowerCase().trim();
        const filter = filterSelect.value;
        grid.innerHTML = '';

        const results = data.filter(d => matches(d, term, filter));

        if (!results.length) {
            const empty = document.createElement('p');
            empty.className = 'shop-empty';
            empty.textContent = 'No se encontraron dinos con esos filtros.';
            grid.appendChild(empty);
            return;
        }

        results.forEach(d => {
            const card = document.createElement('div');
            card.className = 'box dino-card';
            card.innerHTML = `
                <span class="shop-tag">${d.tag}</span>
                <img src="${d.image || PLACEHOLDER}" alt="${d.name}" loading="lazy">
                <h3>${d.name}</h3>
                <button type="button" class="btn">Ver variantes</button>
            `;
            const img = card.querySelector('img');
            img.addEventListener('error', () => { img.src = PLACEHOLDER; }, { once: true });
            card.addEventListener('click', () => openDetail(d));
            grid.appendChild(card);
        });
    }

    function openDetail(d) {
        detailImage.src = d.image || PLACEHOLDER;
        detailImage.alt = d.name;
        detailImage.addEventListener('error', () => { detailImage.src = PLACEHOLDER; }, { once: true });
        detailName.textContent = d.name;
        detailTag.textContent = d.tag;

        variantList.innerHTML = '';
        (d.variants || []).forEach(v => {
            const card = document.createElement('div');
            card.className = 'box variant-card';
            const infoHtml = v.info && v.info.length
                ? `<ul class="variant-info">${v.info.map(i => `<li>${i}</li>`).join('')}</ul>`
                : '';
            card.innerHTML = `
                <div class="variant-main">
                    <span class="shop-tag">${v.label}</span>
                    <h3>${d.name} — ${v.label}</h3>
                    ${infoHtml}
                </div>
                <div class="variant-price">
                    <span class="price-label">PRECIO</span>
                    <span class="price-value">${typeof v.price === 'number' ? formatPoints(v.price) : v.price}</span>
                </div>
            `;
            variantList.appendChild(card);
        });

        browse.hidden = true;
        detailPanel.hidden = false;
        window.scrollTo({ top: detailPanel.offsetTop - 100, behavior: 'smooth' });
    }

    function closeDetail() {
        detailPanel.hidden = true;
        browse.hidden = false;
    }

    searchInput.addEventListener('input', renderGrid);
    filterSelect.addEventListener('change', renderGrid);
    detailBack.addEventListener('click', closeDetail);

    buildFilterOptions();
    renderGrid();
    }

    window.ShopUI = { init: init };
})();
