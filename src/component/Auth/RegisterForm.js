import { TextField, Typography, Button, FormControl, InputLabel, Select, MenuItem, colors } from "@mui/material";
import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    role: ""
  };

  const handleSubmit = (values) => {
    console.log("Form signup values:", values);
  };

  //const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h6" className="text-center text-gray-200">
        Welcome!<br />
        Create Your New Account
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({handleSubmit }) => (
         <Form onSubmit={handleSubmit} className="p-5">
            <Field
              as={TextField}
              name="name"
              label="Name"
              fullWidth
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: "gray" } }}
              InputProps={{
                style: { color: "white", background: "#333" },
              }}
            />

            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              type="email"
              InputLabelProps={{ style: { color: "gray" } }}
              InputProps={{
                style: { color: "white", background: "#333" },
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
              InputLabelProps={{ style: { color: "gray" } }}
              InputProps={{
                style: { color: "white", background: "#333" },
              }}
            />

         {/* Role Selection */}

            <FormControl fullWidth margin="normal" variant="outlined"
                sx={{
                    background: "#333", // Match input fields
                    borderRadius: "5px",
                }}
                >
                <InputLabel style={{color:'gray'}}>Sign Up As</InputLabel>
                <Field
                    as={Select}
                    name="role"
                    fullWidth
                    sx={{
                    color: "gray", // Text color
                    "& .MuiSvgIcon-root": { color: "white" }, // Dropdown arrow color
                    }}
                >
                    <MenuItem value="ROLE_RESTAURANT_OWNER">Restaurant Owner</MenuItem>
                    <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
                </Field>
            </FormControl>


            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ marginTop: "10px", backgroundColor: "gray" }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>

      <div className="text-gray-400 ml-5">
        Already have an account?
        <Link to={"/account/login"} className="ml-2 text-gray-200">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
