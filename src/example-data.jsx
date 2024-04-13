import { v4 as uuidv4 } from 'uuid';
const exampleData = {
    genDetails: {
        firstName: "Mickey",
        lastName: "Mouse",
        email: "mickeymouse@waltdisney.com",
        phone: "(877) 764-2539",
        location: "Burbank, CA"
    },
    eduDetails: [
        {
            school: "University of Disneyland",
            degree: "Bachelor of Arts in Theater",
            eduLocation: "Anaheim, CA",
            eduStartDate: "1932",
            eduEndDate: "1936",
            id: uuidv4(),
            isCollapsed: true
        },
        {
            school: "High School Musical",
            degree: "High School Diploma",
            eduLocation: "Salt Lake City, UT",
            eduStartDate: "1928",
            eduEndDate: "1932",
            id: uuidv4(),
            isCollapsed: true
        },
    ],
    expDetails: [
        {
            title: "Sensational Six Leader",
            company: "The Walt Disney Company",
            responsibilities: "Played the role of a an easygoing leader of The Sensational Six in the animated TV series, \"Mickey Mouse Clubhouse.\" Demonstrated versatility as an actor by portraying a complex character and delivering many compelling performances for 125 episodes.",
            expStartDate: "2005",
            expEndDate: "2016",
            id: uuidv4()
        },
        {
            title: "Ghost Exterminator",
            company: "Ajax Corporation",
            responsibilities: "Played the role of a ghost exterminator in the animated cartoon, \"Lonesome Ghosts.\" Worked alongside Donald Duck and Goofy as a member of the Ajax Ghost Exterminators.",
            expStartDate: "1937",
            expEndDate: "1937",
            id: uuidv4()
        }
    ]
}

export default exampleData;