const collection = [
    {
        name: "Minecraft",
        creator: "Mojang",
        releaseYear: 2011,
        picture: "assets/minecraft.jpg",
        genre: ["Bac à sable", "Survie"],
        desc: "Minecraft est un jeu de type bac à sable, c'est à dire qu'il intègre des “outils” pour façonner son propre univers de jeu. Ainsi , le joueur peut à peu près bâtir tout ce qu'il veut. Il existe différents modes de jeu dans lesquels la partie aventure et la partie créative sont plus ou moins développées."

    },

    {
        name: "Counter Strike 2",
        creator: "Valve",
        releaseYear: "2023",
        picture: "assets/cs2.jpg",
        genre: ["FPS", "Arcade", "Compétitif"],
        desc: "Counter-Strike 2 est un jeu vidéo de tir à la première personne multijoueur en ligne développé et édité par Valve, sorti sur Windows et Linux le 27 septembre 2023. Il remplace Counter-Strike: Global Offensive sorti en 2012.",
    },
    {
        name: "Metro2033",
        creator: "A4 Games",
        releaseYear: "2010",
        picture: "assets/mertro.jpg",
        genre: ["FPS", "Survie", "Horreur"],
        desc: "Metro 2033 est un jeu vidéo de tir en vue à la première personne post-apocalyptique et un survival horror développé par 4A Games et édité par THQ. Il est sorti sur PC et Xbox 360 le 18 mars 2010, après un développement d'environ quatre ans. Il s'agit du premier jeu de la série.",
    },
    {
        name: "Terraria",
        creator: "Re-Logic",
        releaseYear: "2011",
        picture: "assets/Terraria.jpg",
        genre: ["Action", "Aventure", "Bac à sable"],
        desc: "Terraria est un jeu vidéo indépendant de type action-aventure et bac à sable développé par Re-Logic et porté sur Windows, Xbox Live, PlayStation Network, Wii U, Nintendo Switch, Android, iOS et Google Stadia. Le jeu propose d'explorer, de fabriquer des objets, de construire des habitations et de combattre des créatures variées dans un monde en 2D généré aléatoirement. Les musiques du jeu sont principalement composées de chiptunes.",
    },
    {
        name: "Star Citizen",
        creator: "Cloud Imperium Games",
        releaseYear: "En développement",
        picture: "assets/star-citizen.jpg",
        genre: ["FPS", "Science Fiction", "Massivement Multijoueur"],
        desc: "Star CitizenN 1 est un jeu vidéo massivement multijoueur de simulation spatiale du type science-fiction, en cours de développement, édité et développé par Cloud Imperium Games (CIG). Le jeu est en développement ouvert, c'est-à-dire que les joueurs peuvent y jouer dans sa phase alpha de développement. Il est principalement constitué d'un monde persistant massivement multijoueur (Persistent Universe ou PU).",
    },
    {
        name: "DayZ",
        creator: "Bohemia Interactive",
        releaseYear: "2013",
        picture: "assets/dayz.jpg",
        genre: ["Survie"],
        desc: "DayZ est un mod de jeu vidéo publié durant l'été 2013 basé sur le jeu ARMA II, une simulation militaire développée par Bohemia Interactive. Il s'agit d'un simulateur de survie dans un monde « post-apocalyptique-zombie » conçu par le game designer néo-zélandais Dean « Rocket » Hall.",
    },
    {
        name: "ArmaIII",
        creator: "Bohemia Interactive",
        releaseYear: "2013",
        picture: "assets/arma.jpg",
        genre: ["Simulation", "Jeu de tir tactique"],
        desc: "La campagne Vent d'Est se déroule sur deux îles, la principale étant Altis2, la seconde Stratis3. Les îles sont fortement inspirées de deux îles grecques du nom de Lemnos2 et Ágios3 Efstrátios, bien que leurs superficies soient légèrement plus faibles que les îles originales : 400 km2 annoncés pour Altis (au lieu de 478 km2, soit 85 % de l'échelle), 30 km2 pour Stratis (au lieu de 43 km2, soit 70 % de l'échelle). Cela représente pour Altis une surface de jeu équivalente au cumul des cartes du Takistan et de Chernarus. De plus, les développeurs ont annoncé la possibilité d'explorer les fonds marins sur l'équivalent de 100 à 150 km2.",
    },
    {
        name: "World of Warcraft",
        creator: "Blizzard",
        releaseYear: "2004",
        picture: "assets/wow.jpg",
        genre: ["MMORPG", "Massivement Multijoueur"],
        desc: "Le jeu reprend place dans le monde imaginaire d’Azeroth, et dont le cadre historique se situe quatre ans après les évènements concluant Warcraft III. Le joueur choisit son personnage parmi huit, dix ou douzeNote 1 races disponibles divisées en deux factions : l’Alliance et la Horde.",
    },
    {
        name: "Red Dead Redemption II",
        creator: "Rockstar Games",
        releaseYear: "2018",
        picture: "assets/rdr2.jpg",
        genre: ["Monde ouvert", "Aventure", "Action", "Western"],
        desc: "En 1899 (soit douze ans avant les principaux événements de Red Dead Redemption), à la suite d'un braquage qui a mal tourné dans la ville de Blackwater, la bande de Dutch van der Linde est traquée par les agents fédéraux et les chasseurs de primes. Prenant la fuite vers l'est, le gang commet méfaits sur méfaits pour survivre, bien que des querelles internes menacent de le disloquer. Le bras droit de Dutch, Arthur Morgan, est lui aussi tiraillé entre ses propres idéaux et sa loyauté envers la bande qui l'a élevé.",
    },
    {
        name: "Garry's Mod",
        creator: "FacePunch Studios",
        releaseYear: "2006",
        picture: "assets/garrysmod.jpg",
        genre: ["Bac à sable"],
        desc: "Garry’s Mod (GMod en abrégé) est dans un premier temps un mod de construction Half-Life 2, créé par Garry Newman en décembre 2004. Il s'agit d'un jeu de type « sandbox » (« bac à sable » en français), sans but particulier, où le joueur est libre de créer et de manipuler n'importe quel objet, et de faire de nombreuses expériences, exploitant entièrement le moteur Source.",
    }
];

var section1 = document.getElementById('section1');
var section2 = document.getElementById('section2');

var indexObjetAleatoire = Math.floor(Math.random() * objets.length);
var objetAleatoire = objets[indexObjetAleatoire];

objets.splice(indexObjetAleatoire, 1);
var section = document.createElement('section');

section.innerHTML = `
<h2>${objetAleatoire.nom}</h2>
<p>${objetAleatoire.description}</p>
<img src="${objetAleatoire.image}" alt="${objetAleatoire.nom}">
`;
var section = document.createElement('section');
if (Math.random() < 0.5) {
    document.body.insertBefore(section, section1.nextSibling);
} else {
    document.body.insertBefore(section, section2);
}

