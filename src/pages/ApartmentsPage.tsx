import { useTranslation } from 'react-i18next';
import { PagePlaceholder } from '../components/PagePlaceholder';

export function ApartmentsPage() {
  const { t } = useTranslation();

  return (
    <PagePlaceholder
      title={t('pages.apartments')}
      description={t('navbar.apartments')}
    />
  );
}
