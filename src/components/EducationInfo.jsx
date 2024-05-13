import { useState } from 'react';
import InputGroup from "./InputGroup";
export default function EducationInfo({ details, onChange, createForm }) {
    return (<>
        <fieldset className="eduInfo" >
            <h2>Education</h2>
            {details.map((entry) => {//Make button & fields for each education entry
                const [isEditing, setEdit] = useState(false);
                return (
                    <div className="detail-item" key={entry.id}>
                        <button type="button" onClick={() => setEdit(!isEditing)}> {entry.school}</button>
                        {isEditing && ( //Current editing entry will have visible fields
                            <section id={entry.id}>
                                <InputGroup
                                    type="text"
                                    id="degree"
                                    label="Degree"
                                    placeholder="Degree"
                                    value={entry.degree}
                                    onChange={onChange}
                                />
                                <InputGroup
                                    type="text"
                                    id="school"
                                    label="School"
                                    placeholder="School"
                                    value={entry.school}
                                    onChange={onChange}
                                />
                                <InputGroup
                                    type="text"
                                    id="eduLocation"
                                    label="Location"
                                    placeholder="City, State"
                                    value={entry.eduLocation}
                                    onChange={onChange}
                                />
                                <InputGroup
                                    type="text"
                                    id="eduStartDate"
                                    label="Start Date"
                                    placeholder="Date"
                                    value={entry.eduStartDate}
                                    onChange={onChange}
                                />
                                <InputGroup
                                    type="text"
                                    id="eduEndDate"
                                    label="End Date"
                                    placeholder="Date"
                                    value={entry.eduEndDate}
                                    onChange={onChange}
                                />
                            </section>
                        )}
                    </div>
                )
            })}
            <button type="button" onClick={createForm}>+ Additional Education</button>
        </fieldset >
    </>)
}