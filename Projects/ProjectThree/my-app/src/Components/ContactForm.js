import React, { useState } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setSuccessMessage(""); 
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.message = formData.message ? "" : "Message is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
      setSuccessMessage("Thank you! Your message has been successfully submitted.");
      setTimeout(() => {
        setSuccessMessage(""); 
      }, 3000);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={Boolean(errors.name)}
        helperText={errors.name}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={Boolean(errors.message)}
        helperText={errors.message}
        margin="normal"
        multiline
        rows={4}
      />
      <Button type="submit" variant="outlined" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
}

export default ContactForm;
