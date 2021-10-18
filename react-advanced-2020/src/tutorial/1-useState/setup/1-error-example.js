import React from "react";

const ErrorExample = () => {
  let title = "This is a Title";
  const handleClick = () => {
    title = "This is a new title";
    // The title changes but the component is not re rendered.
    // To rerender this component we need use state.
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onclick={handleClick}>
        ClickMe
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
