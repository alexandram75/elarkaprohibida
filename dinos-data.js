(function () {
    const ABERRANTE_EXTRA = 5000;

    // Imagenes reales tomadas de ark.wiki.gg (investigadas y verificadas).
    const IMAGES = {
        "Carcharodontosaurio": "images/dinos/carcharodontosaurio.png",
        "Giganotosaurus": "images/dinos/giganotosaurus.png",
        "Ossidón": "images/dinos/ossidon.png",
        "Dreadnoughtus": "images/dinos/dreadnoughtus.png",
        "Rock Golem": "images/dinos/rock-golem.png",
        "Deinosuchus": "images/dinos/deinosuchus.png",
        "Shastasaurus": "images/dinos/shastasaurus.png",
        "Oasisaur": "https://ark.wiki.gg/images/thumb/Oasisaur.png/320px-Oasisaur.png",
        "Rhyniognatha": "images/dinos/rhyniognatha.png",
        "Mosasaurus": "images/dinos/mosasaurus.png",
        "Tusoteuthis": "images/dinos/tusoteuthis.png",
        "Rex": "images/dinos/rex.png",
        "Spinosaur": "images/dinos/spinosaur.png",
        "Yutyrannus": "images/dinos/yutyrannus.png",
        "Therizinosaurus": "images/dinos/therizinosaurus.png",
        "Brontosaurus": "images/dinos/brontosaurus.png",
        "Diplodocus": "images/dinos/diplodocus.png",
        "Paraceratherium": "images/dinos/paraceratherium.png",
        "Quetzal": "images/dinos/quetzal.png",
        "Grifo": "images/dinos/grifo.png",
        "Plesiosaur": "images/dinos/plesiosaur.png",
        "Basilosaurus": "images/dinos/basilosaurus.png",
        "Fasolasuchus": "images/dinos/fasolasuchus.png",
        "Thylacoleo": "images/dinos/thylacoleo.png",
        "Pyromane": "images/dinos/pyromane.jpg",
        "Dreadmare": "images/dinos/dreadmare.png",
        "Wyvern": "images/dinos/wyvern.png",
        "Allosaurus": "images/dinos/allosaurus.png",
        "Carnotaurus": "images/dinos/carnotaurus.png",
        "Stegosaurus": "images/dinos/stegosaurus.png",
        "Triceratops": "images/dinos/triceratops.png",
        "Pachyrhinosaurus": "images/dinos/pachyrhinosaurus.png",
        "Mammoth": "images/dinos/mammoth.png",
        "Woolly Rhino": "images/dinos/woolly-rhino.png",
        "Dire Bear": "images/dinos/dire-bear.png",
        "Megatherium": "images/dinos/megatherium.png",
        "Megalosaurus": "images/dinos/megalosaurus.png",
        "Baryonyx": "images/dinos/baryonyx.png",
        "Sarcosuchus": "images/dinos/sarcosuchus.png",
        "Kaprosuchus": "images/dinos/kaprosuchus.png",
        "Ankylosaurus": "images/dinos/ankylosaurus.png",
        "Doedicurus": "images/dinos/doedicurus.png",
        "Castoroides": "images/dinos/castoroides.png",
        "Argentavis": "images/dinos/argentavis.png",
        "Gigantoraptor": "images/dinos/gigantoraptor.png",
        "Yi Ling": "images/dinos/yi-ling.png",
        "Mantis": "images/dinos/mantis.png",
        "Thorny Dragon": "images/dinos/thorny-dragon.png",
        "Morellatops": "images/dinos/morellatops.png",
        "Megalodon": "images/dinos/megalodon.png",
        "Dunkleosteus": "images/dinos/dunkleosteus.png",
        "Chalicotherium": "images/dinos/chalicotherium.png",
        "Gigantopithecus": "images/dinos/gigantopithecus.png",
        "Raptor": "images/dinos/raptor.png",
        "Iguanodon": "images/dinos/iguanodon.png",
        "Parasaur": "images/dinos/parasaur.png",
        "Gallimimus": "images/dinos/gallimimus.png",
        "Equus": "images/dinos/equus.png",
        "Procoptodon": "images/dinos/procoptodon.png",
        "Direwolf": "images/dinos/direwolf.png",
        "Sabertooth": "images/dinos/sabertooth.png",
        "Beelzebufo": "images/dinos/beelzebufo.png",
        "Carbonemys": "images/dinos/carbonemys.png",
        "Kentrosaurus": "images/dinos/kentrosaurus.png",
        "Pteranodon": "images/dinos/pteranodon.png",
        "Pelagornis": "images/dinos/pelagornis.png",
        "Terror Bird": "images/dinos/terror-bird.png",
        "Lymantria": "images/dinos/lymantria.png",
        "Titanoboa": "images/dinos/titanoboa.png",
        "Araneo": "images/dinos/araneo.png",
        "Pulmonoscorpius": "images/dinos/pulmonoscorpius.png",
        "Arthropluera": "images/dinos/arthropluera.png",
        "Onyc": "images/dinos/onyc.png",
        "Purlovia": "images/dinos/purlovia.png",
        "Megalania": "images/dinos/megalania.png",
        "Megaloceros": "images/dinos/megaloceros.png",
        "Phiomia": "images/dinos/phiomia.png",
        "Moschops": "images/dinos/moschops.png",
        "Lystrosaurus": "images/dinos/lystrosaurus.png",
        "Ovis": "images/dinos/ovis.png",
        "Achatina": "images/dinos/achatina.png",
        "Oviraptor": "images/dinos/oviraptor.png",
        "Pachy": "images/dinos/pachy.png",
        "Hyaenodon": "images/dinos/hyaenodon.png",
        "Troodon": "images/dinos/troodon.png",
        "Mesopithecus": "images/dinos/mesopithecus.png",
        "Pegomastax": "images/dinos/pegomastax.png",
        "Microraptor": "images/dinos/microraptor.png",
        "Compsognathus": "images/dinos/compsognathus.png",
        "Dimetrodon": "images/dinos/dimetrodon.png",
        "Dilophosaurus": "images/dinos/dilophosaurus.png",
        "Dimorphodon": "images/dinos/dimorphodon.png",
        "Archaeopteryx": "images/dinos/archaeopteryx.png",
        "Ichthyornis": "images/dinos/ichthyornis.png",
        "Vulture": "images/dinos/vulture.png",
        "Jerboa": "images/dinos/jerboa.png",
        "Manta": "images/dinos/manta.png",
        "Ichthyosaurus": "images/dinos/ichthyosaurus.png",
        "Electrophorus": "images/dinos/electrophorus.png"
    };

    function slug(name) {
        return name.toLowerCase()
            .normalize('NFD').replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    // Especies que realmente tienen forma Aberrante en ARK (verificado en ark.wiki.gg,
    // categoria "Aberrant creatures" + pagina de Aberration). El resto de dinos solo
    // existen en su forma normal, asi que no se les ofrece la variante Aberrante.
    const ABERRANT_CAPABLE = new Set([
        'Spinosaur', 'Diplodocus', 'Paraceratherium', 'Fasolasuchus',
        'Carnotaurus', 'Stegosaurus', 'Triceratops', 'Dire Bear', 'Megalosaurus',
        'Baryonyx', 'Sarcosuchus', 'Ankylosaurus', 'Doedicurus', 'Gigantoraptor', 'Gigantopithecus',
        'Raptor', 'Iguanodon', 'Parasaur', 'Equus', 'Beelzebufo', 'Carbonemys', 'Titanoboa',
        'Araneo', 'Pulmonoscorpius', 'Arthropluera', 'Purlovia', 'Megalania', 'Moschops',
        'Lystrosaurus', 'Ovis', 'Achatina', 'Oviraptor', 'Dimetrodon', 'Dimorphodon',
        'Manta', 'Electrophorus'
    ]);

    function tiered(name, tag, base300, base450) {
        const variants = [
            { label: 'Nivel 300 · Normal', type: 'Nivel 300', price: base300 },
            { label: 'Nivel 450 · Normal', type: 'Nivel 450', price: base450 }
        ];

        if (ABERRANT_CAPABLE.has(name)) {
            variants.push(
                { label: 'Nivel 300 · Aberrante', type: 'Nivel 300', price: base300 + ABERRANTE_EXTRA, info: ['☣️ Variante Aberrante: +5.000 puntos sobre el precio base'] },
                { label: 'Nivel 450 · Aberrante', type: 'Nivel 450', price: base450 + ABERRANTE_EXTRA, info: ['☣️ Variante Aberrante: +5.000 puntos sobre el precio base'] }
            );
        }

        return {
            id: slug(name),
            name,
            tag,
            image: IMAGES[name] || null,
            variants
        };
    }

    const cat1 = ['Carcharodontosaurio', 'Giganotosaurus', 'Ossidón', 'Dreadnoughtus']
        .map(n => tiered(n, 'Categoría 1', 50000, 65000))
        .concat(['Rock Golem', 'Deinosuchus', 'Shastasaurus'].map(n => tiered(n, 'Categoría 1', 30154, 39200)))
        .concat([tiered('Oasisaur', 'Categoría 1', 20231, 26300)]);

    const cat2 = ['Rhyniognatha', 'Mosasaurus', 'Tusoteuthis']
        .map(n => tiered(n, 'Categoría 2', 35731, 46450))
        .concat(['Rex', 'Spinosaur', 'Yutyrannus', 'Therizinosaurus'].map(n => tiered(n, 'Categoría 2', 31732, 41252)))
        .concat(['Brontosaurus', 'Diplodocus', 'Paraceratherium', 'Quetzal', 'Grifo', 'Plesiosaur', 'Basilosaurus', 'Fasolasuchus', 'Thylacoleo', 'Pyromane', 'Dreadmare', 'Wyvern']
            .map(n => tiered(n, 'Categoría 2', 25808, 33550)));

    const cat3 = ['Allosaurus', 'Carnotaurus', 'Stegosaurus', 'Triceratops', 'Pachyrhinosaurus', 'Mammoth', 'Woolly Rhino', 'Dire Bear', 'Megatherium', 'Megalosaurus', 'Baryonyx', 'Sarcosuchus', 'Kaprosuchus', 'Ankylosaurus', 'Doedicurus', 'Castoroides', 'Argentavis', 'Gigantoraptor', 'Yi Ling', 'Mantis', 'Thorny Dragon', 'Morellatops', 'Megalodon', 'Dunkleosteus', 'Chalicotherium', 'Gigantopithecus']
        .map(n => tiered(n, 'Categoría 3', 17845, 23199));

    const cat4 = ['Raptor', 'Iguanodon', 'Parasaur', 'Gallimimus', 'Equus', 'Procoptodon', 'Direwolf', 'Sabertooth', 'Beelzebufo', 'Carbonemys', 'Kentrosaurus', 'Pteranodon', 'Pelagornis', 'Terror Bird', 'Lymantria', 'Titanoboa', 'Araneo', 'Pulmonoscorpius', 'Arthropluera', 'Onyc', 'Purlovia', 'Megalania', 'Megaloceros', 'Phiomia', 'Moschops', 'Lystrosaurus', 'Ovis', 'Achatina', 'Oviraptor', 'Pachy', 'Hyaenodon', 'Troodon', 'Mesopithecus', 'Pegomastax', 'Microraptor', 'Compsognathus', 'Dimetrodon', 'Dilophosaurus', 'Dimorphodon', 'Archaeopteryx', 'Ichthyornis', 'Vulture', 'Jerboa', 'Manta', 'Ichthyosaurus', 'Electrophorus']
        .map(n => tiered(n, 'Categoría 4', 9923, 12900));

    window.SHOP_DATA = [...cat1, ...cat2, ...cat3, ...cat4];
})();
