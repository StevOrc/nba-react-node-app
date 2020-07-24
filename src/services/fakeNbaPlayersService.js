
const nbaPlayers = [
    {
        id: 1,
        firstname: "Lebron",
        lastname: "James",
        allStar: true,
        franchise: {id: 1, name: "Lakers"}
    },
    {
        id: 2,
        firstname: "James",
        lastname: "Harden",
        allStar: true,
        franchise: {id: 5, name: "Rockets"}
    },
    {
        id: 3,
        firstname: "Paul",
        lastname: "George",
        allStar: true,
        franchise: {id: 2, name: "Clippers"}
    },
    {
        id: 4,
        firstname: "Kevin",
        lastname: "Durant",
        allStar: true,
        franchise: {id: 11, name: "Nets"}
    },
    {
        id: 5,
        firstname: "Nicolas",
        lastname: "Jokic",
        allStar: false,
        franchise: {id: 6, name: "Nugest"}
    },
    {
        id: 6,
        firstname: "Javal",
        lastname: "Mc Gee",
        allStar: false,
        franchise: {id: 1, name: "Lakers"}
    },
    {
        id: 7,
        firstname: "Ja",
        lastname: "Morant",
        allStar: false,
        franchise: {id: 8, name: "Grizzlies"}
    },
    {
        id: 8,
        firstname: "Zion",
        lastname: "Williamson",
        allStar: false,
        franchise: {id: 9, name: "Pelicans"}
    },
    {
        id: 9,
        firstname: "Stephen",
        lastname: "Curry",
        allStar: true,
        franchise: {id: 4, name: "Warriors"}
    },
    {
        id: 10,
        firstname: "Clay",
        lastname: "Thompson",
        allStar: true,
        franchise: {id: 4, name: "Warriors"}
    },
    {
        id: 11,
        firstname: "Anthony",
        lastname: "Davis",
        allStar: true,
        franchise: {id: 1, name: "Lakers"}
    },
    {
        id: 12,
        firstname: "Kahwi",
        lastname: "Leonard",
        allStar: true,
        franchise: {id: 2, name: "Clippers"}
    },
    {
        id: 13,
        firstname: "Russel",
        lastname: "Westbrook",
        allStar: true,
        franchise: {id: 5, name: "Rockets"}
    },
    {
        id: 14,
        firstname: "Kemba",
        lastname: "Walker",
        allStar: true,
        franchise: {id: 10, name: "Boston"}
    },
    {
        id: 15,
        firstname: "Tristas",
        lastname: "Thompson",
        allStar: false,
        franchise: {id: 12, name: "Cavaliers"}
    },
    {
        id: 16,
        firstname: "Zach",
        lastname: "Lavigne",
        allStar: false,
        franchise: {id: 3, name: "Bulls"}
    },
    {
        id: 17,
        firstname: "Aaron",
        lastname: "Gordon",
        allStar: false,
        franchise: {id: 7, name: "Magic"}
    },
    {
        id: 18,
        firstname: "Franck",
        lastname: "Nikitina",
        allStar: false,
        franchise: {id: 13, name: "Kniks"}
    }
]

export const getNbaPlayers = () => {
    return nbaPlayers;
}

export const getNbaPlayersById = (id) => {
    return nbaPlayers.find( p => p.id === id);
}

export const deleteNbaPlayer = (id) => {
    const player = nbaPlayers.find( p => p.id === id);
    nbaPlayers.slice(nbaPlayers.indexOf(player), 1);
    return player;
}