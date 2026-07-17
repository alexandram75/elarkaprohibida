(function () {
    const ABERRANTE_EXTRA = 5000;

    // Imagenes reales tomadas de ark.wiki.gg (investigadas y verificadas).
    const IMAGES = {
        "Carcharodontosaurio": "https://ark.wiki.gg/images/thumb/Carcharodontosaurus.png/320px-Carcharodontosaurus.png",
        "Giganotosaurus": "https://ark.wiki.gg/images/thumb/Giganotosaurus.png/320px-Giganotosaurus.png",
        "Ossidón": "https://ark.wiki.gg/images/thumb/Ossidon.png/320px-Ossidon.png",
        "Dreadnoughtus": "https://ark.wiki.gg/images/thumb/Dossier_Dreadnoughtus.png/320px-Dossier_Dreadnoughtus.png",
        "Rock Golem": "https://ark.wiki.gg/images/thumb/Rock_Elemental.png/320px-Rock_Elemental.png",
        "Deinosuchus": "https://ark.wiki.gg/images/thumb/Deinosuchus.png/320px-Deinosuchus.png",
        "Shastasaurus": "https://ark.wiki.gg/images/thumb/Shastasaurus.png/320px-Shastasaurus.png",
        "Oasisaur": "https://ark.wiki.gg/images/thumb/Oasisaur.png/320px-Oasisaur.png",
        "Rhyniognatha": "https://ark.wiki.gg/images/thumb/Rhyniognatha.png/320px-Rhyniognatha.png",
        "Mosasaurus": "https://ark.wiki.gg/images/thumb/Mosasaurus.png/320px-Mosasaurus.png",
        "Tusoteuthis": "https://ark.wiki.gg/images/thumb/Tusoteuthis.png/320px-Tusoteuthis.png",
        "Rex": "https://ark.wiki.gg/images/thumb/Rex.png/320px-Rex.png",
        "Spinosaur": "https://ark.wiki.gg/images/thumb/Spino.png/320px-Spino.png",
        "Yutyrannus": "https://ark.wiki.gg/images/thumb/Yutyrannus.png/320px-Yutyrannus.png",
        "Therizinosaurus": "https://ark.wiki.gg/images/thumb/Therizinosaur.png/320px-Therizinosaur.png",
        "Brontosaurus": "https://ark.wiki.gg/images/thumb/Brontosaurus.png/320px-Brontosaurus.png",
        "Diplodocus": "https://ark.wiki.gg/images/thumb/Diplodocus.png/320px-Diplodocus.png",
        "Paraceratherium": "https://ark.wiki.gg/images/thumb/Dossier_Paraceratherium.png/320px-Dossier_Paraceratherium.png",
        "Quetzal": "https://ark.wiki.gg/images/thumb/Quetzal.png/320px-Quetzal.png",
        "Grifo": "https://ark.wiki.gg/images/thumb/Griffin.png/320px-Griffin.png",
        "Plesiosaur": "https://ark.wiki.gg/images/thumb/Plesiosaur.png/320px-Plesiosaur.png",
        "Basilosaurus": "https://ark.wiki.gg/images/thumb/Basilosaurus.png/320px-Basilosaurus.png",
        "Fasolasuchus": "https://ark.wiki.gg/images/thumb/Fasolasuchus.png/320px-Fasolasuchus.png",
        "Thylacoleo": "https://ark.wiki.gg/images/thumb/Thylacoleo.png/320px-Thylacoleo.png",
        "Pyromane": "https://ark.wiki.gg/images/thumb/Pyromane.png/320px-Pyromane.png",
        "Dreadmare": "https://ark.wiki.gg/images/thumb/Dreadmare.png/320px-Dreadmare.png",
        "Wyvern": "https://ark.wiki.gg/images/thumb/Wyvern.png/320px-Wyvern.png",
        "Allosaurus": "https://ark.wiki.gg/images/thumb/Dossier_Allosaurus.png/320px-Dossier_Allosaurus.png",
        "Carnotaurus": "https://ark.wiki.gg/images/thumb/Dossier_Carnotaurus.png/320px-Dossier_Carnotaurus.png",
        "Stegosaurus": "https://ark.wiki.gg/images/thumb/Dossier_Stegosaurus.png/320px-Dossier_Stegosaurus.png",
        "Triceratops": "https://ark.wiki.gg/images/thumb/Dossier_Triceratops.png/320px-Dossier_Triceratops.png",
        "Pachyrhinosaurus": "https://ark.wiki.gg/images/thumb/Dossier_Pachyrhinosaurus.png/320px-Dossier_Pachyrhinosaurus.png",
        "Mammoth": "https://ark.wiki.gg/images/thumb/Dossier_Mammoth.png/320px-Dossier_Mammoth.png",
        "Woolly Rhino": "https://ark.wiki.gg/images/thumb/Dossier_Woolly_Rhino.png/320px-Dossier_Woolly_Rhino.png",
        "Dire Bear": "https://ark.wiki.gg/images/thumb/Dossier_Dire_Bear.png/320px-Dossier_Dire_Bear.png",
        "Megatherium": "https://ark.wiki.gg/images/thumb/Dossier_Megatherium.png/320px-Dossier_Megatherium.png",
        "Megalosaurus": "https://ark.wiki.gg/images/thumb/Dossier_Megalosaurus.png/320px-Dossier_Megalosaurus.png",
        "Baryonyx": "https://ark.wiki.gg/images/thumb/Dossier_Baryonyx.png/320px-Dossier_Baryonyx.png",
        "Sarcosuchus": "https://ark.wiki.gg/images/thumb/Dossier_Sarco.png/320px-Dossier_Sarco.png",
        "Kaprosuchus": "https://ark.wiki.gg/images/thumb/Dossier_Kaprosuchus.png/320px-Dossier_Kaprosuchus.png",
        "Ankylosaurus": "https://ark.wiki.gg/images/thumb/Dossier_Ankylosaurus.png/320px-Dossier_Ankylosaurus.png",
        "Doedicurus": "https://ark.wiki.gg/images/thumb/Dossier_Doedicurus.png/320px-Dossier_Doedicurus.png",
        "Castoroides": "https://ark.wiki.gg/images/thumb/Dossier_Castoroides.png/320px-Dossier_Castoroides.png",
        "Argentavis": "https://ark.wiki.gg/images/thumb/Dossier_Argentavis.png/320px-Dossier_Argentavis.png",
        "Gigantoraptor": "https://ark.wiki.gg/images/thumb/Dossier_Gigantoraptor.png/320px-Dossier_Gigantoraptor.png",
        "Yi Ling": "https://ark.wiki.gg/images/thumb/Dossier_Yi_Ling.png/320px-Dossier_Yi_Ling.png",
        "Mantis": "https://ark.wiki.gg/images/thumb/Dossier_Mantis.png/320px-Dossier_Mantis.png",
        "Thorny Dragon": "https://ark.wiki.gg/images/thumb/Dossier_Thorny_Dragon.png/320px-Dossier_Thorny_Dragon.png",
        "Morellatops": "https://ark.wiki.gg/images/thumb/Dossier_Morellatops.png/320px-Dossier_Morellatops.png",
        "Megalodon": "https://ark.wiki.gg/images/thumb/Dossier_Megalodon.png/320px-Dossier_Megalodon.png",
        "Dunkleosteus": "https://ark.wiki.gg/images/thumb/Dossier_Dunkleosteus.png/320px-Dossier_Dunkleosteus.png",
        "Chalicotherium": "https://ark.wiki.gg/images/thumb/Dossier_Chalicotherium.png/320px-Dossier_Chalicotherium.png",
        "Gigantopithecus": "https://ark.wiki.gg/images/thumb/Dossier_Gigantopithecus.png/320px-Dossier_Gigantopithecus.png",
        "Raptor": "https://ark.wiki.gg/images/thumb/Dossier_Raptor.png/320px-Dossier_Raptor.png",
        "Iguanodon": "https://ark.wiki.gg/images/thumb/Dossier_Iguanodon.png/320px-Dossier_Iguanodon.png",
        "Parasaur": "https://ark.wiki.gg/images/thumb/Dossier_Parasaur.png/320px-Dossier_Parasaur.png",
        "Gallimimus": "https://ark.wiki.gg/images/thumb/Dossier_Gallimimus.png/320px-Dossier_Gallimimus.png",
        "Equus": "https://ark.wiki.gg/images/thumb/Dossier_Equus.png/320px-Dossier_Equus.png",
        "Procoptodon": "https://ark.wiki.gg/images/thumb/Dossier_Procoptodon.png/320px-Dossier_Procoptodon.png",
        "Direwolf": "https://ark.wiki.gg/images/thumb/Dossier_Direwolf.png/320px-Dossier_Direwolf.png",
        "Sabertooth": "https://ark.wiki.gg/images/thumb/Dossier_Sabertooth.png/320px-Dossier_Sabertooth.png",
        "Beelzebufo": "https://ark.wiki.gg/images/thumb/Dossier_Beelzebufo.png/320px-Dossier_Beelzebufo.png",
        "Carbonemys": "https://ark.wiki.gg/images/thumb/Dossier_Carbonemys.png/320px-Dossier_Carbonemys.png",
        "Kentrosaurus": "https://ark.wiki.gg/images/thumb/Dossier_Kentrosaurus.png/320px-Dossier_Kentrosaurus.png",
        "Pteranodon": "https://ark.wiki.gg/images/thumb/Dossier_Pteranodon.png/320px-Dossier_Pteranodon.png",
        "Pelagornis": "https://ark.wiki.gg/images/thumb/Dossier_Pelagornis.png/320px-Dossier_Pelagornis.png",
        "Terror Bird": "https://ark.wiki.gg/images/thumb/Dossier_Terror_Bird.png/320px-Dossier_Terror_Bird.png",
        "Lymantria": "https://ark.wiki.gg/images/thumb/Dossier_Lymantria.png/320px-Dossier_Lymantria.png",
        "Titanoboa": "https://ark.wiki.gg/images/thumb/Dossier_Titanoboa.png/320px-Dossier_Titanoboa.png",
        "Araneo": "https://ark.wiki.gg/images/thumb/Dossier_Araneo.png/320px-Dossier_Araneo.png",
        "Pulmonoscorpius": "https://ark.wiki.gg/images/thumb/Dossier_Pulmonoscorpius.png/320px-Dossier_Pulmonoscorpius.png",
        "Arthropluera": "https://ark.wiki.gg/images/thumb/Dossier_Arthropluera.png/320px-Dossier_Arthropluera.png",
        "Onyc": "https://ark.wiki.gg/images/thumb/Dossier_Onyc.png/320px-Dossier_Onyc.png",
        "Purlovia": "https://ark.wiki.gg/images/thumb/Dossier_Purlovia.png/320px-Dossier_Purlovia.png",
        "Megalania": "https://ark.wiki.gg/images/thumb/Dossier_Megalania.png/320px-Dossier_Megalania.png",
        "Megaloceros": "https://ark.wiki.gg/images/thumb/Dossier_Megaloceros.png/320px-Dossier_Megaloceros.png",
        "Phiomia": "https://ark.wiki.gg/images/thumb/Dossier_Phiomia.png/320px-Dossier_Phiomia.png",
        "Moschops": "https://ark.wiki.gg/images/thumb/Dossier_Moschops.png/320px-Dossier_Moschops.png",
        "Lystrosaurus": "https://ark.wiki.gg/images/thumb/Dossier_Lystrosaurus.png/320px-Dossier_Lystrosaurus.png",
        "Ovis": "https://ark.wiki.gg/images/thumb/Dossier_Ovis.png/320px-Dossier_Ovis.png",
        "Achatina": "https://ark.wiki.gg/images/thumb/Dossier_Achatina.png/320px-Dossier_Achatina.png",
        "Oviraptor": "https://ark.wiki.gg/images/thumb/Dossier_Oviraptor.png/320px-Dossier_Oviraptor.png",
        "Pachy": "https://ark.wiki.gg/images/thumb/Dossier_Pachy.png/320px-Dossier_Pachy.png",
        "Hyaenodon": "https://ark.wiki.gg/images/thumb/Dossier_Hyaenodon.png/320px-Dossier_Hyaenodon.png",
        "Troodon": "https://ark.wiki.gg/images/thumb/Dossier_Troodon.png/320px-Dossier_Troodon.png",
        "Mesopithecus": "https://ark.wiki.gg/images/thumb/Dossier_Mesopithecus.png/320px-Dossier_Mesopithecus.png",
        "Pegomastax": "https://ark.wiki.gg/images/thumb/Dossier_Pegomastax.png/320px-Dossier_Pegomastax.png",
        "Microraptor": "https://ark.wiki.gg/images/thumb/Dossier_Microraptor.png/320px-Dossier_Microraptor.png",
        "Compsognathus": "https://ark.wiki.gg/images/thumb/Dossier_Compy.png/320px-Dossier_Compy.png",
        "Dimetrodon": "https://ark.wiki.gg/images/thumb/Dossier_Dimetrodon.png/320px-Dossier_Dimetrodon.png",
        "Dilophosaurus": "https://ark.wiki.gg/images/thumb/Dossier_Dilophosaur.png/320px-Dossier_Dilophosaur.png",
        "Dimorphodon": "https://ark.wiki.gg/images/thumb/Dossier_Dimorphodon.png/320px-Dossier_Dimorphodon.png",
        "Archaeopteryx": "https://ark.wiki.gg/images/thumb/Dossier_Archaeopteryx.png/320px-Dossier_Archaeopteryx.png",
        "Ichthyornis": "https://ark.wiki.gg/images/thumb/Dossier_Ichthyornis.png/320px-Dossier_Ichthyornis.png",
        "Vulture": "https://ark.wiki.gg/images/thumb/Dossier_Vulture.png/320px-Dossier_Vulture.png",
        "Jerboa": "https://ark.wiki.gg/images/thumb/Dossier_Jerboa.png/320px-Dossier_Jerboa.png",
        "Manta": "https://ark.wiki.gg/images/thumb/Dossier_Manta.png/320px-Dossier_Manta.png",
        "Ichthyosaurus": "https://ark.wiki.gg/images/thumb/Dossier_Ichthyosaurus.png/320px-Dossier_Ichthyosaurus.png",
        "Electrophorus": "https://ark.wiki.gg/images/thumb/Dossier_Electrophorus.png/320px-Dossier_Electrophorus.png"
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
