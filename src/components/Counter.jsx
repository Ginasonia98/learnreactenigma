//counter.jsx
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const selector = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  const selectorMessage = useSelector((store) => store.message);

  const [count, setCount] = useState(selector.count);
  const [inputCounter, setInputCounter] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
    dispatch({ type: "INCREMENT" });
  };

  const decrementCounter = () => {
    setCount(count - 1);
    dispatch({ type: "DECREMENT" });
  };

  const incrementGlobalCounter = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementGlobalCounter = () => {
    dispatch({ type: "DECREMENT" });
  };

  const setGlobalCounter = () => {
    if (!isNaN(inputCounter)) {
      dispatch({
        type: "SET",
        payload: inputCounter,
      });
    } else {
      dispatch({
        type: "SET",
        payload: 0,
      });
    }
  };

  return (
    <div>
      <h1 className="text-center">Local State Version</h1>
      <div className="flex items-center justify-around min-h-32">
        <Button onPress={decrementCounter} color="danger">
          Substract
        </Button>
        <span className="text-3xl font-semibold">{count}</span>
        <Button onPress={incrementCounter} color="primary">
          Add
        </Button>
      </div>
      <Divider />
      <h1 className="text-center">Global State Version</h1>
      <div className="flex items-center justify-around min-h-32">
        <Button onPress={decrementGlobalCounter} color="danger">
          Substract
        </Button>
        <div className="flex flex-col gap-1">
          <Input
            type="number"
            value={inputCounter}
            onChange={(event) => {
              const value = parseInt(event.target.value, 10);
              setInputCounter(isNaN(value) ? 0 : value); // Ensure value is valid
            }}
          />
          <Button onPress={setGlobalCounter} color="secondary">
            Set
          </Button>
        </div>
        <Button onPress={incrementGlobalCounter} color="primary">
          Add
        </Button>
      </div>
      <p className="text-center text-xl font-semibold">
        Global count : {selector.count}
      </p>
      <p className="text-center text-xl font-semibold">
        Global Message : {selectorMessage}
      </p>
    </div>
  );
};

export default Counter;

//menggunakan class component
// class Counter extends React.Component {
//   state = {
//     count: 0,
//     inputCounter: 0,
//   };
//   incrementCounter = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   decrementCounter = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <div className="flex items-center justify-around min-h-32">
//           <Button onPress={this.decrementCounter} color="danger">
//             Substract
//           </Button>
//           <span className="text-3xl font-semibold">{this.state.count}</span>
//           <Button onPress={this.incrementCounter} color="primary">
//             Add
//           </Button>
//         </div>
//         <Divider />
//         <h1 className="text-center">Global State Version</h1>
//         <div className="flex items-center justify-around min-h-32">
//           <Button onPress={this.props.decrementGlobalCounter} color="danger">
//             Substract
//           </Button>
//           <div className="flex flex-col gap-1">
//             <Input
//               type="number"
//               value={this.state.inputCounter}
//               onChange={(event) => {
//                 this.setState({ inputCounter: parseInt(event.target.value) });
//               }}
//             />
//             <Button
//               onPress={() =>
//                 this.props.setGlobalCounter(this.state.inputCounter)
//               }
//               color="secondary"
//             >
//               Set
//             </Button>
//           </div>
//           <Button onPress={this.props.incrementGlobalCounter} color="primary">
//             Add
//           </Button>
//         </div>
//         <p className="text-center text-xl font-semibold">
//           Global count : {this.props.counter.count}
//         </p>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (store) => {
//   //global state akan diconvert menjadi props
//   return {
//     counter: store.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementGlobalCounter: () => {
//       dispatch({
//         type: "INCREMENT",
//       });
//     },
//     decrementGlobalCounter: () => {
//       dispatch({
//         type: "DECREMENT",
//       });
//     },
//     setGlobalCounter: (inputCount) => {
//       dispatch({
//         type: "SET",
//         payload: inputCount,
//       });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// // export default Counter;
