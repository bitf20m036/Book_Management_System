import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleView = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/view-single/${id}`
        );
        setBookDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const deleteBook = async (selectedID) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axios.delete(`http://localhost:3000/delete/${selectedID}`);
        alert("Book deleted successfully");
        navigate("/view");
      } catch (error) {
        console.log("Error in deleting book", error);
        alert("Failed to delete book");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Book Details</h1>
        
        <div style={styles.details}>
          <div style={styles.detailRow}>
            <span style={styles.label}>Book Name:</span>
            <span style={styles.value}>{bookDetails.bookName}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.label}>Book Price:</span>
            <span style={styles.value}>${bookDetails.bookPrice}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.label}>Book Rating:</span>
            <span style={styles.value}>
              {bookDetails.bookRating}/5
              <span style={styles.ratingStars}>
                {"★".repeat(bookDetails.bookRating || 0)}
                {"☆".repeat(5 - (bookDetails.bookRating || 0))}
              </span>
            </span>
          </div>
        </div>

        <div style={styles.buttonGroup}>
          <button 
            onClick={() => navigate(`/edit/${bookDetails._id}`)} 
            style={styles.editButton}
          >
            Edit Book
          </button>
          <button 
            onClick={() => deleteBook(bookDetails._id)} 
            style={styles.deleteButton}
          >
            Delete Book
          </button>
        </div>

        <div style={styles.navButtons}>
          <button 
            onClick={() => navigate(-1)} 
            style={styles.secondaryButton}
          >
            ← Back
          </button>
          <Link to="/" style={styles.link}>
            <button style={styles.secondaryButton}>Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    width: "100%",
    maxWidth: "600px",
  },
  title: {
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
  },
  details: {
    marginBottom: "30px",
  },
  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0",
    borderBottom: "1px solid #eee",
  },
  label: {
    fontWeight: "bold",
    color: "#555",
    fontSize: "16px",
  },
  value: {
    color: "#333",
    fontSize: "16px",
  },
  ratingStars: {
    color: "#FFD700",
    marginLeft: "10px",
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
  },
  editButton: {
    flex: 1,
    padding: "12px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: "bold",
  },
  deleteButton: {
    flex: 1,
    padding: "12px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: "bold",
  },
  navButtons: {
    display: "flex",
    gap: "15px",
  },
  secondaryButton: {
    flex: 1,
    padding: "12px",
    backgroundColor: "#95a5a6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  link: {
    textDecoration: "none",
    flex: 1,
  },
};

export default SingleView;