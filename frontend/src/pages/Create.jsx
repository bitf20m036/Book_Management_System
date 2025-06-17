import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [formDetails, setFormDetails] = useState({
    bookName: "",
    bookPrice: "",
    bookRating: "",
  });

  const handleChange = (e) => {
    setFormDetails((formDetails) => ({
      ...formDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/create",
        formDetails
      );
      console.log(response);
      alert("Book created successfully");
      setFormDetails({
        bookName: "",
        bookPrice: "",
        bookRating: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Book</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="bookName"
          placeholder="Book Name"
          value={formDetails.bookName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="number"
          name="bookPrice"
          placeholder="Book Price"
          value={formDetails.bookPrice}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="number"
          name="bookRating"
          placeholder="Book Rating (1-5)"
          value={formDetails.bookRating}
          onChange={handleChange}
          min="1"
          max="5"
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>

      <div style={styles.buttonGroup}>
        <Link to={"/"} style={styles.link}>
          <button style={styles.button}>Home</button>
        </Link>
        <Link to={"/view"} style={styles.link}>
          <button style={styles.button}>View all books</button>
        </Link>
      </div>
    </div>
  );
};

// CSS styles as JavaScript objects
const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "30px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
    outline: "none",
    transition: "border 0.3s",
  },
  inputFocus: {
    border: "1px solid #3498db",
  },
  submitButton: {
    padding: "12px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  link: {
    textDecoration: "none",
  },
};

export default Create;