import React, { useState, useEffect } from "react";
const TextArea = (props) => {
  const {
    label,
    setError,
    hasError,
    value,
    setValue,
    validate,
    clickedFormButton,
    ...restProps
  } = props;
  const [errorMsg, setErrorMsg] = useState("");
  const [isBlurred, setBlurred] = useState(false);
  const changeHandler = (event) => {
    setValue(event.target.value);

    const { isValid, msg } = validate(event.target.value);
    if (isValid) {
      setError(false);
      setErrorMsg(msg);
    } else {
      setError(true);
      setErrorMsg(msg);
    }
  };

  const blurHandler = (event) => {
    setBlurred(true);
    changeHandler(event);
  };
  useEffect(() => {
    const { isValid, msg } = validate(value);
    if (isValid) {
      setError(false);
      setErrorMsg(msg);
    } else {
      setError(true);
      setErrorMsg(msg);
    }
  }, [props.clickedFormButton]);
  return (
    <React.Fragment>
      <div className="row my-4 form-group">
        <label>{label}</label>
        <textarea
          className="form-control"
          onChange={changeHandler}
          value={value}
          onBlur={blurHandler}
          {...restProps}
        />
        {(isBlurred || clickedFormButton) && hasError && (
          <div className="invalid-feedback d-block">{errorMsg}</div>
        )}
      </div>
    </React.Fragment>
  );
};
export default TextArea;
