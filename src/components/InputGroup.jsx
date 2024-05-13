export default function InputGroup({ type, id, label, placeholder, value, onChange }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label} </label>
            {type === "text" ? (
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <textarea name={id} id={id} rows="5" placeholder={placeholder}></textarea>
            )}
        </div>
    )
}