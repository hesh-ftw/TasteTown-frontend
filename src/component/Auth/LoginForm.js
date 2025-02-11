import { TextField, Typography, Button } from "@mui/material";
import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../State/Authentication/Action";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate=useNavigate()
  const dispatch= useDispatch()

  const handleSubmit = (values) => {
    console.log("Form values:", values);

    dispatch(loginUser({userData:values,navigate})) // navigate to loginUser function in auth action to send api req.
  };

 // const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h6" className="text-center text-gray-200">
      Welcome!<br/>
      Sign in to continue.
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="p-5">
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              type="email"
              InputLabelProps={{ style: { color: "gray" } }} // Label color
              InputProps={{
                style: { color: "white", background: "#333" }, // Input background & text color
              }}
            />

            <Field
              as={TextField}
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
              InputLabelProps={{ style: { color: "gray" } }} // Label color
              InputProps={{
                style: { color: "white", background: "#333" }, // Input background & text color
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "10px", backgroundColor: "gray" }}
            >
              Submit
            </Button>

            <div className="text-gray-400 pt-5">
                Forgot Your Password ? 
            <Link className="ml-2 text-gray-200">
                  Reset 
            </Link>
            </div>
            <div className="text-gray-400 ">
                    Still don't have an account?
                    <Link to={"/account/register"} className="ml-2 text-gray-200">
                      Sign Up
                    </Link>
                  </div>
            
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
