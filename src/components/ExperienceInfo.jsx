import ExperienceItem from "./ExperienceItem";
export default function ExperienceInfo({ details, onChange, extraForm, onDelete }) {
    return (<>
        <fieldset className="expDetails" >
            <h2>Experience</h2>
            {details.map((entry) => //Make button & fields for each experience entry
                <ExperienceItem
                    entry={entry}
                    onChange={onChange}
                    onDelete={onDelete}
                    key={entry.id}
                />
            )}
            <button type="button" onClick={extraForm}>+ Additional Experience</button>
        </fieldset >
    </>)
}