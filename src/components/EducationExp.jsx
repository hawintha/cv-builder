import InputGroup from "./InputGroup";
export default function EducationExp({ school, degree, start, end, onChange }) {
    return (
        <fieldset className="eduInfo">
            <legend>Education Experience</legend>
            <InputGroup
                type="text"
                id="school"
                label="School"
                placeholder="School"
                value={school}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="degree"
                label="Degree"
                placeholder="Degree"
                value={degree}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="startDate"
                label="Start Date"
                placeholder="Date"
                value={start}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="endDate"
                label="End Date"
                placeholder="Date"
                value={end}
                onChange={onChange}
            />
        </fieldset >
    )
}