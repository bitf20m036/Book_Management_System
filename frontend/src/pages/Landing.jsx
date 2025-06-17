import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Book Management System</h1>
        <p style={styles.subtitle}>Manage your book collection with ease</p>
      </div>

      <div style={styles.ctaContainer}>
        <Link to="/create" style={styles.link}>
          <button style={styles.primaryButton}>Add New Book</button>
        </Link>
        <Link to="/view" style={styles.link}>
          <button style={styles.secondaryButton}>Browse Books</button>
        </Link>
      </div>

      <div style={styles.features}>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>📝</div>
          <h3 style={styles.featureTitle}>Create</h3>
          <p style={styles.featureText}>Add new books to your collection</p>
          <small style={styles.hintText}>Use the "Add New Book" button above</small>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🔍</div>
          <h3 style={styles.featureTitle}>View</h3>
          <p style={styles.featureText}>Browse your complete book list</p>
          <small style={styles.hintText}>Use the "Browse Books" button above</small>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🛠️</div>
          <h3 style={styles.featureTitle}>Manage</h3>
          <p style={styles.featureText}>Edit or remove books as needed</p>
          <small style={styles.hintText}>Available after viewing books</small>
        </div>
      </div>
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
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#7f8c8d",
  },
  ctaContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "3rem",
  },
  link: {
    textDecoration: "none",
  },
  primaryButton: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
    ':hover': {
      backgroundColor: "#2980b9",
    },
  },
  secondaryButton: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
    ':hover': {
      backgroundColor: "#27ae60",
    },
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },
  featureCard: {
    backgroundColor: "#f8f9fa",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    textAlign: "center",
    cursor: "default",
    userSelect: "none",
  },
  featureIcon: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#000000", // Black color for icon
  },
  featureTitle: {
    color: "#000000", // Black color for title
    marginBottom: "0.5rem",
  },
  featureText: {
    color: "#000000", // Black color for text
    marginBottom: "0.5rem",
  },
  hintText: {
    color: "#555555", // Dark gray for hint text (slightly lighter than pure black)
    fontStyle: "italic",
    display: "block",
    marginTop: "0.5rem",
  },
};

export default Landing;