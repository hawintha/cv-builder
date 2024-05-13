import { useState } from 'react';
import InputGroup from "./InputGroup";
export default function SkillsInfo({ details, onChange, createForm }) {
    return (<>
        <fieldset className="skillsInfo" >
            <h2>Skills</h2>
            {details.map((entry) => {//Make button for each skill entry
                const [isEditing, setEdit] = useState(false);
                return (
                    <div className="detail-item" key={entry.id}>
                        <button type="button" onClick={() => setEdit(!isEditing)}> {entry.skillName}</button>
                        {isEditing && ( //Current editing entry will have visible fields
                            <section id={entry.id} >
                                <InputGroup
                                    type="text"
                                    id="skillName"
                                    label="Skill Name"
                                    placeholder="Skill"
                                    value={entry.skillName}
                                    onChange={onChange}
                                />
                            </section>
                        )}
                    </div>
                )
            })}
            <button type="button" onClick={createForm}>+ Additional Skill</button>
        </fieldset >
    </>)
}