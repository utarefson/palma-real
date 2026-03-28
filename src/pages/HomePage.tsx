import { useTranslation } from 'react-i18next';
import styles from './HomePage.module.css';

export function HomePage() {
  const { t } = useTranslation();

  const features = [
    { icon: '👥', key: 'landlords' },
    { icon: '🏢', key: 'apartments' },
    { icon: '🚗', key: 'parking' },
    { icon: '🐾', key: 'pets' },
    { icon: '🔧', key: 'maintenance' },
    { icon: '💰', key: 'expenses' },
    { icon: '📋', key: 'specialAssessments' },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{t('home.title')}</h1>
        <p className={styles.subtitle}>
          {t('home.subtitle')}
        </p>
      </section>

      <section className={styles.features}>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.key} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h2>{t(`home.features.${feature.key}` as any) || t(`navbar.${feature.key}`)}</h2>
              <p>{t(`home.features.${feature.key}`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>{t('home.getStarted')}</h2>
        <p>{t('home.getStartedDescription')}</p>
      </section>
    </div>
  );
}
