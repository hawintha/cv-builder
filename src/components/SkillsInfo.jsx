import SkillsItem from "./SkillsItem";
export default function SkillsInfo({ details, onChange, createForm, onDelete }) {
    return (<>
        <fieldset className="skillDetails" >
            <h2>Skills</h2>
            {details.map((entry) => //Make button for each skill entry
                <SkillsItem
                    entry={entry}
                    onChange={onChange}
                    onDelete={onDelete}
                    key={entry.id}
                />
            )}
            <button type="button" onClick={createForm}>+ Additional Skill</button>
        </fieldset >
    </>)
}