
const nbaPlayers = [
    {
        id: 1,
        firstname: "Lebron",
        lastname: "James",
        isLiked: false,
        allStar: true,
        franchise: {id: 1, conference:'West', name: "Lakers"}
    },
    {
        id: 2,
        firstname: "James",
        lastname: "Harden",
        isLiked: false,
        allStar: true,
        franchise: {id: 5, conference:'West', name: "Rockets"}
    },
    {
        id: 3,
        firstname: "Paul",
        lastname: "George",
        isLiked: false,
        allStar: true,
        franchise: {id: 2, conference:'West', name: "Clippers"}
    },
    {
        id: 4,
        firstname: "Kevin",
        lastname: "Durant",
        isLiked: false,
        allStar: true,
        franchise: {id: 11, conference:'East', name: "Nets"}
    },
    {
        id: 5,
        firstname: "Nicolas",
        lastname: "Jokic",
        isLiked: false,
        allStar: false,
        franchise: {id: 6, conference:'West', name: "Nugest"}
    },
    {
        id: 6,
        firstname: "Javal",
        lastname: "Mc Gee",
        isLiked: false,
        allStar: false,
        franchise: {id: 1, conference:'West', name: "Lakers"}
    },
    {
        id: 7,
        firstname: "Ja",
        lastname: "Morant",
        isLiked: false,
        allStar: false,
        franchise: {id: 8, conference:'West', name: "Grizzlies"}
    },
    {
        id: 8,
        firstname: "Zion",
        lastname: "Williamson",
        isLiked: false,
        allStar: false,
        franchise: {id: 9, conference:'West', name: "Pelicans"}
    },
    {
        id: 9,
        firstname: "Stephen",
        lastname: "Curry",
        isLiked: false,
        allStar: true,
        franchise: {id: 4, conference:'West', name: "Warriors"}
    },
    {
        id: 10,
        firstname: "Clay",
        lastname: "Thompson",
        isLiked: false,
        allStar: true,
        franchise: {id: 4, conference:'West', name: "Warriors"}
    },
    {
        id: 11,
        firstname: "Anthony",
        lastname: "Davis",
        isLiked: false,
        allStar: true,
        franchise: {id: 1, conference:'West', name: "Lakers"}
    },
    {
        id: 12,
        firstname: "Kahwi",
        lastname: "Leonard",
        isLiked: false,
        allStar: true,
        franchise: {id: 2, conference:'West', name: "Clippers"}
    },
    {
        id: 13,
        firstname: "Russel",
        lastname: "Westbrook",
        isLiked: false,
        allStar: true,
        franchise: {id: 5, conference:'West', name: "Rockets"}
    },
    {
        id: 14,
        firstname: "Kemba",
        lastname: "Walker",
        isLiked: false,
        allStar: true,
        franchise: {id: 10, conference:'East', name: "Boston"}
    },
    {
        id: 15,
        firstname: "Tristas",
        lastname: "Thompson",
        isLiked: false,
        allStar: false,
        franchise: {id: 12, conference:'East', name: "Cavaliers"}
    },
    {
        id: 16,
        firstname: "Zach",
        lastname: "Lavigne",
        isLiked: false,
        allStar: false,
        franchise: {id: 3, conference:'East', name: "Bulls"}
    },
    {
        id: 17,
        firstname: "Aaron",
        lastname: "Gordon",
        isLiked: false,
        allStar: false,
        franchise: {id: 7, conference:'East', name: "Magic"}
    },
    {
        id: 18,
        firstname: "Franck",
        lastname: "Nikitina",
        isLiked: false,
        allStar: false,
        franchise: {id: 13, conference:'East', name: "Kniks"}
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
    nbaPlayers.splice(nbaPlayers.indexOf(player), 1);
    return player;
}

export const toogleLikePlayer = (id) => {
    const index = nbaPlayers.findIndex( player => player.id === id );
    nbaPlayers[index].isLiked = !nbaPlayers[index].isLiked;
}