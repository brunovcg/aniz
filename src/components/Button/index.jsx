const Button = ({
  color,
  backgroundColor,
  disabled,
  children,
  fontSize,
  height,
  width,
  margin,
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
          : "var(--light-red)",
        color: color ? color : "var(--white)",
        fontWeight: "bold",
        width: width && width,
        height: height && height,
        fontSize: fontSize && fontSize,
        margin: margin && margin,
      }}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
