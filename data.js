// data.js

const casesData = [
    {
        className: 'row1',
        cases: [
            { caseNum: 1, className: 'corner', cardNameText: 'Départ', imgSrc: '' },
            { caseNum: 2, className: 'property naruto', cardNameText: 'Village de Konoha', imgSrc: '/images/konoha.jpg' },
            { caseNum: 3, className: 'filler', cardNameText: 'Arc Filler', imgSrc: '/images/filler.jpg' },
            { caseNum: 4, className: 'property naruto', cardNameText: 'Village de Kiri', imgSrc: '/images/kiri.jpg' },
            { caseNum: 5, className: 'spoil', cardNameText: 'Spoil', imgSrc: '/images/spoil.jpg' },
            { caseNum: 6, className: 'property kaio', cardNameText: 'Kaio du Nord', imgSrc: '/images/Kaiosamanorte.jpg' },
            { caseNum: 7, className: 'property kimetsu', cardNameText: 'Quartier des plaisirs', imgSrc: '/images/le-quartier-des-plaisirs.jpg' },
            { caseNum: 8, className: 'flashback', cardNameText: 'Arc Flashback', imgSrc: '/images/flashback.jpg' },
            { caseNum: 9, className: 'property kimetsu', cardNameText: 'Village des Forgerons', imgSrc: '/images/Swordsmith_Village.jpg' },
            { caseNum: 10, className: 'property kimetsu', cardNameText: 'Infinite Castle', imgSrc: '/images/Infinity_Castle.jpg' },
            { caseNum: 11, className: 'corner', cardNameText: 'Prison', imgSrc: '' },
        ]
    },
    {
        className: 'row4',
        cases: [
            { caseNum: 21, className: 'property fma', cardNameText: 'Central City', imgSrc: '/images/CentralCity.jpg' },
            { caseNum: 22, className: 'property fma', cardNameText: 'Ishval', imgSrc: '/images/Ishval.jpg' },
            { caseNum: 23, className: 'filler', cardNameText: 'Arc Filler', imgSrc: '/images/filler.jpg' },
            { caseNum: 24, className: 'property fma', cardNameText: 'Lior', imgSrc: '/images/Lior.jpg' },
            { caseNum: 25, className: 'property kaio', cardNameText: 'Kaio de l\'Ouest', imgSrc: '/images/Kaio_Oeste_Trans.jpg' },
            { caseNum: 26, className: 'flashback', cardNameText: 'Arc Flashback', imgSrc: '/images/flashback.jpg' },
            { caseNum: 27, className: 'property dbz', cardNameText: 'Namek', imgSrc: '/images/planet_namek___dbz_by_blackanzu_d8p5vgu-fullview.jpg' },
            { caseNum: 28, className: 'spoil', cardNameText: 'Spoil', imgSrc: '/images/spoil.jpg' },
            { caseNum: 29, className: 'property dbz', cardNameText: 'Planète Vegeta', imgSrc: '/images/planet-vegeta.jpg' },
        ]
    },
    {
        className: 'row2',
        cases: [
            { caseNum: 11, className: 'property op', cardNameText: 'Alabasta', imgSrc: '/images/alabasta.jpg' },
            { caseNum: 12, className: 'property lab', cardNameText: 'Capsule Corp', imgSrc: '/images/capsuleCorp.jpg' },
            { caseNum: 13, className: 'property op', cardNameText: 'Mary Geoise', imgSrc: '/images/Mary_Geoise.jpg' },
            { caseNum: 14, className: 'property op', cardNameText: 'Wano Kuni', imgSrc: '/images/wano.jpg' },
            { caseNum: 15, className: 'property kaio', cardNameText: 'Kaio de l\'Est', imgSrc: '/images/East_Kai.jpg' },
            { caseNum: 16, className: 'property bleach', cardNameText: 'Karakura Town', imgSrc: '/images/KarakuraTown.jpg' },
            { caseNum: 17, className: 'filler', cardNameText: 'Arc Filler', imgSrc: '/images/filler.jpg' },
            { caseNum: 18, className: 'property bleach', cardNameText: 'Hueco Mundo', imgSrc: '/images/bleach-cifer-espada-hueco.jpg' },
            { caseNum: 19, className: 'property bleach', cardNameText: 'Soul Society', imgSrc: '/images/soul-society.png' },
        ]
    },
    {
        className: 'row3',
        cases: [
            { caseNum: 31, className: 'corner', cardNameText: 'Parc', imgSrc: '' },
            { caseNum: 32, className: 'property bc', cardNameText: 'Royaume de Spade', imgSrc: '/images/The-Spade-Kingdom.png' },
            { caseNum: 33, className: 'flashback', cardNameText: 'Arc Flashback', imgSrc: '/images/flashback.jpg' },
            { caseNum: 34, className: 'property bc', cardNameText: 'Royaume de Diamond', imgSrc: '/images/Diamond_Palace.jpg' },
            { caseNum: 35, className: 'property bc', cardNameText: 'Village de Hadge', imgSrc: '/images/Paysage_de_Hadge.jpg' },
            { caseNum: 36, className: 'property kaio', cardNameText: 'Kaio du Sud', imgSrc: '/images/kaio_sud.png' },
            { caseNum: 37, className: 'property hunter', cardNameText: 'Île de la Baleine', imgSrc: '/images/Whale_Island.jpg' },
            { caseNum: 38, className: 'property lab', cardNameText: 'Laboratoire du Dr. Gero', imgSrc: '/images/Dr.GerosLabCellSaga-2.jpg' },
            { caseNum: 39, className: 'property hunter', cardNameText: 'York Shin City', imgSrc: '/images/YorkShinCity.jpg' },
            { caseNum: 40, className: 'property hunter', cardNameText: 'Greed Island', imgSrc: '/images/Greed_Island.jpg' },
            { caseNum: 41, className: 'corner', cardNameText: 'Allez en Prison', imgSrc: '' },
        ]
    },
];

// Exporter les données des cases
export { casesData };



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