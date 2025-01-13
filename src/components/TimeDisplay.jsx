/* eslint-disable react/prop-types */

const TimeDisplay = (props) => {
  return (
    <div>
      <h2>Current Time: {props.timestamp}</h2>
    </div>
  );
};

export default TimeDisplay;
