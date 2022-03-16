const Button = ({ children, ...rest }) => {
  return (
    <button
      style={{
        padding: "7px",
        backgroundColor: "var(--light-red)",
        color: "var(--white)",
        fontWeight: "bold"
       
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
