import { useTranslation } from 'react-i18next';
import { PagePlaceholder } from '../components/PagePlaceholder';

export function LandlordsPage() {
  const { t } = useTranslation();

  return (
    <PagePlaceholder
      title={t('pages.landlords')}
      description={t('navbar.landlords')}
    />
  );
}
