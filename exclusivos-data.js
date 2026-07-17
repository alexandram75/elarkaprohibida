(function () {
    // Imagenes reales tomadas de ark.wiki.gg (investigadas y verificadas).
    // Pez Abisal, Perro Abisal y Golem de goma no existen en la wiki oficial
    // (probablemente criaturas propias del servidor) -> sin imagen, usan el placeholder.
    const IMAGES = {
        "Basilisco": "images/exclusivos/basilisco.png",
        "Karkinos": "images/exclusivos/karkinos.png",
        "Reaper": "images/exclusivos/reaper.png",
        "Ossidón": "images/dinos/ossidon.png",
        "Mosasaurio": "images/dinos/mosasaurus.png",
        "Therizinosaurio": "images/dinos/therizinosaurus.png",
        "Raptor": "images/dinos/raptor.png",
        "Rex": "images/dinos/rex.png",
        "Wyvern": "images/dinos/wyvern.png",
        "Carnotaurus": "images/dinos/carnotaurus.png",
        "Giganotosaurio": "images/dinos/giganotosaurus.png",
        "Estego": "images/dinos/stegosaurus.png",
        "Yi Ling": "images/dinos/yi-ling.png",
        "Gigantraptor": "images/dinos/gigantoraptor.png",
        "Búho de las Nieves": "images/exclusivos/buho-de-las-nieves.png",
        "Ceratosaurio": "images/exclusivos/ceratosaurio.png",
        "Veilwyn": "images/exclusivos/veilwyn.png",
        "Nutria": "images/exclusivos/nutria.png",
        "Espinosaurio": "images/dinos/spinosaur.png",
        "Deinonychus": "images/exclusivos/deinonychus.png",
        "Mantis": "images/dinos/mantis.png",
        "Gato": "images/exclusivos/gato.png",
        "Dragón de Roca": "images/exclusivos/dragon-de-roca.png",
        "Argentavis": "images/dinos/argentavis.png",
        "Deinosuchus": "images/dinos/deinosuchus.png",
        "Lobo": "images/dinos/direwolf.png",
        "Mamut": "images/dinos/mammoth.png",
        "Megalodón": "images/dinos/megalodon.png",
        "Tusoteuthis": "images/dinos/tusoteuthis.png",
        "GigaDesmodus": "images/exclusivos/gigadesmodus.png",
        "Neófito": "images/exclusivos/neofito.png",
        "Yeti": "images/exclusivos/yeti.jpg",
        "Amargasaurio": "images/exclusivos/amargasaurio.png",
        "Dinophitecus": "images/exclusivos/dinophitecus.png",
        "Sinomacrops": "images/exclusivos/sinomacrops.png",
        "Tropeoghnathus": "images/exclusivos/tropeoghnathus.png"
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
