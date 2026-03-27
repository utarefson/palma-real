import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to Palma Real</h1>
        <p className={styles.subtitle}>
          Property Management System for Landlords, Apartments, and Tenants
        </p>
      </section>

      <section className={styles.features}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>👥</div>
            <h2>Landlords</h2>
            <p>Manage your landlord information and profiles</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🏢</div>
            <h2>Apartments</h2>
            <p>Handle apartment listings and property details</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🚗</div>
            <h2>Parking</h2>
            <p>Manage parking spaces and assignments</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🐾</div>
            <h2>Pets</h2>
            <p>Track pet policies and tenant pets</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🔧</div>
            <h2>Maintenance</h2>
            <p>Schedule and track maintenance requests</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>💰</div>
            <h2>Expenses</h2>
            <p>Monitor and manage property expenses</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>📋</div>
            <h2>Special Assessments</h2>
            <p>Track special assessments and fees</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Get Started</h2>
        <p>Select a section from the navigation menu above to begin managing your properties.</p>
      </section>
    </div>
  );
}
