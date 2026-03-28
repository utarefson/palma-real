import { useTranslation } from 'react-i18next';
import { PagePlaceholder } from '../components/PagePlaceholder';

export function MaintenancePage() {
  const { t } = useTranslation();

  return (
    <PagePlaceholder
      title={t('pages.maintenance')}
      description={t('navbar.maintenance')}
    />
  );
}
