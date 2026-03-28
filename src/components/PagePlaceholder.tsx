import { useTranslation } from 'react-i18next';
import styles from './PagePlaceholder.module.css';

interface PagePlaceholderProps {
  title: string;
  description?: string;
}

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
        <p className={styles.message}>{t('pages.underConstruction')}</p>
      </div>
    </div>
  );
}
