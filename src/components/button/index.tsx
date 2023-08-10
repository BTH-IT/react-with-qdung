/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
import "./styles.css";

const Button = ({ children, ...props }: any) => {
  return (
    <button {...props} type="button">
      {children}
    </button>
  );
};

export default Button;
