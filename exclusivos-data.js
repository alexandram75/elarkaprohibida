(function () {
    // Imagenes reales tomadas de ark.wiki.gg (investigadas y verificadas).
    // Pez Abisal, Perro Abisal y Golem de goma no existen en la wiki oficial
    // (probablemente criaturas propias del servidor) -> sin imagen, usan el placeholder.
    const IMAGES = {
        "Basilisco": "https://ark.wiki.gg/images/thumb/Basilisk.png/320px-Basilisk.png",
        "Karkinos": "https://ark.wiki.gg/images/thumb/Dossier_Karkinos.png/320px-Dossier_Karkinos.png",
        "Reaper": "https://ark.wiki.gg/images/thumb/Dossier_Reaper.png/320px-Dossier_Reaper.png",
        "Ossidón": "https://ark.wiki.gg/images/thumb/Ossidon.png/320px-Ossidon.png",
        "Mosasaurio": "https://ark.wiki.gg/images/thumb/Mosasaurus.png/320px-Mosasaurus.png",
        "Therizinosaurio": "https://ark.wiki.gg/images/thumb/Therizinosaur.png/320px-Therizinosaur.png",
        "Raptor": "https://ark.wiki.gg/images/thumb/Dossier_Raptor.png/320px-Dossier_Raptor.png",
        "Rex": "https://ark.wiki.gg/images/thumb/Rex.png/320px-Rex.png",
        "Wyvern": "https://ark.wiki.gg/images/thumb/Wyvern.png/320px-Wyvern.png",
        "Carnotaurus": "https://ark.wiki.gg/images/thumb/Dossier_Carnotaurus.png/320px-Dossier_Carnotaurus.png",
        "Giganotosaurio": "https://ark.wiki.gg/images/thumb/Giganotosaurus.png/320px-Giganotosaurus.png",
        "Estego": "https://ark.wiki.gg/images/thumb/Dossier_Stegosaurus.png/320px-Dossier_Stegosaurus.png",
        "Yi Ling": "https://ark.wiki.gg/images/thumb/Dossier_Yi_Ling.png/320px-Dossier_Yi_Ling.png",
        "Gigantraptor": "https://ark.wiki.gg/images/thumb/Dossier_Gigantoraptor.png/320px-Dossier_Gigantoraptor.png",
        "Búho de las Nieves": "https://ark.wiki.gg/images/thumb/Snow_Owl.png/320px-Snow_Owl.png",
        "Ceratosaurio": "https://ark.wiki.gg/images/thumb/Cerato_Dossier.png/320px-Cerato_Dossier.png",
        "Veilwyn": "https://ark.wiki.gg/images/thumb/Veilwyn.png/320px-Veilwyn.png",
        "Nutria": "https://ark.wiki.gg/images/thumb/Dossier_Otter.png/320px-Dossier_Otter.png",
        "Espinosaurio": "https://ark.wiki.gg/images/thumb/Spino.png/320px-Spino.png",
        "Deinonychus": "https://ark.wiki.gg/images/thumb/Deinonychus.png/320px-Deinonychus.png",
        "Mantis": "https://ark.wiki.gg/images/thumb/Dossier_Mantis.png/320px-Dossier_Mantis.png",
        "Gato": "https://ark.wiki.gg/images/thumb/Dossier_Cat.png/320px-Dossier_Cat.png",
        "Dragón de Roca": "https://ark.wiki.gg/images/thumb/Rock_Drake.png/320px-Rock_Drake.png",
        "Argentavis": "https://ark.wiki.gg/images/thumb/Dossier_Argentavis.png/320px-Dossier_Argentavis.png",
        "Deinosuchus": "https://ark.wiki.gg/images/thumb/Deinosuchus.png/320px-Deinosuchus.png",
        "Lobo": "https://ark.wiki.gg/images/thumb/Dossier_Direwolf.png/320px-Dossier_Direwolf.png",
        "Mamut": "https://ark.wiki.gg/images/thumb/Dossier_Mammoth.png/320px-Dossier_Mammoth.png",
        "Megalodón": "https://ark.wiki.gg/images/thumb/Dossier_Megalodon.png/320px-Dossier_Megalodon.png",
        "Tusoteuthis": "https://ark.wiki.gg/images/thumb/Tusoteuthis.png/320px-Tusoteuthis.png",
        "GigaDesmodus": "https://ark.wiki.gg/images/thumb/Gigadesmodus.png/320px-Gigadesmodus.png",
        "Neófito": "https://ark.wiki.gg/images/thumb/Noglin_image.png/320px-Noglin_image.png",
        "Yeti": "https://ark.wiki.gg/images/thumb/Yeti.jpg/320px-Yeti.jpg",
        "Amargasaurio": "https://ark.wiki.gg/images/thumb/Dossier_Amargasaurus.png/320px-Dossier_Amargasaurus.png",
        "Dinophitecus": "https://ark.wiki.gg/images/thumb/Dossier_Dinopithecus.png/320px-Dossier_Dinopithecus.png",
        "Sinomacrops": "https://ark.wiki.gg/images/thumb/Dossier_Sinomacrops.png/320px-Dossier_Sinomacrops.png",
        "Tropeoghnathus": "https://ark.wiki.gg/images/thumb/Dossier_Tropeognathus.png/320px-Dossier_Tropeognathus.png"
    };

    function slug(name) {
        return name.toLowerCase()
            .normalize('NFD').replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    const INFO = ['🎚️ Nivel 450', '✂️ Se entrega castrado', '👤 Exclusivo para quien lo obtenga'];

    function dino(name, variants) {
        return {
            id: slug(name),
            name,
            tag: 'Exclusivos',
            image: IMAGES[name] || null,
            variants: variants.map(([type, price]) => ({
                label: type,
                type,
                price,
                info: INFO
            }))
        };
    }

    window.SHOP_DATA = [
        dino('Basilisco', [['Alpha', 120000], ['Ghost', 50000]]),
        dino('Karkinos', [['Alpha', 120000]]),
        dino('Reaper', [['Alpha', 150000], ['Rayo', 80000], ['Corrupto', 80000], ['Ghost', 80000], ['Queen', 120000]]),
        dino('Ossidón', [['Alpha', 150000]]),
        dino('Mosasaurio', [['Alpha', 150000], ['Astral', 150000]]),
        dino('Therizinosaurio', [['Alpha', 150000]]),
        dino('Raptor', [['Skeletal', 120000], ['Astral', 120000]]),
        dino('Rex', [['Skeletal', 150000], ['Ghost', 50000], ['Corrupto', 35000], ['Astral', 150000]]),
        dino('Wyvern', [
            ['Skeletal', 120000], ['Rayo', 50000], ['Corrupto', 35000],
            ['Crystal', 80000], ['Blood Crystal', 80000], ['Ember Crystal', 80000], ['Tropical Crystal', 80000],
            ['Zombie Fuego', 80000], ['Zombie Rayo', 80000], ['Zombie Veneno', 80000]
        ]),
        dino('Carnotaurus', [['Skeletal', 120000], ['Astral', 120000]]),
        dino('Giganotosaurio', [['Skeletal', 120000], ['Rayo', 80000], ['Corrupto', 80000]]),
        dino('Estego', [['Skeletal', 120000]]),
        dino('Yi Ling', [['Ghost', 50000]]),
        dino('Gigantraptor', [['Ghost', 50000]]),
        dino('Pez Abisal', [['Ghost', 50000]]),
        dino('Búho de las Nieves', [['Ghost', 50000]]),
        dino('Ceratosaurio', [['Ghost', 50000]]),
        dino('Veilwyn', [['Ghost', 50000]]),
        dino('Nutria', [['Ghost', 50000]]),
        dino('Espinosaurio', [['Ghost', 50000], ['Rayo', 50000]]),
        dino('Deinonychus', [['Ghost', 50000]]),
        dino('Mantis', [['Ghost', 50000]]),
        dino('Gato', [['Ghost', 50000]]),
        dino('Perro Abisal', [['Ghost', 50000]]),
        dino('Dragón de Roca', [['Rayo', 50000], ['Astral', 150000], ['Corrupto', 35000]]),
        dino('Argentavis', [['Astral', 120000]]),
        dino('Deinosuchus', [['Astral', 150000]]),
        dino('Lobo', [['Astral', 120000]]),
        dino('Mamut', [['Astral', 120000]]),
        dino('Megalodón', [['Astral', 120000]]),
        dino('Tusoteuthis', [['Astral', 120000]]),
        dino('GigaDesmodus', [['Único', 80000]]),
        dino('Neófito', [['Único', 45000]]),
        dino('Yeti', [['Único', 45000]]),
        dino('Amargasaurio', [['Único', 45000]]),
        dino('Dinophitecus', [['Único', 45000]]),
        dino('Sinomacrops', [['Único', 45000]]),
        dino('Tropeoghnathus', [['Único', 45000]]),
        dino('Golem de goma', [['Único', 45000]])
    ];
})();
