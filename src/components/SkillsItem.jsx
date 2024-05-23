import { useState } from 'react'
import InputGroup from "./InputGroup";
export default function SkillsItem({ entry, onChange, onDelete  }) {
    const [isEditing, setEdit] = useState(false);
    return (<>
        <div className="detail-item" key={entry.id}>
            <button type="button" onClick={() => setEdit(!isEditing)}>{entry.skillName}</button>
            {isEditing && ( //Current editing entry will have visible fields
                <section id={entry.id} >
                    <InputGroup
                        type="text"
                        className="skillName"
                        label="Skill Name"
                        placeholder="Skill"
                        value={entry.skillName}
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