import InputGroup from "./InputGroup";
export default function EducationInfo({ school, degree, start, end, location, onChange }) {
    return (
        <fieldset className="eduInfo">
            <legend>Education</legend>
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
                id="school"
                label="School"
                placeholder="School"
                value={school}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="eduLocation"
                label="Location"
                placeholder="City, State"
                value={location}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="eduStartDate"
                label="Start Date"
                placeholder="Date"
                value={start}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="eduEndDate"
                label="End Date"
                placeholder="Date"
                value={end}
                onChange={onChange}
            />
        </fieldset >
    )
}