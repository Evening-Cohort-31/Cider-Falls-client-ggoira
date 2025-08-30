const database = {
    destinations: [
        {
            id: 1,
            name: "Chamfort River",
            location: "northeast"        
        }, 
        {
            id: 2,
            name: "Lose Wolf Hiking",
            location: "north"
        }, 
        { 
            id: 3,
            name: "Lodge",
            location: "northwest"
        },
        {
            id: 4,
            name: "Gander River",
            location: "southwest"
        }, 
        {
            id: 5,
            name: "Campgrounds",
            location: "south"
        }, 
        {
            id: 6,
            name: "Pine Bluff Trails",
            location: "southeast"
        },
    ], 
    services: [
        {
            id: 1,
            name: "rafting"
        }, 
        {
            id: 2,
            name: "canoeing"
        }, 
        {
            id: 3,
            name: "fishing"
        }, 
        {
            id: 4,
            name: "hiking"
        }, 
        {
            id: 5,
            name: "picnicking"
        }, 
        {
            id: 6,
            name: "rock climbing"
        },
        {
            id: 7,
            name: "lodging"
        },
        {
            id: 8,
            name: "parking",
        }, 
        {
            id: 9,
            name: "information"
        }, 
        {
            id: 10,
            name: "zip lines"
        }
    ], 
    guests :[
        { id: 1, first_name: "Olivia", last_name: "Smith" },
        { id: 2, first_name: "Liam", last_name: "Johnson" },
        { id: 3, first_name: "Emma", last_name: "Williams" },
        { id: 4, first_name: "Noah", last_name: "Brown" },
        { id: 5, first_name: "Ava", last_name: "Jones" },
        { id: 6, first_name: "Sophia", last_name: "Garcia" },
        { id: 7, first_name: "Mason", last_name: "Martinez" },
        { id: 8, first_name: "Isabella", last_name: "Davis" },
        { id: 9, first_name: "Lucas", last_name: "Rodriguez" },
        { id: 10, first_name: "Mia", last_name: "Hernandez" },
        { id: 11, first_name: "Ethan", last_name: "Lopez" },
        { id: 12, first_name: "Charlotte", last_name: "Gonzalez" },
        { id: 13, first_name: "Benjamin", last_name: "Wilson" },
        { id: 14, first_name: "Amelia", last_name: "Anderson" },
        { id: 15, first_name: "Elijah", last_name: "Thomas" }
    ]
}

export const getDestinations = () => {
    return structuredClone(database.destinations)
}

export const getServices = () => {
    return structuredClone(database.services)
}

export const getGuests = () => {
    return structuredClone(database.guests)
}