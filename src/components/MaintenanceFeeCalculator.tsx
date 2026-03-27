import { useState } from 'react';
import styles from './MaintenanceFeeCalculator.module.css';

export function MaintenanceFeeCalculator() {
  const TOTAL_BUILT_UP_AREA = parseFloat(import.meta.env.VITE_TOTAL_BUILT_UP_AREA || '10000');
  const PAINTING_PRICE = parseFloat(import.meta.env.VITE_PAINTING_PRICE || '300000');

  const [area, setArea] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setArea(value);

    const areaValue = parseFloat(value);
    if (isNaN(areaValue) || areaValue <= 0) {
      setResult(null);
      return;
    }
    const fee = areaValue * PAINTING_PRICE / TOTAL_BUILT_UP_AREA;
    setResult(fee);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Impermeabilizaci&oacute;n y Pintado Exterior del Palma Real</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="area" className={styles.label}>
            Metros Cuadrados del Departamento
          </label>
          <div className={styles.inputWrapper}>
            <input
              id="area"
              type="number"
              value={area}
              onChange={handleInputChange}
              placeholder="Ingrese el area en m²"
              className={styles.input}
              min="0"
              step="0.01"
            />
            <span className={styles.icon}>m²</span>
          </div>
        </div>

        {result !== null && (
          <div className={styles.resultContainer}>
            <div className={styles.resultBox}>
              <p className={styles.resultLabel}>Cuota Extraordinaria:</p>
              <p className={styles.resultAmount}>Bs. {result.toFixed(2)}</p>
              <p className={styles.resultInfo}>
                Monto calculado para {area} m² de superficie.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
