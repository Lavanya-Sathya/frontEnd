import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialValLogin = { email: "", pswd: "" };
  const [formLoginVal, setFormLoginVal] = useState(initialValLogin);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLoginVal({ ...formLoginVal, [name]: value });
    setFormError(validate(formLoginVal));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formLoginVal));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log("Successful");
      console.log(formLoginVal);
      alert("Logged in successfully");
      navigate("/Home");
    }
  }, [formError]);
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

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
    return errors;
  };
  return (
    <div className="signup-div mt-5 ">
      <div className="container p-2 text-light">
        <form className="formInput" onSubmit={handleSubmit}>
          <h2 className="text-center">LOGIN</h2>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i class="bi bi-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={formLoginVal.email}
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
                <i class="bi bi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
                value={formLoginVal.pswd}
                onChange={handleChange}
              />
            </div>
            <p className="error">{formError.pswd}</p>
          </div>
          <button type="LogIn" className="btnSubmit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
