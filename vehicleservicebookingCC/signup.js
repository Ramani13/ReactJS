import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ServiceSelection() {
  const [carModel, setCarModel] = useState('');
  const [service, setService] = useState('');
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  // Prices for services
  const servicePrices = {
    "Car Wash": 30,
    "Engine Repair": 150,
    "Tire Replacement": 100,
    "Maintenance": 70,
    "Oil Change": 50
  };

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setService(selectedService);
    setAmount(servicePrices[selectedService] || 0); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (carModel && service) {
      navigate('/payment', { state: { selectedCarModel: carModel, selectedService: service, amount: amount } });
    } else {
      alert('Please select a car model and service');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Choose a Service</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Car Model:</label>
            <select value={carModel} onChange={(e) => setCarModel(e.target.value)} style={styles.input}>
              <option value="">Select Car Model</option>
              <option value="Toyota Corolla">Toyota Corolla</option>
              <option value="Honda Civic">Honda Civic</option>
              <option value="Ford Mustang">Ford Mustang</option>
              <option value="BMW 3 Series">BMW 3 Series</option>
              <option value="Audi A4">Audi A4</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label>Service Type:</label>
            <select value={service} onChange={handleServiceChange} style={styles.input}>
              <option value="">Select Service</option>
              <option value="Car Wash">Car Wash</option>
              <option value="Engine Repair">Engine Repair</option>
              <option value="Tire Replacement">Tire Replacement</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Oil Change">Oil Change</option>
            </select>
          </div>

          {service && <p style={styles.amount}>Amount: ${amount}</p>} {/* Display the corresponding amount */}

          <button type="submit" style={styles.button}>Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#e9ecef',
  },
  box: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '400px',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#007bff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #007bff',
    borderRadius: '4px',
  },
  amount: {
    marginTop: '10px',
    fontSize: '18px',
    color: '#28a745',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default ServiceSelection;
