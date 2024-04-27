import EducationItem from "./EducationItem";
export default function EducationInfo({ details, onChange, createForm }) {
    return (<>
        <fieldset className="eduInfo" >
            <h2>Education</h2>
            {details.map((entry) => //Make button & fields for each education entry
                <EducationItem
                    item={entry}
                    onChange={onChange}
                    key={entry.id}
                    uuid={entry.id}
                />
            )}
            <button type="button" onClick={createForm}>+ Additional Education</button>
        </fieldset >
    </>)
}