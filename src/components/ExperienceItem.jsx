import { useState } from 'react'
import InputGroup from "./InputGroup";
export default function EducationItem({ entry, onChange, onDelete }) {
    const [isEditing, setEdit] = useState(true);
    return (<>
        <div className="detail-item" key={entry.id}>
            <button type="button" onClick={() => setEdit(!isEditing)}>{entry.title}</button>
            {isEditing && ( //Current editing entry will have visible fields
                <section id={entry.id}>
                    <InputGroup
                        type="text"
                        className="company"
                        label="Company Name"
                        placeholder="Company"
                        value={entry.company}
                        onChange={onChange}
                    />
                    <InputGroup
                        type="text"
                        className="title"
                        label="Title"
                        placeholder="Title"
                        value={entry.title}
                        onChange={onChange}
                    />
                    <InputGroup
                        type="textarea"
                        className="responsibilities"
                        label="Responsibilities"
                        placeholder="Responsibilities"
                        value={entry.responsibilities}
                        onChange={onChange}
                    />
                    <InputGroup
                        type="text"
                        className="expStartDate"
                        label="Start Date"
                        placeholder="Date"
                        value={entry.expStartDate}
                        onChange={onChange}
                    />
                    <InputGroup
                        type="text"
                        className="expEndDate"
                        label="End Date"
                        placeholder="Date"
                        value={entry.expEndDate}
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