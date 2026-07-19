(function () {
    const grid = document.getElementById('rulesGrid');
    if (!grid) return;

    fetch('data/normas.json')
        .then(res => res.json())
        .then(cfg => {
            grid.innerHTML = cfg.sections.map(s => `
                <div class="box">
                    <h2>${s.title}</h2>
                    ${s.items.map(i => `<p>${i}</p>`).join('')}
                </div>
            `).join('');
        });
})();
