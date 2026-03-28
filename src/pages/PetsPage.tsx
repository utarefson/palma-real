import { useTranslation } from 'react-i18next';
import { PagePlaceholder } from '../components/PagePlaceholder';

export function PetsPage() {
  const { t } = useTranslation();

  return (
    <PagePlaceholder
      title={t('pages.pets')}
      description={t('navbar.pets')}
    />
  );
}
