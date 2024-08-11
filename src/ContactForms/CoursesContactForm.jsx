import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { courseTitle } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (templateParams) => {
    emailjs.init("userId");
    emailjs.send("serviceId", "templateId", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitted(true);
      },
      function (err) {
        console.log("FAILED...", err);
      }
    );
    // fetch(Add_Student_Api, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',src/FixedComponent.jsx
    //   },
    //   body: JSON.stringify(templateParams),
    // })
    //   .then((response) => response.text()) // Use .text() instead of .json() to log the full response
    //   .then((text) => {
    //     console.log('Response Text:', text); // Log the response text
    //     const data = JSON.parse(text); // Parse JSON manually
    //     console.log('SUCCESS!', data);
    //     setIsSubmitted(true);
    //   })
    //   .catch((error) => {
    //     console.error('FAILED...', error);
    //   });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Must be a 10-digit phone number")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const templateParams = {
        Student_Name: values.name,
        PhoneNumber: values.phone,
        Email: values.email,
        course: courseTitle || "website",
      };
      sendEmail(templateParams);
      console.log(templateParams);
    },
  });

  const getCourseLink = (course) => {
    switch (course) {
      case "testing":
        return "https://chat.whatsapp.com/IZNLyZtlQQ7CiYKDM9PRmo";
      case "aws":
        return "https://chat.whatsapp.com/GQBsGRXCfG9A1kTJlw4TRg";
      case "mainframe":
        return "https://example.com/mainframes";
      case "cybersecurity":
        return "https://chat.whatsapp.com/BB70Cgt5yB3BXIpDZzrzDO";
      case "python":
        return "https://chat.whatsapp.com/DDYcboOEtPoBFp8O2kXKeC";
      case "java":
        return "https://chat.whatsapp.com/LQkqxkhoMb6KtXRqcklIQs";
      case "intern":
        return "https://chat.whatsapp.com/FZAcDFXLEiFD74oDSeKm1g";
      default:
        return "https://chat.whatsapp.com/FZAcDFXLEiFD74oDSeKm1g";
    }
  };

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#ffffff",
        width: isMobile ? "100%" : "100%",
        margin: "10px auto",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      {!isSubmitted ? (
        <>
          <Typography
            variant="h4"
            sx={{
              color: "#000000",
              letterSpacing: "0.01rem",
              lineHeight: "1.4",
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: 700,
              textAlign: "center",
              paddingBottom: "10px",
            }}
          >
            Register NOW!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#0051fc",
              fontWeight: 600,
              letterSpacing: "0.01rem",
              lineHeight: "1.4",
              fontFamily: "Source Sans Pro, sans-serif",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            We're here to help and answer any questions you might have.
          </Typography>
          <form
            onSubmit={formik.handleSubmit}
            style={{ maxWidth: "500px", margin: "0 auto" }}
          >
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              margin="normal"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone Number"
              variant="outlined"
              margin="normal"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                padding: 1.2,
                background: "linear-gradient(45deg, #783fbe, #161421)",
                color: "white",
                fontWeight: 400,
                fontSize: 18,
                "&:hover": {
                  background: "linear-gradient(45deg, #161421, #783fbe)",
                },
              }}
            >
              Submit
            </Button>
          </form>
        </>
      ) : (
        <Box sx={{ textAlign: "center", padding: "20px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: "zoomInOut 1.5s ease-in-out",
            }}
          >
            <WhatsAppIcon
              sx={{
                color: "#25D366",
                mr: 1,
                fontSize: 100,
                justifyContent: "center",
                alignItems: "center",
                animation: "blinking 2s infinite",
              }}
            />
          </Box>
          <Typography
            sx={{
              mt: 2,
              fontSize: 18,
              fontFamily: "Arial, sans-serif",
              fontWeight: 500,
              color: "#ED9121",
            }}
          >
            Join in Our WhatsApp Community to get Course Details
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                padding: 1,
                background: "linear-gradient(45deg, #32CD32, #006400)",
                color: "white",
                fontWeight: 400,
                marginTop: 2,
                fontSize: 15,
                "&:hover": {
                  background: "linear-gradient(45deg, #006400, #32CD32)",
                },
              }}
              href={getCourseLink(courseTitle)}
            >
              Click Here
            </Button>
          </Box>
          <style jsx global>{`
            @keyframes zoomInOut {
              0%,
              100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.1);
              }
            }

            @keyframes blinking {
              0%,
              100% {
                opacity: 1;
              }
              50% {
                opacity: 0;
              }
            }
          `}</style>
        </Box>
      )}
    </Box>
  );
};

export default ContactForm;
