import InputGroup from "./InputGroup";
export default function GeneralInfo({ details, onChange }) {
    return (
        <fieldset className="genInfo">
            <h2>General Information</h2>
            <InputGroup
                type="text"
                id="firstName"
                label="First Name"
                placeholder="First Name"
                value={details.firstName}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="lastName"
                label="Last Name"
                placeholder="Last Name"
                value={details.lastName}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="email"
                label="Email"
                placeholder="example@company.com"
                value={details.email}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="phone"
                label="Phone"
                placeholder="(000) 000 - 0000"
                value={details.phone}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="location"
                label="Location"
                placeholder="City, State"
                value={details.location}
                onChange={onChange}
            />
            <InputGroup
                type="textarea"
                id="summary"
                label="Summary"
                placeholder="About Yourself"
                value={details.summary}
                onChange={onChange}
            />
        </fieldset>
    )
}
