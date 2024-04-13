export default function InputGroup({ type, id, label, placeholder, value, onChange, "data-key": dataKey }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label} </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                data-key={dataKey}
            />
        </div>
    )
}