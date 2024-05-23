import InputGroup from "./InputGroup";
export default function GeneralInfo({ details, onChange }) {
    return (
        <fieldset className="genDetails">
            <h2>General Information</h2>
            <InputGroup
                type="text"
                className="firstName"
                label="First Name"
                placeholder="First Name"
                value={details.firstName}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                className="lastName"
                label="Last Name"
                placeholder="Last Name"
                value={details.lastName}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                className="email"
                label="Email"
                placeholder="example@company.com"
                value={details.email}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                className="phone"
                label="Phone"
                placeholder="(000) 000 - 0000"
                value={details.phone}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                className="location"
                label="Location"
                placeholder="City, State"
                value={details.location}
                onChange={onChange}
            />
            <InputGroup
                type="textarea"
                className="summary"
                label="Summary"
                placeholder="About Yourself"
                value={details.summary}
                onChange={onChange}
            />
        </fieldset>
    )
}
