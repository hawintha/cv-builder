import { useState } from 'react'
import InputGroup from "./InputGroup";
export default function SkillsItem({ entry, onChange }) {
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
                </section>
            )}
        </div>
    </>)
}