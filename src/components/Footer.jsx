/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes untuk validasi props
import { Button } from "@nextui-org/react";
import { withBackground } from "../hoc/withBackground";

class Footer extends React.Component {
  state = {
    message: "Hello World",
  };

  alertUser = () => {
    alert("DID MOUNT");
  };

  changeMessage = () => {
    this.setState({ message: "State Changed" });
  };

  render() {
    return (
      <footer data-testid="footer" className="bg-purple-600 text-white py-6">
        {/* Container for the footer content */}
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">My Footer</h3>
          {/* Display the message passed from parent */}
          <p data-testid="props-message" className="text-lg">
            {this.props.message}
          </p>
          {/* Display additional prop if any */}
          {/* <p data-testid="state-message" className="text-lg">
            {this.props.propsTambahan}
          </p> */}
          {/* Display local state */}
          <p data-testid="state-message" className="text-lg">
            {this.state.message}
          </p>
          {/* Button to change state */}
          <Button
            data-testid="change-message-button"
            onPress={this.changeMessage}
            className="mt-4 bg-blue-500 hover:bg-blue-600"
          >
            Change Message
          </Button>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  message: PropTypes.string.isRequired, // Properti 'message' wajib
};

export default withBackground(Footer);
