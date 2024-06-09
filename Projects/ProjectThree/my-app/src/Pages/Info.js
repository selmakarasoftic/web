import React from 'react';
import { Typography, Grid, Box, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const stuff = [
  {
    question: 'What is ReactJS?',
    answer: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.'
  },
  {
    question: 'What is VSC?',
    answer: 'Visual Studio Code, also commonly referred to as VS Code, is a source-code editor developed by Microsoft for Windows, Linux, macOS and web browsers. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded version control with Git.'
  },
  {
    question: 'About MUI',
    answer: 'MUI provides a simple, customizable, and accessible library of React components. Follow your own design system, or start with Material Design.'
  }
];

const FAQ = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h3" gutterBottom>
        Useful information
      </Typography>
      <Grid container spacing={3}>
        {stuff.map((stuff, index) => (
          <Grid item xs={12} key={index}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{stuff.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  {stuff.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FAQ;
