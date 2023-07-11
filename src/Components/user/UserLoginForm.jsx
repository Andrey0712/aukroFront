import React, { useState } from "react";
import "./User.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

const UserSignupForm = ({ toggleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(loginUser(values));
    closeForm();
  };

  return (
    <div className="wrapper">
      <div className="close" onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
      <div className="titleLog">Log In</div>

      <form className="form" onSubmit={handelSubmit}>
        <div className="group">
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            avtoComplete="of"
            onChange={handleChange}
            required
          />
          {/* <label for="email" class="form__label">
            {" "}
            Email{" "}
          </label> */}
        </div>

        <div className="group">
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={values.password}
            avtoComplete="of"
            onChange={handleChange}
            required
          />
        </div>

        <div onClick={() => toggleCurrentFormType("signup")} className="link">
          Create an account
        </div>

        <button type="submit" className="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
