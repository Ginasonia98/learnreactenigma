// import PropTypes from "prop-types"; // Import PropTypes untuk validasi props
// import { useContext } from "react";
import React from "react";
import { SignUpContext } from "../context/SignUpContext";
import { Button } from "@nextui-org/react";

//functional component
// const Heading = () => {
//   //panggil useContext lalu passing context yang diinginkan
//   //dalam hal ini SignUpContext
//   const signUpContext = useContext(SignUpContext); // Ganti nama variabel untuk menghindari konflik
//   //panggil value yang sudah kita terapkan yaitu title
//   return <h1>{signUpContext.title}</h1>;
// };

// Heading.propTypes = {
//   title: PropTypes.string, // Opsional karena tidak digunakan langsung di komponen
// };

//class component
class Heading extends React.Component {
  //contextType berasal dari React Component
  static contextType = SignUpContext;

  render() {
    //context berasal dari React Component
    return (
      <>
        <h1>{this.context.title}</h1>
        <Button
          onPress={()=>this.context.setTitle("Context Changed")}
          color="primary"
        >
          Change Title
        </Button>
      </>
    );
  }
}

export default Heading;
