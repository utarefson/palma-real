import { useTranslation } from 'react-i18next';
import { PagePlaceholder } from '../components/PagePlaceholder';

export function ExpensesPage() {
  const { t } = useTranslation();

  return (
    <PagePlaceholder
      title={t('pages.expenses')}
      description={t('navbar.expenses')}
    />
  );
}
