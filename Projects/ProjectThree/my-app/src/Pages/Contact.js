
import React from "react";
import ContactForm from "../Components/ContactForm";
import { Box, Typography } from "@mui/material";

function Contact() {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4">Contact Page</Typography>
      <ContactForm />
    </Box>
  );
}

export default Contact;
