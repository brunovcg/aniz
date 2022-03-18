const Button = ({
  color,
  backgroundColor,
  disabled,
  children,
  fontSize,
  height,
  width,
  margin,
  circle,
  ...rest
}) => {
  return (
    <button
      style={{
        padding: "7px",
        backgroundColor: disabled
          ? "var(--grey)"
          : backgroundColor
          ? backgroundColor
          : "var(--red)",
        color: color ? color : "var(--white)",
        fontWeight: "bold",
        width: width && width,
        height: height && height,
        fontSize: fontSize && fontSize,
        margin: margin && margin,
        borderRadius: circle && "50%",
        display: "flex", 
        alignItems: "center",
        justifyContent: "center"
      }}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
