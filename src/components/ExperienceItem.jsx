import { useState } from 'react'
import InputGroup from "./InputGroup";
export default function ExperienceItem({ item, onChange, uuid }) {
    const [editItem, setEdit] = useState(false);
    return (
        <>
            <div className="detail-item">
                <button type="button" onClick={() => setEdit(!editItem)}> {item.title}</button>
                {editItem && ( //Current editing entry will have visible fields
                    <section id={uuid}>
                        <InputGroup
                            type="text"
                            id="title"
                            label="Title"
                            placeholder="Title"
                            value={item.title}
                            onChange={onChange}
                        />
                        <InputGroup
                            type="text"
                            id="company"
                            label="Company Name"
                            placeholder="Company"
                            value={item.company}
                            onChange={onChange}
                        />
                        <InputGroup
                            type="textarea"
                            id="responsibilities"
                            label="Responsibilities"
                            placeholder="Responsibilities"
                            value={item.responsibilities}
                            onChange={onChange}
                        />
                        <InputGroup
                            type="text"
                            id="expStartDate"
                            label="Start Date"
                            placeholder="Date"
                            value={item.expStartDate}
                            onChange={onChange}
                        />
                        <InputGroup
                            type="text"
                            id="expEndDate"
                            label="End Date"
                            placeholder="Date"
                            value={item.expEndDate}
                            onChange={onChange}
                        />
                    </section>
                )}
            </div>
        </>
    )
}