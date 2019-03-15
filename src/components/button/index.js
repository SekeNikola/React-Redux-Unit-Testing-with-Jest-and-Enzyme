import React from "react";
import PropTypes from "prop-types";

const SharedButton = () => {
  const submitEvent = () => {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  };
  return (
    <button onClick={() => submitEvent()} data-test="buttonComponent">
      Show more
    </button>
  );
};

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};
export default SharedButton;
