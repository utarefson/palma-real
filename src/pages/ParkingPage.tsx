import { useTranslation } from 'react-i18next';
import { PagePlaceholder } from '../components/PagePlaceholder';

export function ParkingPage() {
  const { t } = useTranslation();

  return (
    <PagePlaceholder
      title={t('pages.parking')}
      description={t('navbar.parking')}
    />
  );
}
