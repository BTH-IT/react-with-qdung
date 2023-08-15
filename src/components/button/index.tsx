import "./styles.css";

const Button = ({ children, ...props }: any) => {
  return (
    <button {...props} type="button">
      {children}
    </button>
  );
};

export default Button;
