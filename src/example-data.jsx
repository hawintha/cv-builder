import { v4 as uuidv4 } from 'uuid';
const exampleData = {
    genDetails: {
        firstName: "Mickey",
        lastName: "Mouse",
        email: "mickeymouse@waltdisney.com",
        phone: "(877) 764-2539",
        location: "Burbank, CA",
        summary: "Passionate performer with a strong acting background and decades of experience in the entertainment industry. Known for meticulous attention to detail, mastery of dramatic techniques, and proven ability to collaborate effectively within a team."
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
            company: "The Walt Disney Company",
            title: "Sensational Six Leader",
            responsibilities: "Played the role of a an easygoing leader of The Sensational Six in the animated TV series, \"Mickey Mouse Clubhouse.\" Demonstrated versatility as an actor by portraying a complex character and delivering many compelling performances for 125 episodes.",
            expStartDate: "2005",
            expEndDate: "2016",
            id: uuidv4()
        },
        {

            company: "Ajax Corporation",
            title: "Ghost Exterminator",
            responsibilities: "Played the role of a ghost exterminator in the animated cartoon, \"Lonesome Ghosts.\" Worked alongside Donald Duck and Goofy as a member of the Ajax Ghost Exterminators.",
            expStartDate: "1937",
            expEndDate: "1937",
            id: uuidv4()
        }
    ],
    skillDetails: [
        {
            skillName: "Communication",
            id: uuidv4(),
            isCollapsed: true
        },
        {
            skillName: "Leadership",
            id: uuidv4(),
            isCollapsed: true
        },
        {
            skillName: "Creativity",
            id: uuidv4(),
            isCollapsed: true
        },
        {
            skillName: "Dance",
            id: uuidv4(),
            isCollapsed: true
        },
        {
            skillName: "Problem Solving",
            id: uuidv4(),
            isCollapsed: true
        },
        {
            skillName: "Flexibility",
            id: uuidv4(),
            isCollapsed: true
        },
        {
            skillName: "Piano",
            id: uuidv4(),
            isCollapsed: true
        },
        {
            skillName: "Magic",
            id: uuidv4(),
            isCollapsed: true
        }
    ]
}

export default exampleData;