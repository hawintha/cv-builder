import { useState } from 'react'
import InputGroup from "./InputGroup";
export default function ExperienceInfo({ details, onChange, extraForm }) {
    return (<>
        <fieldset className="expInfo" >
            <h2>Experience</h2>
            {details.map((entry) => { //Make button & fields for each experience entry
                const [isEditing, setEdit] = useState(false);
                return (
                    <div className="detail-item" key={entry.id}>
                        <button type="button" onClick={() => setEdit(!isEditing)}> {entry.title}</button>
                        {isEditing && ( //Current editing entry will have visible fields
                            <section id={uuid}>
                                <InputGroup
                                    type="text"
                                    id="title"
                                    label="Title"
                                    placeholder="Title"
                                    value={entry.title}
                                    onChange={onChange}
                                />
                                <InputGroup
                                    type="text"
                                    id="company"
                                    label="Company Name"
                                    placeholder="Company"
                                    value={entry.company}
                                    onChange={onChange}
                                />
                                <InputGroup
                                    type="textarea"
                                    id="responsibilities"
                                    label="Responsibilities"
                                    placeholder="Responsibilities"
                                    value={entry.responsibilities}
                                    onChange={onChange}
                                />
                                <InputGroup
                                    type="text"
                                    id="expStartDate"
                                    label="Start Date"
                                    placeholder="Date"
                                    value={entry.expStartDate}
                                    onChange={onChange}
                                />
                                <InputGroup
                                    type="text"
                                    id="expEndDate"
                                    label="End Date"
                                    placeholder="Date"
                                    value={entry.expEndDate}
                                    onChange={onChange}
                                />
                            </section>
                        )}
                    </div>
                )
            })}
            <button type="button" onClick={extraForm}>+ Additional Experience</button>
        </fieldset >
    </>)
}