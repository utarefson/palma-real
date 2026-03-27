import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/landlords', label: 'Landlords' },
    { path: '/apartments', label: 'Apartments' },
    { path: '/parking', label: 'Parking' },
    { path: '/pets', label: 'Pets' },
    { path: '/maintenance', label: 'Maintenance' },
    { path: '/expenses', label: 'Expenses' },
    { path: '/special-assessments', label: 'Special Assessments' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Palma Real
        </Link>

        <button
          className={styles.toggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${styles.link} ${isActive(item.path) ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
