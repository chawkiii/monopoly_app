const casesData = [
    {
        className: 'row1',
        cases: [
            { className: 'corner', cardNameText: 'Départ', imgSrc: '' },
            { className: 'property naruto', cardNameText: 'Village de Konoha', imgSrc: '/images/konoha.jpg' },
            { className: 'filler', cardNameText: 'Arc Filler', imgSrc: '/images/filler.jpg' },
            { className: 'property naruto', cardNameText: 'Village de Kiri', imgSrc: '/images/kiri.jpg' },
            { className: 'spoil', cardNameText: 'Spoil', imgSrc: '/images/spoil.jpg' },
            { className: 'property kaio', cardNameText: 'Kaio du Nord', imgSrc: '/images/Kaiosamanorte.jpg' },
            { className: 'property kimetsu', cardNameText: 'Quartier des plaisirs', imgSrc: '/images/le-quartier-des-plaisirs.jpg' },
            { className: 'flashback', cardNameText: 'Arc Flashback', imgSrc: '/images/flashback.jpg' },
            { className: 'property kimetsu', cardNameText: 'Village des Forgerons', imgSrc: '/images/Swordsmith_Village.jpg' },
            { className: 'property kimetsu', cardNameText: 'Infinite Castle', imgSrc: '/images/Infinity_Castle.jpg' },
            { className: 'corner', cardNameText: 'Prison', imgSrc: '' },
        ]
    },
    {
        className: 'row4',
        cases: [
            { className: 'property fma', cardNameText: 'Central City', imgSrc: '/images/CentralCity.jpg' },
            { className: 'property fma', cardNameText: 'Ishval', imgSrc: '/images/Ishval.jpg' },
            { className: 'filler', cardNameText: 'Arc Filler', imgSrc: '/images/filler.jpg' },
            { className: 'property fma', cardNameText: 'Lior', imgSrc: '/images/Lior.jpg' },
            { className: 'property kaio', cardNameText: 'Kaio de l\'Ouest', imgSrc: '/images/Kaio_Oeste_Trans.jpg' },
            { className: 'flashback', cardNameText: 'Arc Flashback', imgSrc: '/images/flashback.jpg' },
            { className: 'property dbz', cardNameText: 'Namek', imgSrc: '/images/planet_namek___dbz_by_blackanzu_d8p5vgu-fullview.jpg' },
            { className: 'spoil', cardNameText: 'Spoil', imgSrc: '/images/spoil.jpg' },
            { className: 'property dbz', cardNameText: 'Planète Vegeta', imgSrc: '/images/planet-vegeta.jpg' },
        ]
    },
    {
        className: 'row2',
        cases: [
            { className: 'property op', cardNameText: 'Alabasta', imgSrc: '/images/alabasta.jpg' },
            { className: 'property lab', cardNameText: 'Capsule Corp', imgSrc: '/images/capsuleCorp.jpg' },
            { className: 'property op', cardNameText: 'Mary Geoise', imgSrc: '/images/Mary_Geoise.jpg' },
            { className: 'property op', cardNameText: 'Wano Kuni', imgSrc: '/images/wano.jpg' },
            { className: 'property kaio', cardNameText: 'Kaio de l\'Est', imgSrc: '/images/East_Kai.jpg' },
            { className: 'property bleach', cardNameText: 'Karakura Town', imgSrc: '/images/KarakuraTown.jpg' },
            { className: 'filler', cardNameText: 'Arc Filler', imgSrc: '/images/filler.jpg' },
            { className: 'property bleach', cardNameText: 'Hueco Mundo', imgSrc: '/images/bleach-cifer-espada-hueco.jpg' },
            { className: 'property bleach', cardNameText: 'Soul Society', imgSrc: '/images/soul-society.png' },
        ]
    },
    {
        className: 'row3',
        cases: [
            { className: 'corner', cardNameText: 'Parc', imgSrc: '' },
            { className: 'property bc', cardNameText: 'Royaume de Spade', imgSrc: '/images/The-Spade-Kingdom.png' },
            { className: 'flashback', cardNameText: 'Arc Flashback', imgSrc: '/images/flashback.jpg' },
            { className: 'property bc', cardNameText: 'Royaume de Diamond', imgSrc: '/images/Diamond_Palace.jpg' },
            { className: 'property bc', cardNameText: 'Village de Hadge', imgSrc: '/images/Paysage_de_Hadge.jpg' },
            { className: 'property kaio', cardNameText: 'Kaio du Sud', imgSrc: '/images/kaio_sud.png' },
            { className: 'property hunter', cardNameText: 'Île de la Baleine', imgSrc: '/images/Whale_Island.jpg' },
            { className: 'property lab', cardNameText: 'Laboratoire du Dr. Gero', imgSrc: '/images/Dr.GerosLabCellSaga-2.jpg' },
            { className: 'property hunter', cardNameText: 'York Shin City', imgSrc: '/images/YorkShinCity.jpg' },
            { className: 'property hunter', cardNameText: 'Greed Island', imgSrc: '/images/Greed_Island.jpg' },
            { className: 'corner', cardNameText: 'Allez en Prison', imgSrc: '' },
        ]
    },
];


/* 
let corner, property, community, gare, tax, chance, utility, price, houses, rent, owner;
const casesData = [
    {
        caseNum: [0,10,20,30,40],
        caseType: corner,
        caseName: "",
        casePrice: 0,
        caseHouses: 0,
        caseRent: 0,
        owner: none
    },
    {
        caseNum: [1,3,6,8,9,11,13,14,16,18,19,21,23,24,26,28,29,31,32,34,37,39],
        caseType: property,
        caseName: "",
        casePrice: price,
        caseHouses: houses,
        caseRent: rent,
        owner: owner
    },
    {
        caseNum: [2,17,33],
        caseType: community,
        caseName: "Arc Filler",
        casePrice: 0,
        caseHouses: 0,
        caseRent: 0,
        owner: none
    },
    {
        caseNum: [5,15,25,35],
        caseType: gare,
        caseName: "",
        casePrice: price,
        caseHouses: 0,
        caseRent: rent,
        owner: owner
    },
    {
        caseNum: [4,38],
        caseType: tax,
        caseName: "spoil",
        casePrice: 0,
        caseHouses: 0,
        caseRent: rent,
        owner: none
    },
    {
        caseNum: [7,22,36],
        caseType: chance,
        caseName: "Arc Flashback",
        casePrice: 0,
        caseHouses: 0,
        caseRent: 0,
        owner: none
    },
    {
        caseNum: [12,27],
        caseType: utility,
        caseName: "Arc Flashback",
        casePrice: price,
        caseHouses: 0,
        caseRent: rent,
        owner: owner
    }
];
*/