import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import styles from './Navigation.module.css';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { path: '/', label: t('navbar.home') },
    { path: '/landlords', label: t('navbar.landlords') },
    //{ path: '/apartments', label: t('navbar.apartments') },
    //{ path: '/parking', label: t('navbar.parking') },
    //{ path: '/pets', label: t('navbar.pets') },
    //{ path: '/maintenance', label: t('navbar.maintenance') },
    { path: '/expenses', label: t('navbar.expenses') },
    { path: '/special-assessments', label: t('navbar.specialAssessments') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Palma Real
        </Link>

        <div className={styles.rightSection}>
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

          <LanguageSwitcher />

          <button
            className={styles.toggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger} />
            <span className={styles.hamburger} />
            <span className={styles.hamburger} />
          </button>
        </div>
      </div>
    </nav>
  );
}
