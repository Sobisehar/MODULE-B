import { useSelector } from "react-redux";

const Header = () => {
  const { counter } = useSelector((state) => state.counterReducer);

  return (
    <div>
      <h1>Counter: {counter} </h1>
    </div>
  );
};

export default Header;
