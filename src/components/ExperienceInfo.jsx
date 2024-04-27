import ExperienceItem from "./ExperienceItem";
export default function ExperienceInfo({ details, onChange, extraForm }) {
    return (<>
        <fieldset className="expInfo" >
            <h2>Experience</h2>
            {details.map((entry) => //Make button & fields for each experience entry
                <ExperienceItem
                    item={entry}
                    onChange={onChange}
                    key={entry.id}
                    uuid={entry.id}
                />
            )}
            <button type="button" onClick={extraForm}>+ Additional Experience</button>
        </fieldset >
    </>)
}