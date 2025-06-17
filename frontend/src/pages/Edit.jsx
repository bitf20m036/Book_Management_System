import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/view-single/${id}`
        );
        console.log(response);
        setUserDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/edit-book/${id}`,
        userDetails
      );
      console.log(response);
      alert("Book updated successfully!");
    } catch (error) {
      console.log(error);
      alert("Error updating book");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Edit Book</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Book name"
          value={userDetails.bookName || ""}
          name="bookName"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Book price"
          value={userDetails.bookPrice || ""}
          name="bookPrice"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Book rating (1-5)"
          value={userDetails.bookRating || ""}
          name="bookRating"
          onChange={handleChange}
          min="1"
          max="5"
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>
          Update Book
        </button>
      </form>
      <Link to={"/"} style={styles.link}>
        <button style={styles.button}>Back to Home</button>
      </Link>
    </div>
  );
};

// CSS styles as JavaScript objects
const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: "30px",
    fontSize: "28px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "30px",
  },
  input: {
    padding: "12px 15px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
    transition: "all 0.3s ease",
  },
  inputFocus: {
    border: "1px solid #3498db",
    boxShadow: "0 0 0 2px rgba(52,152,219,0.2)",
  },
  submitButton: {
    padding: "12px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "bold",
    marginTop: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "block",
    width: "100%",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
};

export default Edit;