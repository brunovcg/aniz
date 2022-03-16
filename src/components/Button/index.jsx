const Button = ({ color, backgroundColor, disabled, children, width, ...rest }) => {
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
        width: width && width 
      }}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
