import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';
import * as yup from "yup";
import { Button, Container, Form } from 'react-bootstrap';
import './App.css';
import FormTextField from './FormTextField';

const App = () => {

  return (
    <Container>
      <Formik
        validationSchema={yup.object({
          name: yup.string().required("Name is required"),
          password: yup.string().required("Password is required").min(8, "Must be at least 8 characters"),
          email: yup.string().required("Email is required").email("Must be valid email")
        })}
        onSubmit={console.log}
        initialValues={{
          name: "",
          password: "",
          email: "",
        }}
      >
        {({ values, isValid, handleSubmit, setSubmitting, isSubmitting, errors }) => (
          <Form noValidate handleSubmit={handleSubmit}>
            <FormTextField
              label="Name"
              type="text"
              name="name"
              isInvalid={!!errors.name}
              feedback={errors.name}
            />
            <FormTextField
              label="Password"
              type="password"
              name="password"
              isInvalid={!!errors.password}
              feedback={errors.password}
            />
            <FormTextField
              label="Email"
              type="text"
              name="email"
              isInvalid={!!errors.email}
              feedback={errors.email}
            />
            <Button
              disabled={!isValid || isSubmitting}
              variant="success"
              as="input"
              size="lg"
              type="submit"
              value="Submit"
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default App;