import SkillsItem from "./SkillsItem";
export default function SkillsInfo({ details, onChange, createForm }) {
    return (<>
        <fieldset className="skillsInfo" >
            <h2>Skills</h2>
            {details.map((entry) => //Make button for each skill entry
                <SkillsItem
                    entry={entry}
                    onChange={onChange}
                    key={entry.id}
                />
            )}
            <button type="button" onClick={createForm}>+ Additional Skill</button>
        </fieldset >
    </>)
}