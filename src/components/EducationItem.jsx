import { useState } from 'react'
import InputGroup from "./InputGroup";
export default function EducationItem({ entry, onChange, onDelete }) {
    const [isEditing, setEdit] = useState(true);
    return (<>
        <div className="detail-item">
            <button type="button" onClick={() => setEdit(!isEditing)}>{entry.school}</button>
            {isEditing && ( //Current editing entry will have visible fields
                <section id={entry.id}>
                    <InputGroup
                        type="text"
                        className="degree"
                        label="Degree"
                        placeholder="Degree"
                        value={entry.degree}
                        onChange={onChange}
                    />
                    <InputGroup
                        type="text"
                        className="school"
                        label="School"
                        placeholder="School"
                        value={entry.school}
                        onChange={onChange}
                    />
                    <InputGroup
                        type="text"
                        className="eduLocation"
                        label="Location"
                        placeholder="City, State"
                        value={entry.eduLocation}
                        onChange={onChange}
                    />
                    <InputGroup
                        type="text"
                        className="eduStartDate"
                        label="Start Date"
                        placeholder="Date"
                        value={entry.eduStartDate}
                        onChange={onChange}
                    />
                    <InputGroup
                        type="text"
                        className="eduEndDate"
                        label="End Date"
                        placeholder="Date"
                        value={entry.eduEndDate}
                        onChange={onChange}
                    />
                    <div className='formBtns'>
                        <button type="button" className='deleteBtn' onClick={(e) => onDelete(e)}>Delete</button>
                        <button type="button" className='closeBtn' onClick={() => setEdit(!isEditing)}>Close</button>
                    </div>
                </section>
            )}
        </div>
    </>)
}