import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const initialVal = { username: "", phno: "", email: "", pswd: "", repwd: "" };
  const [formVal, setFormVal] = useState(initialVal);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
    setFormError(validate(formVal));

    // console.log(formVal);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formVal));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log("Successful");
      console.log(formVal);
      alert("Sign Up successfully");
      navigate("/login");
    }
  }, [formError]);
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phnoRegex = /^(?:\d{1,4}[-\s]?){1,3}\d{1,10}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.phno) {
      errors.phno = "Contact No. is required";
    } else if (!phnoRegex.test(values.phno)) {
      errors.phno = "Contact number is invalid";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.pswd) {
      errors.pswd = "Password is required";
    } else if (!passwordPattern.test(values.pswd)) {
      errors.pswd =
        "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.";
    }
    if (!values.repwd) {
      errors.repwd = "Please confrim password";
    } else if (values.pswd !== values.repwd) {
      console.log(
        "Mismatch between pswd and repwd:",
        values.pswd,
        values.repwd
      );
      errors.repwd = "Password should match";
    }
    return errors;
  };
  return (
    <div className="signup-div mt-5 ">
      <div className="container p-3 text-light">
        {/* <pre>{JSON.stringify(formVal, undefined, 2)}</pre> */}
        <form className="formInput" onSubmit={handleSubmit}>
          <h2 className="text-center mb-3">SIGNUP</h2>
          <div className="mb-2">
            <label htmlFor="username" className="form-label">
              Name:
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-person"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                name="username"
                value={formVal.username}
                onChange={handleChange}
              />
            </div>
            <p className="error">{formError.username}</p>
          </div>
          <div className="mb-2">
            <label htmlFor="phno" className="form-label">
              Contact Number:
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-telephone"></i>
              </span>
              <input
                type="tel"
                className="form-control"
                id="phno"
                placeholder="Enter Mobile number"
                name="phno"
                value={formVal.phno}
                onChange={handleChange}
              />
            </div>
            <p className="error">{formError.phno}</p>
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={formVal.email}
                onChange={handleChange}
              />
            </div>
            <p className="error">{formError.email}</p>
          </div>

          <div className="mb-2">
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
                value={formVal.pswd}
                onChange={handleChange}
              />
            </div>
            <p className="error">{formError.pswd}</p>
          </div>
          <div className="mb-2">
            <label htmlFor="repwd" className="form-label">
              Confirm Password:
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="repwd"
                placeholder="Re-Enter password"
                name="repwd"
                value={formVal.repwd}
                onChange={handleChange}
              />
            </div>
            <p className="error">{formError.repwd}</p>
          </div>
          <button type="submit" className="btnSubmit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
