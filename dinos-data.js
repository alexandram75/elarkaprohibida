(function () {
    function slug(name) {
        return name.toLowerCase()
            .normalize('NFD').replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    function formatEs(n) {
        return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    function tiered(d, aberranteExtra) {
        const variants = [
            { label: 'Nivel 300 · Normal', type: 'Nivel 300', price: d.price300 },
            { label: 'Nivel 450 · Normal', type: 'Nivel 450', price: d.price450 }
        ];

        if (d.aberrant) {
            const extraNote = `☣️ Variante Aberrante: +${formatEs(aberranteExtra)} puntos sobre el precio base`;
            variants.push(
                { label: 'Nivel 300 · Aberrante', type: 'Nivel 300', price: d.price300 + aberranteExtra, info: [extraNote] },
                { label: 'Nivel 450 · Aberrante', type: 'Nivel 450', price: d.price450 + aberranteExtra, info: [extraNote] }
            );
        }

        return {
            id: slug(d.name),
            name: d.name,
            tag: d.category,
            image: d.image || null,
            variants
        };
    }

    fetch('data/dinos.json')
        .then(res => res.json())
        .then(cfg => {
            window.SHOP_DATA = cfg.dinos.map(d => tiered(d, cfg.aberranteExtra));
            window.ShopUI.init(window.SHOP_DATA);
        });
})();
