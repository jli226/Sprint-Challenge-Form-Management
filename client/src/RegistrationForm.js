import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import MealCard from "./MealCard";

const RegistrationForm = ({ values, errors, touched, status }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (status) {
      setData(status);
      console.log(data);
    }
  }, [status]);

  return (
    <>
      <Form>
        <Field type="username" name="username" placeholder="Username" />
        <Field type="password" name="password" placeholder="Password" />
        <button type="submit" data-testid="formSubmitButton">
          Sign Up
        </button>
        <div data-test-id="error-messages">
          {touched.username && errors.username && (
            <p data-testid="usernameErrorMessage">{errors.username}</p>
          )}
          {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
      </Form>
      {data.map(meal => (
        <MealCard
          key={meal.name}
          name={meal.name}
          course={meal.course}
          technique={meal.technique}
        />
      ))}
      <MealCard />
    </>
  );
};

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
  }),

  handleSubmit(values, { setStatus }) {
    console.log(values);
    axios
      .post("http://localhost:5000/api/register", values)
      .then(res => {
        console.log("API call good: ", res.data);

        axios.get("http://localhost:5000/api/restricted/data").then(res => {
          console.log("API get is good :", res.data);
          setStatus(res.data);
        });
      })

      .catch(err => console.log("Axios error: ", err));
  }
})(RegistrationForm);

export default FormikRegistrationForm;
