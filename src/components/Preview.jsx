export default function Preview({ generalDetails, eduDetails, practicalDetails }) {
    return (
        <div className="previewContainer">
            <h1>{generalDetails.firstName} {generalDetails.lastName}</h1>
            <h2>Education</h2>
            <span>{eduDetails.school}</span>
            <h2>Practical Experience</h2>
            <span>{practicalDetails.company}</span>
        </div>
    )
}