import classes from './Button.module.css';

const Button = (props) => {
  const { onClick, children } = props;
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
