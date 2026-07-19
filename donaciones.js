(function () {
    const packsGrid = document.getElementById('packsGrid');
    if (!packsGrid) return;

    fetch('data/donaciones.json')
        .then(res => res.json())
        .then(cfg => {
            packsGrid.innerHTML = cfg.packs.map(p => `
                <div class="box pack-card ${p.tier}${p.featured ? ' featured' : ''}">
                    ${p.featured ? '<span class="featured-tag">⭐ MÁS POPULAR</span>' : ''}
                    <img class="badge" src="${p.badge}" alt="Medalla ${p.title}">
                    <h2>${p.title}</h2>
                    <p class="pack-points">${p.points}</p>
                    <p class="pack-price">${p.price}</p>

                    <a class="btn" href="${cfg.paypalLink}" target="_blank">
                        ${p.buyLabel}
                    </a>
                </div>
            `).join('');

            const steps = document.getElementById('deliverySteps');
            steps.innerHTML = cfg.steps.map(s => `<p>${s}</p>`).join('');
        });
})();
