import { useState } from 'react'
import InputGroup from "./InputGroup";
export default function EducationItem({ item, onChange, uuid }) {
    const [editItem, setEdit] = useState(false);
    return (
        <>
            <div className="detail-item">
                <button type="button" onClick={() => setEdit(!editItem)}> {item.school}</button>
                {editItem && ( //Current editing entry will have visible fields
                    <section id={uuid}>
                        <InputGroup
                            type="text"
                            id="degree"
                            label="Degree"
                            placeholder="Degree"
                            value={item.degree}
                            onChange={onChange}
                        />
                        <InputGroup
                            type="text"
                            id="school"
                            label="School"
                            placeholder="School"
                            value={item.school}
                            onChange={onChange}
                        />
                        <InputGroup
                            type="text"
                            id="eduLocation"
                            label="Location"
                            placeholder="City, State"
                            value={item.eduLocation}
                            onChange={onChange}
                        />
                        <InputGroup
                            type="text"
                            id="eduStartDate"
                            label="Start Date"
                            placeholder="Date"
                            value={item.eduStartDate}
                            onChange={onChange}
                        />
                        <InputGroup
                            type="text"
                            id="eduEndDate"
                            label="End Date"
                            placeholder="Date"
                            value={item.eduEndDate}
                            onChange={onChange}
                        />
                    </section>
                )}
            </div>
        </>
    )
}