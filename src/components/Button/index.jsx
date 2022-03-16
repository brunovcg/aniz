const Button = ({ color, backgroundColor, children, ...rest }) => {
  return (
    <button
      style={{
        padding: "7px",
        backgroundColor: backgroundColor ? backgroundColor:"var(--light-red)",
        color: color? color: "var(--white)",
        fontWeight: "bold"
       
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
