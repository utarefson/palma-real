import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ExpensesFeeCalculator.module.css';

export function ExpensesFeeCalculator() {
  const { t } = useTranslation();
  const TOTAL_BUILT_UP_AREA = parseFloat(import.meta.env.VITE_TOTAL_BUILT_UP_AREA || '15496.68');
  const SERVICE_MAINTENANCE_PRICE = parseFloat(import.meta.env.VITE_SERVICE_MAINTENANCE_PRICE || '58052.70');
  const WATER_LAST_MONTH_CONSUMPTION = parseFloat(import.meta.env.VITE_WATER_LAST_MONTH_CONSUMPTION || '20000');
  const TOTAL_OCCUPANTS = parseFloat(import.meta.env.VITE_TOTAL_OCCUPANTS || '200');

  const [apartmentArea, setApartmentArea] = useState('');
  const [occupants, setOccupants] = useState('');
  const [result, setResult] = useState<{ staticCost: number; dynamicCost: number; totalCost: number } | null>(null);

  const calculateResult = (area: string, occ: string) => {
    const areaValue = parseFloat(area);
    const occValue = parseFloat(occ);

    if (isNaN(areaValue) || areaValue <= 0 || isNaN(occValue) || occValue <= 0) {
      setResult(null);
      return;
    }

    const staticCost = (areaValue * SERVICE_MAINTENANCE_PRICE) / TOTAL_BUILT_UP_AREA;
    const dynamicCost = (occValue * WATER_LAST_MONTH_CONSUMPTION) / TOTAL_OCCUPANTS;
    const totalCost = staticCost + dynamicCost;

    setResult({ staticCost, dynamicCost, totalCost });
  };

  const handleAreaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setApartmentArea(value);
    calculateResult(value, occupants);
  };

  const handleOccupantsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOccupants(value);
    calculateResult(apartmentArea, value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>{t('expensesCalculator.title')}</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="area" className={styles.label}>
            {t('expensesCalculator.areaLabel')}
          </label>
          <div className={styles.inputWrapper}>
            <input
              id="area"
              type="number"
              value={apartmentArea}
              onChange={handleAreaChange}
              placeholder={t('expensesCalculator.areaPlaceholder')}
              className={styles.input}
              min="0"
              step="0.01"
            />
            <span className={styles.icon}>m²</span>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="occupants" className={styles.label}>
            {t('expensesCalculator.occupantsLabel')}
          </label>
          <div className={styles.inputWrapper}>
            <input
              id="occupants"
              type="number"
              value={occupants}
              onChange={handleOccupantsChange}
              placeholder={t('expensesCalculator.occupantsPlaceholder')}
              className={styles.input}
              min="0"
              step="1"
            />
            <span className={styles.icon}>👤</span>
          </div>
        </div>

        {result !== null && (
          <div className={styles.resultContainer}>
            <div className={styles.resultBox}>
              <div className={styles.resultRow}>
                <span className={styles.costLabel}>{t('expensesCalculator.staticCost')}</span>
                <span className={styles.costValue}>Bs. {result.staticCost.toFixed(2)}</span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.costLabel}>{t('expensesCalculator.dynamicCost')}</span>
                <span className={styles.costValue}>Bs. {result.dynamicCost.toFixed(2)}</span>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.resultRow + ' ' + styles.totalRow}>
                <span className={styles.totalLabel}>{t('expensesCalculator.totalCost')}</span>
                <span className={styles.totalAmount}>Bs. {result.totalCost.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
