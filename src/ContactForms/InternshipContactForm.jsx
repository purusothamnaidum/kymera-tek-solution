import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "3px",
  color: "#1F305E",
  marginBottom: "10px",
  border: "0.5px solid grey",
  outline: "none",
  fontSize: "16px",
  padding: "13px",
  backgroundColor: "white",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Name must contain only alphabets")
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  contactNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact number must be exactly 10 digits")
    .required('Contact number is required'),
  qualification: Yup.string().required('Qualification is required'),
  interestedArea: Yup.string().required('Interested area is required'),
  hearAboutUs: Yup.string().required('This field is required'),
});

const InternshipContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{
      maxWidth: isMobile ? "100%" : "100%", 
      margin: "auto", 
      padding: "30px", 
      borderRadius: "10px", 
      backgroundColor: "#F5F5F5",
      boxSizing: "border-box",
    }}>
      <Typography variant="h4" component="h2" gutterBottom>Internship Contact Form</Typography>
      <Formik
        initialValues={{
          name: '',
          email: '',
          contactNumber: '',
          qualification: '',
          interestedArea: '',
          hearAboutUs: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box sx={{ padding: '5px' }}>
              <Field type="text" name="name" placeholder="Name" style={inputStyle} />
              <ErrorMessage name="name" component="div" style={{ color: 'red', marginBottom: '5px' }} />
            </Box>
            <Box sx={{ padding: '5px' }}>
              <Field type="email" name="email" placeholder="Email ID" style={inputStyle} />
              <ErrorMessage name="email" component="div" style={{ color: 'red', marginBottom: '5px' }} />
            </Box>
            <Box sx={{ padding: '5px' }}>
              <Field type="text" name="contactNumber" placeholder="Contact Number" style={inputStyle} />
              <ErrorMessage name="contactNumber" component="div" style={{ color: 'red', marginBottom: '5px' }} />
            </Box>
            <Box sx={{ padding: '5px' }}>
              <Field as="select" name="qualification" style={inputStyle}>
                <option value="" label="Select qualification" />
                <option value="highSchool" label="High School" />
                <option value="bachelors" label="Bachelor's Degree" />
                <option value="masters" label="Master's Degree" />
                <option value="phd" label="PhD" />
              </Field>
              <ErrorMessage name="qualification" component="div" style={{ color: 'red', marginBottom: '5px' }} />
            </Box>
            <Box sx={{ padding: '5px' }}>
              <Field as="select" name="interestedArea" style={inputStyle}>
                <option value="" label="Select interested area" />
                <option value="development" label="Development" />
                <option value="design" label="Design" />
                <option value="marketing" label="Marketing" />
                <option value="management" label="Management" />
              </Field>
              <ErrorMessage name="interestedArea" component="div" style={{ color: 'red', marginBottom: '5px' }} />
            </Box>
            <Box sx={{ padding: '5px' }}>
              <Field as="select" name="hearAboutUs" style={inputStyle}>
                <option value="" label="How did you hear about us?" />
                <option value="socialMedia" label="Social Media" />
                <option value="friend" label="Friend" />
                <option value="website" label="Website" />
                <option value="other" label="Other" />
              </Field>
              <ErrorMessage name="hearAboutUs" component="div" style={{ color: 'red', marginBottom: '5px' }} />
            </Box>
            <Box>
              <Button
                type="submit"
                disabled={isSubmitting}
                sx={{
                  width: "100%",
                  padding: "13px",
                  backgroundColor: '#1F305E',
                  color: 'white',
                  cursor: 'pointer',
                  border: 'none',
                  borderRadius: "3px",
                  fontSize: "16px",
                  '&:hover': {
                    backgroundColor: "#14294d",
                  }
                }}
              >
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default InternshipContactForm;
