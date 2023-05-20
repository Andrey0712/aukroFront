import React, { useState } from "react";
import "./User.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/user/userSlice";

const UserSignupForm = ({ closeForm, toggleCurrentFormType }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    //проверяем заполнено ли поле
    const isNotEmpty = Object.values(values).some((val) => val);
    if (!isNotEmpty) return;
    //if all good
    dispatch(createUser(values));
    closeForm();
  };

  return (
    <div className="wrapper">
      <div className="close" onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
      <div className="titleLog">Sing up</div>

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
        </div>
        <div className="group">
          <input
            type="name"
            placeholder="Your name"
            name="name"
            value={values.name}
            avtoComplete="of"
            onChange={handleChange}
            required
          />
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
        <div className="group">
          <input
            type="avatar"
            placeholder="Your avatar"
            name="avatar"
            value={values.avatar}
            avtoComplete="of"
            onChange={handleChange}
            required
          />
        </div>
        <div className="link" onClick={() => toggleCurrentFormType("login")}>
          I already have an account
        </div>
        <button type="submit" className="submit">
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
