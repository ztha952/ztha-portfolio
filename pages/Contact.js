import Head from "next/head";
import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import emailjs from "emailjs-com";

const Contact = () => {
  const [close, setClose] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8k2gokc",
        "template_4jnr2mo",
        formRef.current,
        "user_Fjp6kF1HqDs8hirWaxf8S"
      )
      .then(
        (result) => {
          console.log(result.text);
          setClose(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <div
        style={{
          margin: " 2rem 4rem",
          
        }}
      >
        <Typography variant="h4" align="center">
          Start Your Journey With Me!
        </Typography>

        <form
          ref={formRef}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5rem 0px",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            type="text"
            variant="standard"
            id="standard-basic"
            label="Enter Your Name"
            name="user_name"
            margin="dense"
          />
          <TextField
            type="text"
            variant="standard"
            id="standard-basic"
            label="Subject"
            name="user_subject"
            margin="dense"
          />
          <TextField
            type="text"
            variant="standard"
            id="standard-basic"
            label="Enter Email Address"
            name="user_email"
            margin="dense"
          />
          <TextField
            multiline
            rows={4}
            margin="dense"
            name="message"
            id="standard-basic"
            label="Message"
          />
        </form>
        <Box textAlign="center">
          <Button variant="contained" onClick={handleSubmit}>
            Wave Me!
          </Button>
        </Box>
        {close && (
          <Typography variant="h6" align="center">
            Successful! Thanks for Messaging Me!
          </Typography>
        )}
      </div>
    </>
  );
};

export default Contact;
