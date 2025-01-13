/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react"; // Corrected import
import { Input } from "@nextui-org/input";
//dalam class component
import { connect } from "react-redux";
// import { useState } from "react";
//dalam functional component
// import { useDispatch, useSelector } from "react-redux";
import React from "react";

//menggunakan functional component
// const Counter = () => {
//   const selector = useSelector((store) => store.counter);
//   const dispatch = useDispatch();
//   const selectorMessage = useSelector((store) => store.message);
//   //useSelector menerima sebuah function dimana param 1 adalah store keseluruhan
//   const [count, setCount] = useState(0);
//   const [inputCounter, setInputCounter] = useState(0);

//   const incrementCounter = () => {
//     setCount(count + 1);
//   };
//   const decrementCounter = () => {
//     setCount(count - 1);
//   };

//   const incrementGlobalCounter = () => {
//     //apapun yang dikirim ke dispatch akan masuk ke action
//     //apapun yang ditaro dalam dispatch adalah sebuah action(sebuah obj yang memiliki propert type)
//     dispatch({
//       type: "INCREMENT",
//     });
//   };

//   const decrementGlobalCounter = () => {
//     //apapun yang dikirim ke dispatch akan masuk ke action
//     //apapun yang ditaro dalam dispatch adalah sebuah action(sebuah obj yang memiliki propert type)
//     dispatch({
//       type: "DECREMENT",
//     });
//   };

//   const setGlobalCounter = () => {
//     dispatch({
//       type: "SET",
//       payload: inputCounter,
//     });
//     //mengirim action yang isinya type dan counterValue ke reducer
//   };

//   return (
//     <div>
//       <h1 className="text-center">Local State Version</h1>
//       <div className="flex items-center justify-around min-h-32">
//         <Button onPress={decrementCounter} color="danger">
//           Substract
//         </Button>
//         <span className="text-3xl font-semibold">{count}</span>
//         <Button onPress={incrementCounter} color="primary">
//           Add
//         </Button>
//       </div>
//       <Divider /> {/* Divider correctly imported here */}
//   <h1 className="text-center">Global State Version</h1>
//   <div className="flex items-center justify-around min-h-32">
//     <Button onPress={decrementGlobalCounter} color="danger">
//       Substract
//     </Button>
//     <div className="flex flex-col gap-1">
//       <Input
//         type="number"
//         value={inputCounter}
//         onChange={(event) => {
//           setInputCounter(parseInt(event.target.value));
//         }}
//       />
//       <Button onPress={setGlobalCounter} color="secondary">
//         Set
//       </Button>
//     </div>
//     <Button onPress={incrementGlobalCounter} color="primary">
//       Add
//     </Button>
//   </div>
//   <p className="text-center text-xl font-semibold">
//     Global count : {selector.count}
//   </p>
//   <p className="text-center text-xl font-semibold">
//     Global Message : {selectorMessage}
//   </p>
// </div>
//   );
// };

// export default Counter;

//menggunakan class component
class Counter extends React.Component {
  state = {
    count: 0,
    inputCounter: 0,
  };
  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <div className="flex items-center justify-around min-h-32">
          <Button onPress={this.decrementCounter} color="danger">
            Substract
          </Button>
          <span className="text-3xl font-semibold">{this.state.count}</span>
          <Button onPress={this.incrementCounter} color="primary">
            Add
          </Button>
        </div>
        <Divider />
        <h1 className="text-center">Global State Version</h1>
        <div className="flex items-center justify-around min-h-32">
          <Button onPress={this.props.decrementGlobalCounter} color="danger">
            Substract
          </Button>
          <div className="flex flex-col gap-1">
            <Input
              type="number"
              value={this.state.inputCounter}
              onChange={(event) => {
                this.setState({ inputCounter: parseInt(event.target.value) });
              }}
            />
            <Button
              onPress={() =>
                this.props.setGlobalCounter(this.state.inputCounter)
              }
              color="secondary"
            >
              Set
            </Button>
          </div>
          <Button onPress={this.props.incrementGlobalCounter} color="primary">
            Add
          </Button>
        </div>
        <p className="text-center text-xl font-semibold">
          Global count : {this.props.counter.count}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  //global state akan diconvert menjadi props
  return {
    counter: store.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementGlobalCounter: () => {
      dispatch({
        type: "INCREMENT",
      });
    },
    decrementGlobalCounter: () => {
      dispatch({
        type: "DECREMENT",
      });
    },
    setGlobalCounter: (inputCount) => {
      dispatch({
        type: "SET",
        payload: inputCount,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter;
