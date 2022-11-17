import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const inputType = e.target.name;
    const inputValue = e.target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name && email && validateEmail(email) && message) {
      e.stopPropagation();
      setError("Message submitted.");
    }
  };

  const errorMessage = () => {
    if (!name) {
      setError("Name is required.");
    } else if (!email) {
      setError("Email is required.");
    } else if (!validateEmail(email)) {
      setError("Email is Invalid.");
    } else if (!message) {
      setError("Message is required.");
    } else {
      setError("");
    }
  };

  return (
    <Form onClick={errorMessage}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name: </Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address: </Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message: </Form.Label>
        <Form.Control
          name="message"
          as="textarea"
          rows={3}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Text id="passwordHelpBlock" muted>
          {error}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Button variant="primary" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Contact;
