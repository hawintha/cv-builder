export default function InputGroup({ type, className, label, placeholder, value, onChange }) {
    return (
        <div className="input-group">
            <label htmlFor={className}>{label} </label>
            {type === "text" ? (
                <input
                    type={type}
                    className={className}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <textarea className={className} rows="5" placeholder={placeholder} value={value} onChange={onChange}></textarea>
            )}
        </div>
    )
}