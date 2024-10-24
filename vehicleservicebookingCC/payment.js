

import React, { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount] = useState(500); 
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment of ₹${amount} successful through ${paymentMethod}!`);
    
  };

  
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(https://example.com/your-background-image.jpg)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    box: {
      padding: '20px',
      backgroundColor: 'rgba(300, 300, 433, 1.6)', 
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      width: '300px', 
    },
    input: {
      width: '100%',
      padding: '10px',
      marginTop: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      width: '100%',
      marginTop: '20px',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
    option: {
      marginBottom: '15px',
    },
    total: {
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Payment Method</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.option}>
            <label>
              <input 
                type="radio" 
                value="UPI" 
                checked={paymentMethod === 'UPI'} 
                onChange={(e) => setPaymentMethod(e.target.value)} 
              />
              UPI
            </label>
            {paymentMethod === 'UPI' && (
              <input 
                style={styles.input} 
                type="text" 
                placeholder="Enter UPI ID" 
                value={upiId} 
                onChange={(e) => setUpiId(e.target.value)} 
                required 
              />
            )}
          </div>

          <div style={styles.option}>
            <label>
              <input 
                type="radio" 
                value="Card" 
                checked={paymentMethod === 'Card'} 
                onChange={(e) => setPaymentMethod(e.target.value)} 
              />
              Credit/Debit Card
            </label>
            {paymentMethod === 'Card' && (
              <>
                <input 
                  style={styles.input} 
                  type="text" 
                  placeholder="Card Number" 
                  value={cardNumber} 
                  onChange={(e) => setCardNumber(e.target.value)} 
                  required 
                />
                <input 
                  style={styles.input} 
                  type="text" 
                  placeholder="Expiry Date (MM/YY)" 
                  value={expiryDate} 
                  onChange={(e) => setExpiryDate(e.target.value)} 
                  required 
                />
                <input 
                  style={styles.input} 
                  type="text" 
                  placeholder="CVV" 
                  value={cvv} 
                  onChange={(e) => setCvv(e.target.value)} 
                  required 
                />
              </>
            )}
          </div>

          <div style={styles.option}>
            <label>
              <input 
                type="radio" 
                value="PayPal" 
                checked={paymentMethod === 'PayPal'} 
                onChange={(e) => setPaymentMethod(e.target.value)} 
              />
              PayPal
            </label>
            {paymentMethod === 'PayPal' && (
              <input 
                style={styles.input} 
                type="email" 
                placeholder="Enter PayPal Email" 
                required 
              />
            )}
          </div>

          <div style={styles.option}>
            <label>
              <input 
                type="radio" 
                value="Net Banking" 
                checked={paymentMethod === 'Net Banking'} 
                onChange={(e) => setPaymentMethod(e.target.value)} 
              />
              Net Banking
            </label>
            {paymentMethod === 'Net Banking' && (
              <input 
                style={styles.input} 
                type="text" 
                placeholder="Bank Name" 
                required 
              />
            )}
          </div>

          <div style={styles.total}>
            <h4>Total Amount: ₹{amount}</h4>
            <button 
              type="submit" 
              style={styles.button}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
