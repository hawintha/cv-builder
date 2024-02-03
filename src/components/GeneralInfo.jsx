import InputGroup from "./InputGroup";
export default function GeneralInfo({ firstName, lastName, email, phone, location, onChange }) {
    return (
        <fieldset className="genInfo">
            <legend>General Information</legend>
            <InputGroup
                type="text"
                id="firstName"
                label="First Name"
                placeholder="First Name"
                value={firstName}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="lastName"
                label="Last Name"
                placeholder="Last Name"
                value={lastName}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="email"
                label="Email"
                placeholder="example@company.com"
                value={email}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="phone"
                label="Phone"
                placeholder="(000) 000 - 0000"
                value={phone}
                onChange={onChange}
            />
            <InputGroup
                type="text"
                id="location"
                label="Location"
                placeholder="City, State"
                value={location}
                onChange={onChange}
            />
        </fieldset>
    )
}
