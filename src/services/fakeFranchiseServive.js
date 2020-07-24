
const franchises = [
    {
        id: 1,
        name: "Los Angeles Lakers",
        shortName:'Lakers',
        conference: "West",
        city: 'Los Angeles'
    },
    {
        id: 2,
        name: "Los Angeles Clippers",
        shortName:'Clippers',
        conference: "West",
        city: 'Los Angeles'
    },
    {
        id: 3,
        name: "Chicago Bulls",
        shortName:'Bulls',
        conference: "East",
        city: 'Chicago'
    },
    {
        id: 4,
        name: "Golden State Warriors",
        shortName:'Warriors',
        conference: "West",
        city: 'San Francisco'
    },
    {
        id: 5,
        name: "Houston Rockets",
        shortName:'Rockets',
        conference: "West",
        city: 'Houston'
    },
    {
        id: 6,
        name: "Denver Nuggets",
        shortName:'Nuggets',
        conference: "West",
        city: 'Denver'
    },
    {
        id: 7,
        name: "Orlando Magic",
        shortName:'Magic',
        conference: "East",
        city: 'Orlando'
    },
    {
        id: 8,
        name: "Memphis Grizzlies",
        shortName:'Grizzlies',
        conference: "East",
        city: 'Orlando'
    },
    {
        id: 9,
        name: "New Orleans Pelicans",
        shortName:'Pelicans',
        conference: "West",
        city: 'New Orleans'
    },
    {
        id: 10,
        name: "Boston Celtics",
        shortName:'Celtics',
        conference: "East",
        city: 'Boston'
    },
    {
        id: 11,
        name: "Broklyn Nets",
        shortName:'Nets',
        conference: "East",
        city: 'New York'
    },
    {
        id: 12,
        name: "Cleveland Cavaliers",
        shortName:'Cavs',
        conference: "East",
        city: 'Cleveland'
    },
    {
        id: 13,
        name: "New York Kniks",
        shortName:'Kniks',
        conference: "East",
        city: 'New York'}
]

export const getFranhises = () => {
    return franchises;
}

export const getFranhiseById = (id) => {
    return franchises.find( el => el.id === id);
}
