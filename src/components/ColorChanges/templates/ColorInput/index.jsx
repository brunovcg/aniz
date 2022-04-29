const ColorInput = ({
  type = "color",
  value,
  label,
  onBlur = () => {},
  onChange = () => {},
  id,
}) => {
  const isNumber = typeof value === "number";
  const isUrl = type === "url";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: isUrl ? "100%" : "90px",
      }}
    >
      <label
        style={{
          width: "80%",
          wordWrap: "wrap",
          textAlign: "center",
          fontSize: "10px",
          fontWeight: "bold",
        }}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        style={{
          width: isUrl ? "100%" : isNumber ? "60px" : "40px",
          height: "40px",
          fontSize: "15px",
          paddingLeft: isUrl && "10px",
          border: "var(--grey) 2px solid"
        }}
        id={id}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        max={isNumber ? "0" : null}
        min={isNumber ? "0" : null}
      />
    </div>
  );
};

export default ColorInput;
