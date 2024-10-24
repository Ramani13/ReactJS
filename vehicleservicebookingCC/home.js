import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Welcome to Vehicle Booking System</h2>
        <button style={styles.button} onClick={() => navigate('/login')}>
          Login
        </button>
        <button style={styles.button} onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: "url('https://www.shutterstock.com/image-photo/hand-mechanic-holding-car-service-260nw-2340377479.jpg')",
    backgroundSize:'1200px',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: '30px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Home;
