export default function Preview({ genDetails, eduDetails, expDetails }) {
    return (
        <div className="previewContainer">
            <h1>{genDetails.firstName} {genDetails.lastName}</h1>
            <div className="contact">
                <span>{genDetails.email}</span>
                <span>{genDetails.phone}</span>
                <span>{genDetails.location}</span>
            </div>
            <section>
                <h2>EDUCATION</h2>
                <div className="entry">
                    <div className="entry-heading">
                        <span className="degree">{eduDetails.degree}</span>
                        <span>{eduDetails.eduStartDate} - {eduDetails.eduEndDate}</span>
                    </div>
                    <span>{eduDetails.school}, {eduDetails.eduLocation} </span>
                </div>
            </section>
            <section>
                <h2>EXPERIENCE</h2>
                <div className="entry exp">
                    <div className="entry-heading">
                        <span className="company-title">{expDetails.title}, {expDetails.company}</span>
                        <span>{expDetails.expStartDate} - {expDetails.expEndDate}</span>
                    </div>
                    <p>{expDetails.responsibilities}</p>
                </div>
            </section>

        </div>
    )
}