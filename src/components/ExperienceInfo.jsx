import InputGroup from "./InputGroup";
export default function ExperienceInfo({ title, company, responsibilities, start, end, onChange }) {
    return (
        <fieldset className="expInfo">
            <legend>Experience</legend>
            <InputGroup
                type="text"
                id="title"
                label="Position Title"
                placeholder="Title"
                value={title}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="company"
                label="Company Name"
                placeholder="Company"
                value={company}
                onChange={onChange}
            />
            <InputGroup
                type="textarea"
                id="responsibilities"
                label="Responsibilities"
                placeholder="Responsibilities"
                value={responsibilities}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="expStartDate"
                label="Start Date"
                placeholder="Date"
                value={start}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="expEndDate"
                label="End Date"
                placeholder="Date"
                value={end}
                onChange={onChange}
            />
        </fieldset>
    )
}