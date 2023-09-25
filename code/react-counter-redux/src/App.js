import { connect } from "react-redux";
import { increment } from "./store/action";
import { decrement } from "./store/action";
import { reset } from "./store/action";

function App(props) {
  return (
    <>
      <h1>{props.count}</h1>
      <div className="flex">
        <div className="step">
          <button value="5">5</button>
          <button value="10">10</button>
          <button value="15">15</button>
        </div>
        <div className="max">
          <button value="15">15</button>
          <button value="100">100</button>
          <button value="200">200</button>
        </div>
      </div>

      <button onClick={() => props.dispatch(increment())}> increment</button>
      <button onClick={() => props.dispatch(decrement())}>decrement</button>
      <button onClick={() => props.dispatch(reset())}>reset</button>
    </>
  );
}

function getCount(state) {
  return { count: state.value };
}

export default connect(getCount)(App);
