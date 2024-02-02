import InputGroup from "./InputGroup";
export default function PracticalExp({ title, company, responsibilities, start, end, onChange }) {
    return (
        <fieldset>
            <legend>Practical Experience</legend>
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
                id="jobStartDate"
                label="Start Date"
                placeholder="Date"
                value={start}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="jobEndDate"
                label="End Date"
                placeholder="Date"
                value={end}
                onChange={onChange}
            />
        </fieldset>
    )
}