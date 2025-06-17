import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const View = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/view");
        setUserDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Book Collection</h1>
        <div style={styles.buttonGroup}>
          <Link to="/create" style={styles.link}>
            <button style={styles.primaryButton}>+ Add New Book</button>
          </Link>
          <Link to="/" style={styles.link}>
            <button style={styles.secondaryButton}>Home</button>
          </Link>
        </div>
      </div>

      {loading ? (
        <div style={styles.loader}>Loading books...</div>
      ) : userDetails.length === 0 ? (
        <div style={styles.emptyState}>
          <p>No books found. Add your first book!</p>
          <Link to="/create" style={styles.link}>
            <button style={styles.primaryButton}>Create Book</button>
          </Link>
        </div>
      ) : (
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.tableHeader}>#</th>
                <th style={styles.tableHeader}>Book Name</th>
                <th style={styles.tableHeader}>Price</th>
                <th style={styles.tableHeader}>Rating</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userDetails.map((userDetail, index) => (
                <tr key={userDetail._id} style={styles.tableRow}>
                  <td style={styles.tableCell}>{index + 1}</td>
                  <td style={styles.tableCell}>{userDetail.bookName}</td>
                  <td style={styles.tableCell}>${userDetail.bookPrice}</td>
                  <td style={styles.tableCell}>
                    <span style={styles.rating}>
                      {"★".repeat(userDetail.bookRating)}
                      {"☆".repeat(5 - userDetail.bookRating)}
                    </span>
                  </td>
                  <td style={styles.tableCell}>
                    <Link 
                      to={`/view-single/${userDetail._id}`} 
                      style={styles.viewLink}
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
    flexWrap: "wrap",
    gap: "1rem",
  },
  title: {
    fontSize: "2rem",
    color: "#2c3e50",
    margin: 0,
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    textDecoration: "none",
  },
  primaryButton: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    ':hover': {
      backgroundColor: "#2980b9",
    },
  },
  secondaryButton: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#95a5a6",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    ':hover': {
      backgroundColor: "#7f8c8d",
    },
  },
  tableContainer: {
    overflowX: "auto",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
  },
  tableHeaderRow: {
    backgroundColor: "#f8f9fa",
  },
  tableHeader: {
    padding: "1rem",
    textAlign: "left",
    fontWeight: "bold",
    color: "#2c3e50",
    borderBottom: "2px solid #e9ecef",
  },
  tableRow: {
    borderBottom: "1px solid #e9ecef",
    ':hover': {
      backgroundColor: "#f8f9fa",
    },
  },
  tableCell: {
    padding: "1rem",
    color: "#495057",
  },
  rating: {
    color: "#FFD700",
    fontSize: "1.2rem",
  },
  viewLink: {
    color: "#3498db",
    textDecoration: "none",
    fontWeight: "500",
    ':hover': {
      textDecoration: "underline",
    },
  },
  loader: {
    textAlign: "center",
    padding: "2rem",
    color: "#6c757d",
  },
  emptyState: {
    textAlign: "center",
    padding: "3rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    color: "#6c757d",
  },
};

export default View;