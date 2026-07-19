(function () {
    function slug(name) {
        return name.toLowerCase()
            .normalize('NFD').replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    const INFO = ['🎚️ Nivel 450', '✂️ Se entrega castrado', '👤 Exclusivo para quien lo obtenga'];

    function dino(d) {
        return {
            id: slug(d.name),
            name: d.name,
            tag: 'Exclusivos',
            image: d.image || null,
            variants: d.variants.map(v => ({
                label: v.label,
                type: v.label,
                price: v.price,
                info: INFO
            }))
        };
    }

    fetch('data/exclusivos.json')
        .then(res => res.json())
        .then(cfg => {
            window.SHOP_DATA = cfg.dinos.map(dino);
            window.ShopUI.init(window.SHOP_DATA);
        });
})();
