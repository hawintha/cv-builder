export default function Preview({ genDetails, eduDetails, expDetails, skillDetails }) {
    return (
        <div className="previewContainer">
            <h1>{genDetails.firstName} {genDetails.lastName}</h1>
            <div className="contact">
                <span>{genDetails.email}</span>
                <span>{genDetails.phone}</span>
                <span>{genDetails.location}</span>
            </div>
            <section>
                <h2>SUMMARY</h2>
                <p>{genDetails.summary}</p>
            </section>
            <section>
                <h2>EDUCATION</h2>
                {eduDetails.map((entry) => {
                    return (
                        <div className="entry" key={entry.id}>
                            <div className="entry-heading">
                                <span className="degree">{entry.degree}</span>
                                <span>{entry.eduStartDate} - {entry.eduEndDate}</span>
                            </div>
                            <span>{entry.school}, {entry.eduLocation} </span>
                        </div>
                    )
                })}
            </section>
            <section>
                <h2>EXPERIENCE</h2>
                {expDetails.map((entry) => {
                    return (
                        <div className="entry exp" key={entry.id}>
                            <div className="entry-heading">
                                <span className="company-title">{entry.title}, {entry.company}</span>
                                <span>{entry.expStartDate} - {entry.expEndDate}</span>
                            </div>
                            <p>{entry.responsibilities}</p>
                        </div>
                    )
                })}
            </section>
            <section>
                <h2>SKILLS</h2>
                <ul>
                    {skillDetails.map((entry) => (
                        <li className="entry skill" key={entry.id}>{entry.skillName}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}