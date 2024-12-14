import React, { useState, useEffect } from 'react';
import './LostAcef.css';

const LostAcef = () => {
  const [data, setData] = useState({ title: '', price: '', desc: '', komposisi: '' });
  const [weight, setWeight] = useState('');
  const [dose, setDose] = useState({ morning: 0, evening: 0, morningMl: 0, eveningMl: 0 });

  useEffect(() => {
    // Fetch data from Firebase
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://dosis-obat-anak-default-rtdb.firebaseio.com/lostacef.json'
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleWeightChange = (e) => {
    const inputWeight = e.target.value;
    setWeight(inputWeight);

    if (inputWeight > 0) {
      const totalDose = 30 * inputWeight; // 30mg/kg
      const morningDose = totalDose / 2; // Separuh dosis pagi
      const eveningDose = totalDose / 2; // Separuh dosis malam

      // Konversi dosis pagi dan malam ke ml
      const morningDoseMl = morningDose / 25; // 1ml = 25mg
      const eveningDoseMl = eveningDose / 25; // 1ml = 25mg

      setDose({
        morning: morningDose,
        evening: eveningDose,
        morningMl: morningDoseMl,
        eveningMl: eveningDoseMl,
      });
    } else {
      setDose({ morning: 0, evening: 0, morningMl: 0, eveningMl: 0 });
    }
  };

  return (
    <div className="lostacef-container">
      <div className="lostacef-card">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/medictech-since-2022.appspot.com/o/Dosis%20Obat%20Anak%2Flostacef.webp?alt=media&token=02832995-2323-4cbe-8b32-1d8bd565f7be"
          alt="LostAcef"
          className="lostacef-image"
        />
        <div className="lostacef-info">
          <h2 className="lostacef-title">{data.title}</h2>
          <p className="lostacef-price"><strong>Price:</strong> {data.price}</p>
          <p className="lostacef-desc"><strong>Description:</strong> {data.desc}</p>
          <p className="lostacef-komposisi"><strong>Composition:</strong> {data.komposisi}</p>
        </div>
      </div>

      <div className="lostacef-form">
        <h3>Calculate LostAcef Dose</h3>
        <label htmlFor="weight">Enter Child's Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
          className="lostacef-input"
        />

        {weight && (
          <div className="lostacef-dose-results">
            <p><strong>Morning Dose 08:00:</strong> {dose.morning.toFixed(2)} mg ({dose.morningMl.toFixed(2)} ml)</p>
            <p><strong>Evening Dose 20:00:</strong> {dose.evening.toFixed(2)} mg ({dose.eveningMl.toFixed(2)} ml)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LostAcef;
