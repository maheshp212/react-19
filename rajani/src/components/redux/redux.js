import { useDispatch, useSelector } from 'react-redux'
const Redux = () => {
  const counter = useSelector((state) => (!!state?.counter ? state?.counter : 0));
  const dispatch = useDispatch();

  const incHandler = () => {
    dispatch({ type: "increment" });
  };

  const decHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <>
      {/* //https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif */}
      im Redux - {counter} <br />
      <button onClick={incHandler}>Inc </button>
      <button onClick={decHandler}>Dec </button>
    </>
  );
};

export default Redux;
