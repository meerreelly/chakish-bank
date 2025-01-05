const Button = ({ onClick, children }) => {
    return (
      <button onClick={onClick} className="Custombtn">
        {children}
      </button>
    );
  };
  
  export default Button;
  