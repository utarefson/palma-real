import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

// Countries that primarily speak Spanish
const SPANISH_SPEAKING_COUNTRIES = [
  'ES', // Spain
  'MX', // Mexico
  'AR', // Argentina
  'CO', // Colombia
  'PE', // Peru
  'VE', // Venezuela
  'CL', // Chile
  'EC', // Ecuador
  'BO', // Bolivia
  'PY', // Paraguay
  'UY', // Uruguay
  'GT', // Guatemala
  'HN', // Honduras
  'SV', // El Salvador
  'NI', // Nicaragua
  'CR', // Costa Rica
  'PA', // Panama
  'DO', // Dominican Republic
  'CU', // Cuba
  'PR', // Puerto Rico
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const hasDetected = useRef(false);

  useEffect(() => {
    // Prevent multiple requests in development (React Strict Mode)
    if (hasDetected.current) return;
    hasDetected.current = true;

    const detectLanguageByIP = async () => {
      console.log('🔍 IP Geolocation Detection Started');
      try {
        // Check if language is already set in localStorage
        const savedLanguage = localStorage.getItem('i18nextLng');
        if (savedLanguage) {
          console.log(`✅ Language already saved: ${savedLanguage}`);
          return;
        }

        // Fetch user's country via IP geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        console.log('Geolocation Data:', data);
        const countryCode = data.country_code;

        // Set language based on country
        if (SPANISH_SPEAKING_COUNTRIES.includes(countryCode)) {
          i18n.changeLanguage('es');
        } else {
          i18n.changeLanguage('en');
        }
      } catch (error) {
        console.warn('⚠️ Could not detect country from IP:', error);
        // Fallback to browser language detection (already configured in i18n)
        i18n.changeLanguage('es');
      }
    };

    detectLanguageByIP();
  }, [i18n]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.button} ${i18n.language === 'en' ? styles.active : ''}`}
        onClick={() => handleLanguageChange('en')}
        title="English"
      >
        EN
      </button>
      <span className={styles.separator}>|</span>
      <button
        className={`${styles.button} ${i18n.language === 'es' ? styles.active : ''}`}
        onClick={() => handleLanguageChange('es')}
        title="Español"
      >
        ES
      </button>
    </div>
  );
}
